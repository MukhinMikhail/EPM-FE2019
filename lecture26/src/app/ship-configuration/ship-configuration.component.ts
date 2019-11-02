import { IBeginShipValues, IShipCharacteristics } from './../interfaces/ship.interface';
import { ShipsService } from '../services/ships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-configuration',
  templateUrl: './ship-configuration.component.html',
  styleUrls: ['./ship-configuration.component.scss']
})
export class ShipConfigurationComponent implements OnInit {
  private ships: Array<IBeginShipValues>;
  private ship: any;
  private isClicked = false;
  hightlightStatus: Array<boolean> = [];

  constructor(private shipService: ShipsService) {
    this.ships = this.shipService.getShips();
  }

  ngOnInit() {
    const ships = this.ships;
    this.ship = this.shipService.addShipIntoFleet();
  }

  changePosition() {
    this.ship.pop();
    //this.shipService.toggleDirection(this.ship);
    console.log(this.ship);
  }
}
