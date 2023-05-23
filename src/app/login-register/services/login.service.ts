import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  async validateToken() {
    let isToken: boolean = false;
    const url = 'http://localhost:3004/auth/verify';
    const data = { token: sessionStorage.getItem('token') };
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) isToken = true;
        else isToken = false;
      })
      .catch((e) => console.log(e));
    return isToken;
  }
  async login(email: string, password: string) {
    let loginOK: boolean = false;
    let correctEmailForm = true;
    let emailEmpty = true;
    let passwordEmpty = true;
    if (email === '') emailEmpty = false;
    else if (password === '') passwordEmpty = false;
    else if (!email.includes('@') && !email.includes('.'))
      correctEmailForm = false;
    else {
      const url = 'http://localhost:3004/auth/login';
      const data = {
        email: email,
        password: password,
      };
      await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === 'INCORRECT_USER_DATA') loginOK = false;
          else {
            sessionStorage.setItem('token', data.msg.token);
            sessionStorage.setItem('emailUser', data.msg.usuario.email);
            loginOK = true;
          }
        })
        .catch((e) => console.log(e));
    }
    return [correctEmailForm, emailEmpty, passwordEmpty, loginOK];
  }
}
