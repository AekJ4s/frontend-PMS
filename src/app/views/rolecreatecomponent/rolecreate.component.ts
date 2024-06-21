import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'rolecreate-page',
  standalone: true,
  templateUrl: './rolecreate.component.html',
  styleUrls: ['./rolecreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class RoleCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
