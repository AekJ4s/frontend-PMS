import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'roleusercreate-page',
  standalone: true,
  templateUrl: './roleusercreate.component.html',
  styleUrls: ['./roleusercreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class RoleCreateUserComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
