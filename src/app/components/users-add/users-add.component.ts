import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  resUserId?:number;
  resUser?: Users;
  users: Users = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor( private usersService: UsersService, private router:Router ) {}

  ngOnInit(): void {
  }

  redirectTo(id:number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/user', id]));
  }

  addUser(): void {
    const body = {
      firstname: this.users.firstname,
      lastname: this.users.lastname,
      email: this.users.email,
      password: this.users.password
    };

    this.usersService.create(body)
      .subscribe(
        data => {
          this.resUser = data;
          console.log(data);
          this.redirectTo(Number(this.resUser.id));
        },
        error => {
          console.log(error);
        });
  }

}
