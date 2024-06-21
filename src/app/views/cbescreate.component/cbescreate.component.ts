import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbescreate-page',
  standalone: true,
  templateUrl: './cbescreate.component.html',
  styleUrls: ['./cbescreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
