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
  id : number | null = 0;
  AllPermission: CBEsPermission[] = [];
  datafromapi = false;
  roleName: string = '';
  permission: { id: number; name: string; IsCheck: boolean }[] = [];
  roleData = {
    name: this.roleName,
    permissions: [] as { id: number }[],
    createBy: 1,
    updateBy: 1,
  };

  role = new CBEsRole()


  constructor(
    private roleService: CBEsRoleService,
    private permissionService: CBEsPermissionService,
    private router: Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
     // รับค่าจาก parameter
     this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : null; // Convert string to number
      this.datafromapi = true
    });
    if(this.id == null){

    }
    this.permissionService.GetAll().subscribe((result: Response) => {
      this.AllPermission = result.data.map((data: any) => {
        console.log("DATA : ",data)
        this.datafromapi = true;
        this.permission.push({ id: data.id, name: data.name, IsCheck: false });
        console.log("data.name : ",data.name)
        const a = data.CBEsPermission
        this.role.cbesRoleWithPermissions.push(a)
        return {
          ...data,
        };
      });
      console.log(' ✉ DATA FATCH API : ', result.data);
      console.log(' ✤ this.AllPermission : ', this.AllPermission);
    });

  }

  Status(i: number) {
    console.log(this.permission);
  }

  onSubmit() {
    console.log('Submit button work!');

    const selectedPermissions = this.permission
      .map((perm, index) =>
        perm.IsCheck ? { id: this.AllPermission[index].id } : null
      )
      .filter((perm) => perm !== null);


    this.permission.forEach((data) => {
      if (data.IsCheck == true) {
        this.roleData.permissions.push({ id: data.id });
      }
    });
    console.log('Data Send : ', this.roleData);

    this.roleService.CreateRoleWithPermission(this.roleData).subscribe(
      (result) => {
        alert(result.message);
        this.router.navigate(['role/list']);
      },
      (error: { error: Response }) => {
        alert(error.error.message);
      }
    );
  }
}
