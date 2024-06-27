import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import Response from '../../models/response';
import CBEsUser from '../../models/CBEsUser';
import { CBEsUserService } from '../../services/CBEsUser.service';
@Component({
  selector: 'roleuser-page',
  standalone: true,
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DatePipe],
})


export class RoleUserComponent implements OnInit{
  id: number | null = 0;
  Alluser: CBEsUser[] = []
  AlluserWithThisRole: CBEsUser[] = []
  constructor(
    private route: ActivatedRoute,
    private roleService: CBEsRoleService,
    private userService: CBEsUserService
  ) {}

  ngOnInit(): void {
    // ส่วนของการรับค่าจาก parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : null; // Convert string to number
      console.log(`Received id: ${this.id}`);
    });

    this.userService.GetAll().subscribe(
      (result: Response) => {
        this.Alluser = result.data.map((data:any) =>{
          return{
            ...data,
          }
        })
        console.log("this ALL users",this.Alluser)
      }
    )
    if(this.id != null){
      this.roleService.GetRoleWithUser(this.id).subscribe(
        (result: Response) => {
          this.AlluserWithThisRole = result.data.users
          console.log("data role with user : ",result.data.users);
        }
      )
    }
    }
  }

