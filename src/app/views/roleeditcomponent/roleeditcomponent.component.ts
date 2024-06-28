import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoadingComponent } from '../loading/loading.component';
import CBEsRole from '../../models/CBEsRole';
@Component({
  selector: 'roleeditcomponent-page',
  standalone: true,
  templateUrl: './roleeditcomponent.component.html',
  styleUrls: ['./roleeditcomponent.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,LoadingComponent],
  providers: [DatePipe],
})
export class RoleEditComponent {
  thisRole : CBEsRole[] = []
  datafromapi = false;

  constructor() {}

  onSubmit(){
    console.log("login button work !")
  }
}
