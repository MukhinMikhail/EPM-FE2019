import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipConfigurationComponent } from './ship-configuration.component';

describe('ShipConfigurationComponent', () => {
  let component: ShipConfigurationComponent;
  let fixture: ComponentFixture<ShipConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
