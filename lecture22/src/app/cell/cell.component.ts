import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() axisX: Array<number>;
  @Input() axisY: Array<number>;
  constructor() { }

  ngOnInit() {
  }

  thsClk() {
    console.log(123);
  }

}
