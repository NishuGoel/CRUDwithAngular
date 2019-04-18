import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user-data';
import { UserFetch } from '../user-fetch';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent implements OnInit {
  users: User[];
  user: UserFetch;
  displayData: boolean;


  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getUsers();
   // this.getUser();
    this.deleteUser();
  }
 idtodelete=0;
  deleteUser() {

    this.dataservice.deleteUser(this.idtodelete).subscribe(data => {
      this.getUsers();
    });
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  // fetchId=1;
  // getUser() {
  //   this.dataservice.getUser(this.fetchId).subscribe(data => {
  //     this.user = data;
  //    this.displayData=true;
  //   });
  // }
}
