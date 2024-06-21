import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbessupervisorcreate-page',
  standalone: true,
  templateUrl: './cbessupervisorcreate.component.html',
  styleUrls: ['./cbessupervisorcreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsSupervisorCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
