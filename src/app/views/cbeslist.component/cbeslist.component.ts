import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoadingComponent } from '../loading/loading.component';
import { CBEsService } from '../../services/CBEs.service';
import { DateFormatService } from '../../services/ConvertDate.service';
import CBEs from '../../models/CBEs';
import Response from '../../models/response';
@Component({
  selector: 'cbeslist-page',
  standalone: true,
  templateUrl: './cbeslist.component.html',
  styleUrls: ['./cbeslist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, LoadingComponent],
  providers: [DatePipe],
})
export class CBEsListComponent {
  AllCBEs: CBEs[] = [];
  datafromapi = false;
  filteredCBEs: CBEs[] = [];
  searchQuery: string = '';
  usesearch = false;
  constructor(
    private cbesService: CBEsService,
    private dateformatService: DateFormatService
  ) {}

  ngOnInit(): void {
    this.cbesService.GetAll().subscribe((result: Response) => {
      this.AllCBEs = result.data.map((data: any) => {
        return {
          ...data,
          updateDate: this.dateformatService.convertDateFormat(data.updateDate), // ส่งไปแปลววันที่่ที่เซอร์วิส
        };
      });
      this.datafromapi = true;
      console.log('this ALL DATA', result);
    });
  }

  onEdit(id : number){
    console.log("edit this id   :",id)
  }

  onSearch() {
    if (this.searchQuery) {
      this.filteredCBEs = this.AllCBEs.filter(data =>
        data.thaiName.includes(this.searchQuery)
      );
      this.usesearch = true;
      if(this.filteredCBEs.length == 0 ){
      alert("ไม่มีชื่อนี้")
      this.filteredCBEs = this.AllCBEs;
      }
    } else {
      this.filteredCBEs = this.AllCBEs;
      this.usesearch = false;
    }
  }

  onDelete(id :number){
  }
}




