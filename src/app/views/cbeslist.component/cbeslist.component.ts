import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbeslist-page',
  standalone: true,
  templateUrl: './cbeslist.component.html',
  styleUrls: ['./cbeslist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
