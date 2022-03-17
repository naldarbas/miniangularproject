import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from '../users/allusers/allusers.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    
    {path:'',component:HomeComponent},
    {path:'allusers',component:AllusersComponent}

    
];

@NgModule({

  imports: [RouterModule.forChild(routes),


  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
