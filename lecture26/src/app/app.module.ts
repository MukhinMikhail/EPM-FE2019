import { ShipsService } from './services/ships.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { PlayerfieldComponent } from './playerfield/playerfield.component';
import { FieldService } from './services/field.service';
import { ShipConfigurationComponent } from './ship-configuration/ship-configuration.component';
import { HintsComponent } from './hints/hints.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerfieldComponent,
    CellComponent,
    ShipConfigurationComponent,
    HintsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})

export class AppModule { }
