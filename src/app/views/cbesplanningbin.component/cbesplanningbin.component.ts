import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningbin-page',
  standalone: true,
  templateUrl: './cbesplanningbin.component.html',
  styleUrls: ['./cbesplanningbin.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningBinComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
