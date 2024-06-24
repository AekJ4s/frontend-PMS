import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanninghistorylist-page',
  standalone: true,
  templateUrl: './cbesplanninghistorylist.component.html',
  styleUrls: ['./cbesplanninghistorylist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningHistoryListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
