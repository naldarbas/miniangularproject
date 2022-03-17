import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../users.service';
@Component({

  selector: 'app-allusers',
  templateUrl: './allusers.component.html',

})
export class AllusersComponent implements OnInit {
 newUser:{name:string,status:string}[]=[];

  constructor( 
    private router:Router,
    private userService:userService) { }

  ngOnInit(): void {
    console.log(this.userService.users);
    this.newUser=this.userService.users;
    console.log(this.newUser);
  }
  
}
