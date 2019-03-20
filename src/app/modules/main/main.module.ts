import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [RootComponent, HeaderComponent, FooterComponent],
  bootstrap: [RootComponent]

})
export class MainModule { }
