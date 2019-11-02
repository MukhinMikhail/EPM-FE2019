import { FieldService } from './../field.service';
import { Cell } from '../interfaces/cell.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playerfield',
  templateUrl: './playerfield.component.html',
  styleUrls: ['./playerfield.component.scss']
})
export class PlayerfieldComponent implements OnInit {
  @Input() name: string;
  public fieldArray;

  constructor(private fieldService: FieldService) {
    this.name = name;
    this.fieldArray = this.fieldService.fillFields(11);
  }

  ngOnInit() {
  }

  test(something) {
    console.log(something);
  }
}
