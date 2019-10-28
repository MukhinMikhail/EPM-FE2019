import { Injectable } from '@angular/core';
import { Ship } from './interfaces/ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private Ships: Array<Ship> = [];
  constructor() {
    this.Ships = [
      {
        name: 'Линкор',
        size: 4,
        shipValue: 1,
      },
      {
        name: 'Крейсер',
        size: 3,
        shipValue: 2,
      },
      {
        name: 'Эсминец',
        size: 2,
        shipValue: 3,
      },
      {
        name: 'Катер',
        size: 1,
        shipValue: 4,
      },
    ];
  }

  getShips() {
    return this.Ships;
  }
}
