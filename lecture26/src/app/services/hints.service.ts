import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HintsService {

  constructor(private client: HttpClient) { }

  getHints() {
    return this.client.get('https://my-json-server.typicode.com/MukhinMikhail/EPM-FE2019/hints');
  }

  getRandom(data) {
    return Math.floor(Math.random() * data.length);
  }
}
