import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbestargetresultlist-page',
  standalone: true,
  templateUrl: './cbestargetresultlist.component.html',
  styleUrls: ['./cbestargetresultlist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsTargetResultListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
