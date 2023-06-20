import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWeatherComponent } from './detail-weather.component';

describe('CurrentWeatherComponent', () => {
  let component: DetailWeatherComponent;
  let fixture: ComponentFixture<DetailWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailWeatherComponent],
    });
    fixture = TestBed.createComponent(DetailWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
