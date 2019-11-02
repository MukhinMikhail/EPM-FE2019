import { ShipsService } from './../services/ships.service';
import { FieldService } from '../services/field.service';
import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-playerfield',
  templateUrl: './playerfield.component.html',
  styleUrls: ['./playerfield.component.scss']
})
export class PlayerfieldComponent implements OnInit {
  @Input() name: string;
  public fieldArray;

  constructor(private fieldService: FieldService, private shipsService: ShipsService) {
    this.name = name;
    this.fieldArray = this.fieldService.fillFields(11);
  }

  ngOnInit() {
  }

  test(i, j) {
    console.log(i, j);
  }
}
