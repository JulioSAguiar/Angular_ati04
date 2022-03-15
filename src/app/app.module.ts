import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompComponent } from './comp/comp.component';
import { MaterialModule } from './material.module';
import { InpComponent } from './inp/inp.component';
import { BtnComponent } from './btn/btn.component';
import { Btn_delComponent } from './btn_del/btn_del.component';
import { StyledInputDirective } from './styled-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    InpComponent,
    BtnComponent,
    Btn_delComponent,
    StyledInputDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }