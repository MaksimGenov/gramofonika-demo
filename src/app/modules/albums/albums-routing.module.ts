import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';

const routes: Routes = [
  {path: ":albumId", component: AlbumDetailsComponent,
    children: [
    {path: "", pathMatch: "full", redirectTo: "releases"},
     {path: "releases", component: ReleasesComponent},
     {path: "records-for-sale", component: LoaderComponent},
     {path: "tracklist", component: TracklistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
