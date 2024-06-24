import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningresulthistory-page',
  standalone: true,
  templateUrl: './cbesplanningresulthistory.component.html',
  styleUrls: ['./cbesplanningresulthistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningResultHistory{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
