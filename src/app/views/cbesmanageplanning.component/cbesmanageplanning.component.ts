import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesmanageplanning-page',
  standalone: true,
  templateUrl: './cbesmanageplanning.component.html',
  styleUrls: ['./cbesmanageplanning.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsManagePlanning {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
