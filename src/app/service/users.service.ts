import { Injectable } from '@angular/core';

export interface usersResponse {
  email: string;
  password: string;
  role: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
