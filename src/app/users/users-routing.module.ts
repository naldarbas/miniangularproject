import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';


//parent => child
const routes: Routes = [
 

    { path: 'allusres', component: AllusersComponent },
    // path     /allusres/i
    { path: ':i', component: ProfileComponent },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class UsersRouteringModule {}
