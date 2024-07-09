import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import Response from '../../models/response';
import CBEsUser from '../../models/CBEsUser';
import { CBEsUserService } from '../../services/CBEsUser.service';
import { CommonModule, DatePipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import CBEsUserWithRole from '../../models/CBEsUserWithRole';
import CBEsRole from '../../models/CBEsRole';

@Component({
  selector: 'roleuser-page',
  standalone: true,
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, LoadingComponent],
  providers: [DatePipe],
})
export class RoleUserComponent implements OnInit {
  id: number | null | undefined = 0;
  datafromapi = false;
  selectedUserId: number | string | undefined = 'เลือกผู้ใช้ที่จะเพิ่ม';
  userData: CBEsUser[] = [];
  RoleData = new CBEsRole();
  userRole: CBEsUser[] = [];
  filteredData: CBEsUser[] = [];

  constructor(
    private route: ActivatedRoute,
    private roleService: CBEsRoleService,
    private userService: CBEsUserService
  ) {}

  ngOnInit(): void {
    // รับค่าจาก parameter
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : null; // แปลงข้อความเป็นตัวเลข
      console.log('☁ Data recived id  ▶ ', this.id);
    });
    if (this.id != null && this.id != undefined) {
      this.datafromapi = true;
      this.roleService.RoleGetByID(this.id).subscribe((result: Response) => {
        this.RoleData = result.data
        console.log('☁ Data Role ▶ ', result.data);
        this.userService.GetAll().subscribe((result: Response) => {
          console.log('☁ Data All User ▶ ', result.data);
          this.userData = result.data;

          // แยก userId จาก cbesUserWithRole
          const userIdsWithRole = this.RoleData.cbesUserWithRole.map((userWithRole: any) => userWithRole.userId);

           // กรอง userData
           this.filteredData = this.userData.filter((user: any) => !userIdsWithRole.includes(user.id));
           console.log('☁ Filtered Data ▶ ', this.filteredData);

           if(this.filteredData.length > 0){
            this.selectedUserId = this.filteredData[0].id
           }else{
            this.selectedUserId = " ไม่มียูเซอร์เหลืออยู่ "
           }
        });
      });
    }else{
      console.log(`╰┈➤${this.id} is null or undefined`)
      this.datafromapi = false
    }
  }

  removeUser(id: number | string | undefined) {
    if (id != undefined) {
        console.log('╰┈➤ removeUser id receive', id);

        // ค้นหาผู้ใช้ใน RoleData.cbesUserWithRole
        const userIndexInRoleData = this.RoleData.cbesUserWithRole.findIndex((userWithRole: any) => userWithRole.userId === id);
        console.log('╰┈➤ userIndexInRoleData', userIndexInRoleData);

        if (userIndexInRoleData !== -1) {
            // ถ้าเจอผู้ใช้ใน RoleData.cbesUserWithRole
            const userWithRole = this.RoleData.cbesUserWithRole[userIndexInRoleData];

            if (userWithRole.id === 0) {
                // ถ้า id เป็น 0, ลบออกจาก RoleData.cbesUserWithRole และเพิ่มกลับไปที่ filteredData
                this.RoleData.cbesUserWithRole.splice(userIndexInRoleData, 1);
                const userToMove = this.userData.find((user: any) => user.id === id);
                if (userToMove) {
                    this.filteredData.push(userToMove);
                    if(this.filteredData.length > 0){
                      this.selectedUserId = this.filteredData[0].id
                     }else{
                      this.selectedUserId = "ไม่มียูเซอร์เหลืออยู่"
                     }
                }
                console.log('☁ User id is 0, moved back to filteredData');
            } else {
                // ถ้า id ไม่เป็น 0, เปลี่ยนสถานะ isDeleted
                userWithRole.isDeleted = !userWithRole.isDeleted;
                console.log('☁ User id is not 0, toggled isDeleted');
            }
        } else {
            // กรณีที่ไม่เจอผู้ใช้ใน RoleData.cbesUserWithRole
            console.log('☁ User not found in RoleData');
        }

        console.log('☁ Updated RoleData ▶ ', this.RoleData);
        console.log('☁ Updated filteredData ▶ ', this.filteredData);
    }
}


  addUser(id: number | string | undefined) {
    if (id != undefined && id != null && this.id != null) {
      console.log('╰┈➤ addUser id receive', id);
      id = parseInt(id.toString());
      const newUser = this.userData.find((user) => user.id == id);
      if (newUser != null && newUser != undefined) {
        const newUserWithRole = new CBEsUserWithRole();
        newUserWithRole.roleId = this.id;
        newUserWithRole.userId = parseInt(id.toString());
        newUserWithRole.user = newUser;
        console.log('╰┈➤ push this', newUserWithRole);
        this.RoleData.cbesUserWithRole.push(newUserWithRole);
        console.log('╰┈➤ after push ', this.RoleData);
           // ลบผู้ใช้จาก filteredData
           const filteredIndex = this.filteredData.findIndex((user) => user.id == id);
           if (filteredIndex !== -1) {
               this.filteredData.splice(filteredIndex, 1);
               if(this.filteredData.length > 0){
                this.selectedUserId = this.filteredData[0].id
               }else{
                this.selectedUserId = "ไม่มียูเซอร์เหลืออยู่"
               }
           }
        console.log('☁ Updated filteredData ▶ ', this.filteredData);

      } else {
        alert('Not Found User');
      }
    }
  }
  onSubmit() {
    console.log('form to send data : ', this.RoleData);
    this.roleService
      .EditRoleGroup(this.RoleData)
      .subscribe((result: Response) => {
        try {
          console.log(result.message);
          window.location.reload();
        } catch {
          console.log(result.message);
        }
      });
  }
}
