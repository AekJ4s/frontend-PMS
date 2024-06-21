import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbeshistory-page',
  standalone: true,
  templateUrl: './cbeshistory.component.html',
  styleUrls: ['./cbeshistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsHistoryComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
