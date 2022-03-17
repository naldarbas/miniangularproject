import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //another way to use routes
  //loadChildren: returns a set of routes to load
  {path:'', loadChildren : () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path:'allusers', loadChildren : () => import('./users/users-routing.module').then(m => m.UsersRouteringModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
