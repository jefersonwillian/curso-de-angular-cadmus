import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from '../sobre/sobre.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
