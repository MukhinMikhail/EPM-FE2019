import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerfieldComponent } from './playerfield.component';

describe('PlayerfieldComponent', () => {
  let component: PlayerfieldComponent;
  let fixture: ComponentFixture<PlayerfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
