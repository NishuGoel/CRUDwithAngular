import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-data';
import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {
  userFormGroup: FormGroup;
  users: User[];
  user: UserFetch;

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        name : new FormControl(''),
        model : new FormControl('')
      },
    );
    this.getUsers();
}


addUser() {
  this.dataservice.addUser(this.userFormGroup.value).subscribe(data => {
    this.user = data;
    console.log(this.user);
  });
  this.getUsers();
}
}
