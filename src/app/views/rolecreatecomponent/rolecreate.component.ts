import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CBEsPermissionService } from '../../services/CBEsPermission.service';
import CBEsPermission from '../../models/CBEsPermission';
import Response from '../../models/response';
import { LoadingComponent } from '../loading/loading.component';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import CBEsRole from '../../models/CBEsRole';
import CBEsRoleWithPermission from '../../models/CBEsRoleWithPermission';
@Component({
  selector: 'rolecreate-page',
  standalone: true,
  templateUrl: './rolecreate.component.html',
  styleUrls: ['./rolecreate.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, LoadingComponent],
  providers: [DatePipe],
})
export class RoleCreateComponent implements OnInit {
  id: number = 0;
  DataofRole = new CBEsRole();
  datafromapi = false;
  allpermission: CBEsPermission[] = [];
  newRWP : CBEsRoleWithPermission[] = []
  constructor(
    private roleService: CBEsRoleService,
    private permissionService: CBEsPermissionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // รับค่าจาก parameter
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0; // Convert string to number
      console.log('id receive : ', this.id);
    });
    if (this.id != 0) {
      this.roleService.RoleGetByID(this.id).subscribe((result: Response) => {
        console.log('DataofRole : ', result.data);
        this.DataofRole = result.data;
        console.log("DataofRole.cbesRoleWithPermissions : ",this.DataofRole.cbesRoleWithPermissions);
      });
      this.datafromapi = true;
    } else {
      this.datafromapi = true;
      this.permissionService.GetAll().subscribe((result: Response) => {
        this.allpermission = result.data;
        console.log("allpermission :",this.allpermission)
        this.allpermission.forEach(element => {
        console.log(element.id)
        this.DataofRole.cbesRoleWithPermissions.push(new CBEsRoleWithPermission)
        this.DataofRole.cbesRoleWithPermissions[element.id-1].permission = {
          ...element,
        }
        this.DataofRole.cbesRoleWithPermissions[element.id-1]={
          ...this.DataofRole.cbesRoleWithPermissions[element.id-1],
          roleId:0,
          permissionId:element.id
        }
        });
        console.log(this.DataofRole);
      });
    }
  }
  onSubmit() {
    console.log(this.DataofRole)

    if(this.id != 0){
      console.log("senddata : " ,this.DataofRole)
      this.roleService.EditRole(this.DataofRole).subscribe((result:Response)=>{
        try{
          alert(result.message)
          this.router.navigate(['/role/list']);
        }catch{
          alert(result.message)
          this.router.navigate(['/role/list']);
        }
      })
    }else{
      this.roleService.CreateRole(this.DataofRole).subscribe((result:Response)=>{
      console.log("senddata : " ,this.DataofRole)
        try{
          alert(result.message)
          this.router.navigate(['/role/list']);
        }catch{
          alert(result.message)
          this.router.navigate(['/role/list']);
        }
      })
    }
  }
}
