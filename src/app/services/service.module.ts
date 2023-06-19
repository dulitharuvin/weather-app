import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [WeatherService, LocationService],
})
export class ServiceModule {
  constructor() {}
}
