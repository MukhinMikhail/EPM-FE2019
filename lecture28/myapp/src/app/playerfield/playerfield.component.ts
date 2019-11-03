import { ShipsService } from './../services/ships.service';
import { FieldService } from '../services/field.service';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-playerfield',
  templateUrl: './playerfield.component.html',
  styleUrls: ['./playerfield.component.scss']
})
export class PlayerfieldComponent implements OnInit {
  @Input() status: string;
  @Input() isPlayer: boolean;
  private name: string;
  public fieldArray;

  constructor(private fieldService: FieldService, private shipsService: ShipsService, private loginService: LoginService) {
    this.name = this.loginService.getName();
    this.fieldArray = this.fieldService.fillFields(11);
  }

  ngOnInit() {
    console.log(this.isPlayer, this.status);
  }
}
