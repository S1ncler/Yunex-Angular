import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorasRoutingModule } from './horas-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormHorasSemanaComponent } from './components/form-horas-semana/form-horas-semana.component';
import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './components/aside/aside.component';
import { GenReportComponent } from './pages/gen-report/gen-report.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PrincipalComponent,
    CardsComponent,
    FormHorasSemanaComponent,
    AsideComponent,
    GenReportComponent,
    CardNewReportComponent,
  ],
  imports: [
    CommonModule,
    HorasRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class HorasModule {}
