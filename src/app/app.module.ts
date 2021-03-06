import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EventBindingComPropertyBindingComponent } from './event-binding-com-property-binding/event-binding-com-property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    EventBindingComPropertyBindingComponent,
    TwoWayDataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
