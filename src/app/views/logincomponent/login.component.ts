import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthorizationService } from '../../services/Authorization';
import CBEsUser from '../../models/CBEsUser';
import { CBEsListComponent } from '../cbeslist.component/cbeslist.component';
@Component({
  selector: 'login-page',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, CBEsListComponent],
  providers: [DatePipe],
})
export class LoginComponent {
  loginby = new CBEsUser();
  isLoggedIn = false;
  onsub: boolean = false;
  seterr: boolean = false;

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  onsubCheck(){
    this.onsub = !this.onsub
  }

  onSubmit() {
    this.authService.Login(this.loginby).subscribe(
      (result) => {
        console.log("Login Result :",result)
        localStorage.setItem('Token', result.data.token);
        this.authService.Login(this.loginby);
        this.router.navigate(['CBEs/list']);
      },
      (error) => {
        console.log(error)
        alert(`${error.error.status} : ` + error.error.message)
        this.seterr=true;
      }
    );
  }
}
