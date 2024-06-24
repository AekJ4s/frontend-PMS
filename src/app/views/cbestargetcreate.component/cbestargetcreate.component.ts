import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbestargetcreate-page',
  standalone: true,
  templateUrl: './cbestargetcreate.component.html',
  styleUrls: ['./cbestargetcreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsTargetCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
