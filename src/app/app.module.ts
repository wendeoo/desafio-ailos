import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CpfComponent } from './components/cpf/cpf.component';
import { CpfMaskPipe } from './cpf-mask.pipe';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CpfComponent,    
    CpfMaskPipe, CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
