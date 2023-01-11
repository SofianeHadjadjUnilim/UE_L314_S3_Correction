import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-remove',
  templateUrl: './users-remove.component.html',
  styleUrls: ['./users-remove.component.scss']
})

export class UsersRemoveComponent implements OnInit {

  users?: Users[];
 
  constructor( private usersService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id:any): void {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id
      },
    };

  	var confirmation = window.confirm("Êtes-sûr de vouloir supprimer cet utilisateur ?");
  	if (confirmation) {

      this.usersService.delete(options)
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
      alert("L'utilisateur a bien été supprimé");
      window.location.reload();
    }
  }

}
