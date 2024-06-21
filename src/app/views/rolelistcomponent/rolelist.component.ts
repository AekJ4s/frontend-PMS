import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'rolelist-page',
  standalone: true,
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class RoleListComponent {
  updatedate: string = "09/12/2564 09:09";
  name: string = "ผู้ดูแลระบบ";

  constructor() {}

  onDelete(){
    console.log("onDelete button work ! ")
  }
  onEdit(){
    console.log("onEdit button work ! ")
  }
  onUser(){
    console.log("onUser button work ! ")
  }
  onCreate(){
    console.log("onCreate button work ! ")
  }
  onBinbox(){
    console.log("onBinbox button work ! ")
  }

}
