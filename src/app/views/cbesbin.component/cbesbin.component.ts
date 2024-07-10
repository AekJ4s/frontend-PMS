import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import CBEs from '../../models/CBEs';
import { CBEsService } from '../../services/CBEs.service';
import Response from '../../models/response';
@Component({
  selector: 'cbesbin-page',
  standalone: true,
  templateUrl: './cbesbin.component.html',
  styleUrls: ['./cbesbin.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsBinListComponent implements OnInit {
  searchQuery: string = '';
  usesearch = false;
  filteredCBEs: CBEs[] = [];
  AllCBEs: CBEs[] = [];


  constructor(
    private cbesService : CBEsService,

  ) {}

  ngOnInit(): void {
    console.log("CBEs Bin Component")
    this.cbesService.GetCBEsInBin().subscribe((result : Response) => {
      console.log(result.data)
      this.AllCBEs = result.data
    })
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

  onSubmit(){
    console.log("login button work !")
  }
}
