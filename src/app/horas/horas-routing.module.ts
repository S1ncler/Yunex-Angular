import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { GenReportComponent } from './pages/gen-report/gen-report.component';

const routes: Routes = [
  {
    path: "",
    component:PrincipalComponent
  },
  {
    path: "gen",
    component:GenReportComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorasRoutingModule { }
