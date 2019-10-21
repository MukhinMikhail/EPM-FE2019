import { TestBed } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playerfield',
  templateUrl: './playerfield.component.html',
  styleUrls: ['./playerfield.component.scss']
})
export class PlayerfieldComponent implements OnInit {
  @Input() name: string;
  private axisX: Array<number>;
  private axisY: Array<number>;


  constructor() {
    this.name = name;
    this.axisX = this.fillArray(10);
    this.axisY = this.fillArray(10);
  }

  fillArray(arrayLength) {
    return Array.from({length: arrayLength}, (v, k) => k + 1);
  }

  ngOnInit() {
  }

  test(i,j){
    console.log(i,j);
  }

}
