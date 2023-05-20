import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  constructor(private router: Router) {}

  async ngOnInit() {
    if (!sessionStorage.getItem("token")) return
    else{
      const url = 'http://localhost:3004/auth/verify';
      const data = {token: sessionStorage.getItem("token")};
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          if (!data.error) this.router.navigate(["horas"])
        })
        .catch(e => console.log(e))
    }
  }

  email = '';
  password = '';
  correctEmailForm = true;
  emailEmpty = true;
  passwordEmpty = true;
  loginOk = true;

  async login() {
    this.correctEmailForm = true;
    this.emailEmpty = true;
    this.passwordEmpty = true;
    this.loginOk = true;
    if (this.email === '') this.emailEmpty = false;
    else if (this.password === '') this.passwordEmpty = false;
    else if (!this.email.includes('@') && !this.email.includes('.'))
      this.correctEmailForm = false;
    else {
      const url = 'http://localhost:3004/auth/login';
      const data = {
        email: this.email,
        password: this.password
      };
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          if (data.msg === "INCORRECT_USER_DATA") this.loginOk = false;
          else{
            sessionStorage.setItem("token", data.msg.token) 
            sessionStorage.setItem("emailUser", data.msg.usuario.email)
            this.router.navigate(['/horas']);
          }
        })
        .catch(e => console.log(e));
    }
  }
}
