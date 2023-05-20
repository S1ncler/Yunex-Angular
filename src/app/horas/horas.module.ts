import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorasRoutingModule } from './horas-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormHorasSemanaComponent } from './components/form-horas-semana/form-horas-semana.component';
import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './components/aside/aside.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    CardsComponent,
    FormHorasSemanaComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HorasRoutingModule,
    SharedModule
  ]
})
export class HorasModule { }
