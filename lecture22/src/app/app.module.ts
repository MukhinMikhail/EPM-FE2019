import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { PlayerfieldComponent } from './playerfield/playerfield.component';
import { FieldService } from './field.service';
import { ShipConfigurationComponent } from './ship-configuration/ship-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerfieldComponent,
    CellComponent,
    ShipConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})

export class AppModule { }
