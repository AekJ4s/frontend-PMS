import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbessupervisorhistory-page',
  standalone: true,
  templateUrl: './cbessupervisorhistory.component.html',
  styleUrls: ['./cbessupervisorhistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsSupervisorHistoryComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
