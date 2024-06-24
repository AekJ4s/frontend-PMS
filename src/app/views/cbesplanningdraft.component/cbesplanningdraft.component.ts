import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningdraft-page',
  standalone: true,
  templateUrl: './cbesplanningdraft.component.html',
  styleUrls: ['./cbesplanningdraft.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningDraft{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
