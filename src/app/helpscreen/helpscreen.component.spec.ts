import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpscreenComponent } from './helpscreen.component';

describe('HelpscreenComponent', () => {
  let component: HelpscreenComponent;
  let fixture: ComponentFixture<HelpscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
