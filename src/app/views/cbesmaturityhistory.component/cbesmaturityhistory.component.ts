import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesmaturityhistory-page',
  standalone: true,
  templateUrl: './cbesmaturityhistory.component.html',
  styleUrls: ['./cbesmaturityhistory.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsMaturityHistoryComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
