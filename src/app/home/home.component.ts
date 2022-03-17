import { Component, OnInit } from '@angular/core';
import { userService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  onFileSelected(event:any){
    console.log(event);
  }
  ngOnInit(): void {}

  constructor(private userService: userService, private router: Router) {}

  onCreateUser(userName: string, userStatus: string,userImage:string) {
    this.userService.onUserAdded(userName, userStatus,userImage);
    console.log('username you add is ' + userName);
    // this.router.navigate(["allusers"]);
    console.log(this.userService);
    alert('successfully added ')
  }


}
