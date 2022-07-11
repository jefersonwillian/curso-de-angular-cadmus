import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from '../pages/sobre/sobre.component';

@NgModule({
  declarations: [HeaderComponent, SobreComponent],
  exports: [HeaderComponent, SobreComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
