import { NgModule } from '@angular/core';
import { AllusersComponent } from './allusers/allusers.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';
import { UsersRouteringModule } from './users-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AllusersComponent, ProfileComponent,UsersComponent],
  imports: [UsersRouteringModule,CommonModule],
  providers:[]
})
export class UsersModule {}
