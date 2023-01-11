import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users?: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
          return data;
        },
        error => {
          console.log(error);
        });
  }

}
