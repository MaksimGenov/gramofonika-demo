import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponent } from './components/cube/cube.component';

const routes: Routes = [
  {path: "", pathMatch: "full", loadChildren: "src/app/modules/home/home.module#HomeModule"},
  {path: "albums", loadChildren: "src/app/modules/albums/albums.module#AlbumsModule"},
  {path: "dashboard", loadChildren: "src/app/modules/dashboard/dashboard.module#DashboardModule"},
  {path: "cube", component: CubeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
