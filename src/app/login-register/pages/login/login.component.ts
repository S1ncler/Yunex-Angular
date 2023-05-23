import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginSevice: LoginService) {}

  async ngOnInit() {
    if (!sessionStorage.getItem('token')) return;
    else {
      await this.loginSevice.validateToken().then((data) => {
        if (data) this.router.navigate(['horas']);
      });
    }
  }

  email = '';
  password = '';
  correctEmailForm = true;
  emailEmpty = true;
  passwordEmpty = true;
  loginOk = true;

  async login() {
    await this.loginSevice.login(this.email, this.password).then((data) => {
      this.correctEmailForm = data[0];
      this.emailEmpty = data[1];
      this.passwordEmpty = data[2];
      this.loginOk = data[3];
      if (this.loginOk) this.router.navigate(['/horas']);
    });
  }
}
