import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningreport-page',
  standalone: true,
  templateUrl: './cbesplanningreport.component.html',
  styleUrls: ['./cbesplanningreport.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningReport{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
