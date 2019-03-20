import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ImgWithLoaderComponent } from './components/img-with-loader/img-with-loader.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DropdownComponent,
    LinkComponent,
    NavVerticalComponent, 
    LoaderComponent, 
    ImgWithLoaderComponent, 
    NavTabsComponent,
    MultiselectComponent,
    AlbumCardComponent
  ],
  exports: [
    DropdownComponent, 
    LinkComponent, 
    LoaderComponent, 
    ImgWithLoaderComponent,
    NavTabsComponent,
    MultiselectComponent,
    AlbumCardComponent
  ]
})
export class SharedModule { }
