import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor() {}

  // Optional: สร้าง method เพื่อจัดการการปิด Sidenav เมื่อคลิกที่ลิงก์
  closeSidenav(sidenav: any) {
    sidenav.close();
  }

}
