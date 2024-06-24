import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningcreatetarget-page',
  standalone: true,
  templateUrl: './cbesplanningcreatetarget.component.html',
  styleUrls: ['./cbesplanningcreatetarget.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningTargetCreate{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
