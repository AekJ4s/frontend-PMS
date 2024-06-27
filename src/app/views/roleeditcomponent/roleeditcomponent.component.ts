import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'roleeditcomponent-page',
  standalone: true,
  templateUrl: './roleeditcomponent.component.html',
  styleUrls: ['./roleeditcomponent.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class RoleEditComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
