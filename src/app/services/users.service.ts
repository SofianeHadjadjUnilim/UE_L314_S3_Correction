import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Users[]>(baseUrl + 'users');
  }

  getOne(id: number) {
    return this.http.get<Users[]>(baseUrl + 'user/'+ id);
  }

  create(data: any) {
    return this.http.post(baseUrl + 'createuser', data);
  }

  delete(data: any) {
    return this.http.delete(baseUrl + 'deleteuser', data);
  }

  update(data: any, options:any) {
    return this.http.put<Users>(baseUrl + 'updateuser', data, options)
  }
}
