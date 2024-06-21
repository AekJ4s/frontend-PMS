import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbeshistorylist-page',
  standalone: true,
  templateUrl: './cbeshistorylist.component.html',
  styleUrls: ['./cbeshistorylist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsHistoryListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
