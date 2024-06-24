import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbestargethistory-page',
  standalone: true,
  templateUrl: './cbestargethistory.component.html',
  styleUrls: ['./cbestargethistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsTargetHistoryByID {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
