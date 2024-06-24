import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesresultcreate-page',
  standalone: true,
  templateUrl: './cbesresultcreate.component.html',
  styleUrls: ['./cbesresultcreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsResultCreateComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
