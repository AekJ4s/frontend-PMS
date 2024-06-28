import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoadingComponent } from '../loading/loading.component';
import CBEsPlanning from '../../models/CBEsPlanning';
@Component({
  selector: 'cbesplanninglist-page',
  standalone: true,
  templateUrl: './cbesplanninglist.component.html',
  styleUrls: ['./cbesplanninglist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,LoadingComponent],
  providers: [DatePipe],
})
export class CBEsPlanningList {
  Allplanning: CBEsPlanning[] = [];
  datafromapi = false;
  filteredPlanning: CBEsPlanning[] = [];
  searchQuery: string = '';
  usesearch = false;

  constructor() {}

  onSearch(){
    console.log("login button work !")
  }

  onSubmit(){
    console.log("login button work !")
  }

  onEdit(id :number){

  }
  onDelete(id :number){

  }
}
