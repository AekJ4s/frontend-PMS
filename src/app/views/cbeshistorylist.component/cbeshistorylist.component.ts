import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsService } from '../../services/CBEs.service';
import CBEs from '../../models/CBEs';
import Response from '../../models/response';
import { DateFormatService } from '../../services/ConvertDate.service';
import CBEsLog from '../../models/CBEsLog';
import CBEsLogHeader from '../../models/CBEsLogHeader';
@Component({
  selector: 'cbeshistorylist-page',
  standalone: true,
  templateUrl: './cbeshistorylist.component.html',
  styleUrls: ['./cbeshistorylist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsHistoryListComponent {
  id : number | undefined = 0
  datafromapi = false
  LogHeader: CBEsLogHeader[] = []
  constructor(
    private route : ActivatedRoute,
    private cbesService:CBEsService,
    private dateformatService : DateFormatService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0; // Convert string to number
      console.log('id receive : ', this.id);
    });
    if(this.id != 0 && this.id != undefined && this.id != null){
      this.cbesService.GetHistory(this.id).subscribe((result:Response)=>{
        this.LogHeader = result.data.map((data: any) => {
          return {
            ...data,
            updateDate: this.dateformatService.convertDateFormat(data.updateDate), // ส่งไปแปลววันที่่ที่เซอร์วิส
          };
        });
        console.log(this.LogHeader)
      })
    }else{
      this.datafromapi = true
    }
  }

  onSubmit(){
    console.log("login button work !")
  }
}
