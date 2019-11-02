import { Ship } from './../interfaces/ship.interface';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-configuration',
  templateUrl: './ship-configuration.component.html',
  styleUrls: ['./ship-configuration.component.scss']
})
export class ShipConfigurationComponent implements OnInit {
  private ships: Array<Ship>;
  private isClicked = false;
  hightlightStatus: Array<boolean> = [];

  constructor(private shipService: ShipsService) {
    this.ships = this.shipService.getShips();
  }

  ngOnInit() {
    const ships = this.ships;
  }
}
