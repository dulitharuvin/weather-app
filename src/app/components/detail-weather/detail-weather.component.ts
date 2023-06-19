import { Component, Input, OnInit } from '@angular/core';
import {  } from '@fortawesome/fontawesome-svg-core/index';

import { Weather } from 'src/app/dtos/weather.dto';

@Component({
  selector: 'app-detail-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.scss'],
})
export class DetailWeatherComponent implements OnInit {
  @Input() currentWeather?: Weather;

  faCoffee = faCoffee;

  ngOnInit(): void {}
}
