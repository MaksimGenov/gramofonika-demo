import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { SharedModule } from '../shared/shared.module';
import { ReleasesComponent } from './components/releases/releases.component';
import { AlbumVerticalCardComponent } from './components/album-vertical-card/album-vertical-card.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule
  ],
  declarations: [AlbumDetailsComponent, ReleasesComponent, AlbumVerticalCardComponent, TracklistComponent]
})
export class AlbumsModule { }
