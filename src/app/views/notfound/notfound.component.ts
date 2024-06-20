import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'notfound-page',
  standalone: true,
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,CommonModule,RouterOutlet],
  providers: [DatePipe],
})
export class NotfoundComponent {

  constructor(private router: Router) {}

  backhome(){
    this.router.navigate(['home']);
  };
}

