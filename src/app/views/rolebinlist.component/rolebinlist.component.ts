import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'rolebinlist-page',
  standalone: true,
  templateUrl: './rolebinlist.component.html',
  styleUrls: ['./rolebinlist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class RoleBinListComponent {

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
