import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanninglist-page',
  standalone: true,
  templateUrl: './cbesplanninglist.component.html',
  styleUrls: ['./cbesplanninglist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningList {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
