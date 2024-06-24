import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbestargetresulthistorylist-page',
  standalone: true,
  templateUrl: './cbestargetresulthistorylist.component.html',
  styleUrls: ['./cbestargetresulthistorylist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsTargetResultHistoryListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
