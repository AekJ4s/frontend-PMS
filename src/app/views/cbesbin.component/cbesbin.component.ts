import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesbin-page',
  standalone: true,
  templateUrl: './cbesbin.component.html',
  styleUrls: ['./cbesbin.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsBinListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
