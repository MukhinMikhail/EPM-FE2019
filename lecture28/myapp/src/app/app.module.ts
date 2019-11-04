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
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BattleShipsComponent } from './battle-ships/battle-ships.component';

const appRoutes: Routes = [
  { path: 'game', component: BattleShipsComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerfieldComponent,
    CellComponent,
    ShipConfigurationComponent,
    HintsComponent,
    LoginComponent,
    BattleShipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})

export class AppModule { }
