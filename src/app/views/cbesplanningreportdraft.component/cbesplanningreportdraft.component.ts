import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'cbesplanningreportdraft-page',
  standalone: true,
  templateUrl: './cbesplanningreportdraft.component.html',
  styleUrls: ['./cbesplanningreportdraft.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsPlanningReportDraft{

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
