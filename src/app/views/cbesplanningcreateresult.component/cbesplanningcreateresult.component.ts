import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningcreateresult-page',
  standalone: true,
  templateUrl: './cbesplanningcreateresult.component.html',
  styleUrls: ['./cbesplanningcreateresult.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningResultCreate{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
