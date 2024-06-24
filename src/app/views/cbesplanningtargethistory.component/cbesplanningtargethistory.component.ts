import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningtargethistory-page',
  standalone: true,
  templateUrl: './cbesplanningtargethistory.component.html',
  styleUrls: ['./cbesplanningtargethistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningTargetHistory{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
