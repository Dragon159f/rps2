import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SansukumiKenComponent } from './sansukumi-ken.component';

describe('SansukumiKenComponent', () => {
  let component: SansukumiKenComponent;
  let fixture: ComponentFixture<SansukumiKenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansukumiKenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansukumiKenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
