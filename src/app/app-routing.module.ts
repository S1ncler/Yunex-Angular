import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule)
  },
  {
    path: "horas",
    loadChildren: () => import('./horas/horas.module').then(m => m.HorasModule)
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
