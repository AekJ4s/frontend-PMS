import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsService } from '../../services/CBEs.service';
import CBEs from '../../models/CBEs';
@Component({
  selector: 'cbesmanageplanning-page',
  standalone: true,
  templateUrl: './cbesmanageplanning.component.html',
  styleUrls: ['./cbesmanageplanning.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})
export class CBEsManagePlanning implements OnInit{
  AllCBEs: CBEs[] = [];
  datafromapi = false;
  constructor(
    private cbesService : CBEsService
  ) {}

  onSubmit(){
    console.log("login button work !")
  }

  onPlanning(id:number){
    console.log("ไปดูแพลนนิ่งทั้งหมดในโครงการรหัส",id)
  }
  ngOnInit(): void {
    this.cbesService.GetAll
  }


}
