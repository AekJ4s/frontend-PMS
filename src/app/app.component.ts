


import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './views/loading/loading.component';
import { HomeComponents } from './views/homecomponent/homecomponent.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/logincomponent/login.component';
import { RegisterComponent } from './views/registercomponent/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HomeComponents,
    LoadingComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterOutlet,
  ],
})
export class AppComponent implements OnInit{
  title = 'CBEs Management Angular';
  opennav = false
  timeupdate = Date();
  timenow = new Date();
  thailandTime: string = this.timenow.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });

  constructor(private router: Router) {}
  ngOnInit() {
    // Simulate a 2-second countdown before redirecting to home page
    this.router.navigate(['loading']);
    setTimeout(() => {
      this.opennav = true
      this.router.navigate(['home']);
      console.log("COUNT")
    }, 1000);
  }

}
