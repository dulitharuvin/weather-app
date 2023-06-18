import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [WeatherService, LocationService],
})
export class ServiceModule {
  constructor() {}
}
