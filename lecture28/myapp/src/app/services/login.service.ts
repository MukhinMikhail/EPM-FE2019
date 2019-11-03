import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private name: string;
  constructor() { }

  setName(name: string) {
    console.log(name);
    return this.name = name;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }
}
