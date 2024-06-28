import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsPermissionService } from '../../services/CBEsPermission.service';
import CBEsPermission from '../../models/CBEsPermission';
import Response from '../../models/response';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'rolecreate-page',
  standalone: true,
  templateUrl: './rolecreate.component.html',
  styleUrls: ['./rolecreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,LoadingComponent],
  providers: [DatePipe],
})
export class RoleCreateComponent implements OnInit{
  AllPermission : CBEsPermission[] = []
  datafromapi= false;
  constructor(
    private permissionService : CBEsPermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.GetAll().subscribe(
      (result:Response) => {
        this.AllPermission = result.data.map((data:any)=>{
          this.datafromapi = true;
          return{
            ...data,
          }
        })
        console.log(" ✉ DATA FATCH API : ",result.data)
        console.log(" ✤ this.AllPermission : ",this.AllPermission)
      }
    );
  }

}
