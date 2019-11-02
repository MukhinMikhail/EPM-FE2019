import { Injectable } from '@angular/core';
import { IBeginShipValues, ICoords } from '../interfaces/ship.interface';
import { IShipCharacteristics } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private Ships: Array<IBeginShipValues> = [];
  public direction = 'horizontal';
  private coords: ICoords = {};
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


  toggleDirection(element) {
    if (element[0].direction === 'horizontal') {
      return element[0].direction = 'vertical';
    } else {
      return element[0].direction = 'horizontal';
    }
  }

  createShip(typeSize: number, name: string, coordX: number, coordY: number) {
    return Array(typeSize).fill(name).map((item, index) => {
      const obj: IShipCharacteristics = {
        name,
        x: coordX,
        y: coordY,
        direction: this.direction,
        hits: 0,
        state: 'alive',
      };
      return obj;
    });
  }

  getCoords() {
    return this.coords;
  }

  setCoords(x: number, y: number) {
    console.log(x, y);
    return this.coords.x = x, this.coords.y = y;
  }

  addShipIntoFleet() {
    let fleet: Array<Array<IShipCharacteristics>> = [];
    fleet = this.Ships.map((item, i) => {
      return this.createShip(item.shipValue, item.name, this.coords.x, this.coords.y);
    });
    return fleet;
  }
}
