
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
