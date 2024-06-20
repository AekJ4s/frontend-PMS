import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'footer-page',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() {}

  // Optional: สร้าง method เพื่อจัดการการปิด Sidenav เมื่อคลิกที่ลิงก์
  closeSidenav(sidenav: any) {
    sidenav.close();
  }

}
