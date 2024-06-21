import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesmaturitycreate-page',
  standalone: true,
  templateUrl: './cbesmaturitycreate.component.html',
  styleUrls: ['./cbesmaturitycreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsMaturityCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
