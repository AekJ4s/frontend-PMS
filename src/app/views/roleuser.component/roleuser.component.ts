import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import Response from '../../models/response';
import CBEsUser from '../../models/CBEsUser';
import { CBEsUserService } from '../../services/CBEsUser.service';
import { CommonModule, DatePipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'roleuser-page',
  standalone: true,
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, LoadingComponent],
  providers: [DatePipe],
})
export class RoleUserComponent implements OnInit {
  id: number | null = 0;
  idUser: number | null = 1;
  Alluser: CBEsUser[] = [];
  AlluserWithThisRole: CBEsUser[] = [];
  filteredUsers: CBEsUser[] = [];
  datafromapi = false;
  selectedUserId: number | null = 1 ;



  constructor(
    private route: ActivatedRoute,
    private roleService: CBEsRoleService,
    private userService: CBEsUserService
  ) {}

  ngOnInit(): void {
    // รับค่าจาก parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : null; // Convert string to number
      console.log(`Received id: ${this.id}`);
    });

    this.userService.GetAll().subscribe((result: Response) => {
      this.Alluser = result.data.map((data: any) => ({
        ...data,
      }));
      this.datafromapi = true;
      this.filterUsers();
      console.log("this ALL users", this.Alluser);
    });

    if (this.id != null) {
      this.roleService.GetRoleWithUser(this.id).subscribe((result: Response) => {
        if(result.data.isDeleted != true){
          this.AlluserWithThisRole = result.data.users;
          this.filterUsers();
          console.log("data role with user : ", result.data.users);
        }
      });
    }
  }

  filterUsers(): void {
    this.filteredUsers = this.Alluser.filter(
      user => !this.AlluserWithThisRole.some(roleUser => roleUser.id === user.id)
    );
    console.log("filteredUsers" , this.filteredUsers)
  }

  setUserID(user : number | null){
    console.log("setUserID Receive : ",user)
    this.idUser = user !== null ? parseInt(user.toString()) : null;
  }

  removeUser(index: number): void {
    const removedUser = this.AlluserWithThisRole.splice(index, 1)[0];
    this.filteredUsers.push(removedUser);
    console.log("filteredUsers" , this.filteredUsers)
  }

  addUser(userId: number | null) {
    console.log("ALL USER WITH FUNCTION : ", this.Alluser);
    console.log("User receive : ", userId);

    if (userId !== null) {
      const UserById = this.Alluser.find(user => user.id === userId);
      console.log("UserById : ", UserById);

      if (UserById) {
        this.AlluserWithThisRole.push(UserById);
        this.filterUsers();
        if (this.filteredUsers.length > 0) {
          this.selectedUserId  = this.filteredUsers[0].id;
          this.idUser = this.filteredUsers[0].id; // เลือกผู้ใช้คนแรก
        } else {
          this.idUser = null; // ไม่มีผู้ใช้ที่จะเลือกในกรณีที่ filteredUsers ว่างเปล่า
        }
      } else {
        console.error("User not found with id:", userId);
      }
    } else {
      console.error("Invalid user id:", userId);
    }
  }

  saveRoleUsers(): void {
    if (this.id != null) {
      const  roleData = {
        id: this.id,
        users: this.AlluserWithThisRole.map(user => ({
          id: user.id,
          isDeleted: false
        }))
      };

      // this.roleService.EditRoleWithUser(roleData).subscribe(response => {
      //   console.log('Save successful', response);
      // }, error => {
      //   console.error('Save failed', error);
      // });
        console.log('Save successful', roleData);
    }
  }
}
