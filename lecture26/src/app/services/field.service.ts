
import { Injectable } from '@angular/core';
import { Cell } from '../interfaces/cell.interface';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  public alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');

  constructor() { }

  fillFields(sizeField) {
    const arr = Array<Array<Cell>>(sizeField).fill(null).map((itemFirst, i) => Array(sizeField).fill(0).map((itemSecond, j) => {
      const obj: Cell = {
        status: 'sea',
        x: i,
        y: j,
      };
      if (i === 0) {
        if (j === 0) {
          obj.status = 'interface';
        } else if (j > 0) {
          obj.name = this.alphabet[j - 1];
          obj.status = 'interface';
        }
      }
      if (obj.y === 0) {
        obj.status = 'interface';
        obj.name = obj.x.toString();
      }
      return obj;
    }));
    return arr;
  }
}
