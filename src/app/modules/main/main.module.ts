import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { CubeComponent } from './components/cube/cube.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [RootComponent, HeaderComponent, FooterComponent, CubeComponent],
  bootstrap: [RootComponent]

})
export class MainModule { }
