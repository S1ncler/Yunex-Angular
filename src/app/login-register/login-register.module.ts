import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [LoginService]
})
export class LoginRegisterModule { }
