import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from '../../users.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  
  users: { name: string; status: string ;image:string};

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: userService
  ) {}

  ngOnInit(): void {
    //take  i as params to give us his info 
    const index = this.activeRoute.snapshot.params['i'];

    const value = this.userService.users[index];
    console.log(index);
    console.log(value);
    console.log(this.users);
    //refrish
    if (value) this.users = value;
  }
}
