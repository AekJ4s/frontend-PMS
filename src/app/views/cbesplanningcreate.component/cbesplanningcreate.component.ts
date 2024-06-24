import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningcreate-page',
  standalone: true,
  templateUrl: './cbesplanningcreate.component.html',
  styleUrls: ['./cbesplanningcreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningCreate{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
