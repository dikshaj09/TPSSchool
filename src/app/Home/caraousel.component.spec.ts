import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraouselComponent } from './caraousel.component';

describe('CaraouselComponent', () => {
  let component: CaraouselComponent;
  let fixture: ComponentFixture<CaraouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
