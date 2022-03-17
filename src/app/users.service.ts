import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class userService {
users = [
    {
      name: 'Njoud',
      status: 'active',
      image:'https://images.unsplash.com/photo-1647059304131-4eb55e198a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Fahad',
      status: 'inactive',
      image:'https://media.istockphoto.com/photos/empty-quarter-desert-dunes-rub-al-khali-landscape-picture-id1221129797?b=1&k=20&m=1221129797&s=170667a&w=0&h=Ax8cvgGe9ynXDCtOywQuaR-Lg-4CEPSB_L_looJGt8E='
    }

  ];

  onUserAdded(name: string, status: string,image:string) {
    this.users.push({name:name,status:status,image:image});
   
  }

  updateStatus(id:number,status:string){
    this.users[id].status = status;
  
  }

}