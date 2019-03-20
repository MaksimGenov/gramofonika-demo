import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", loadChildren: "src/app/modules/home/home.module#HomeModule"},
  {path: "albums", loadChildren: "src/app/modules/albums/albums.module#AlbumsModule"},
  {path: "dashboard", loadChildren: "src/app/modules/dashboard/dashboard.module#DashboardModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
