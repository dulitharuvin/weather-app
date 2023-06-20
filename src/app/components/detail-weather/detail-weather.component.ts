import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/dtos/city.dto';
import { Weather } from 'src/app/dtos/weather.dto';

@Component({
  selector: 'app-detail-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.scss'],
})
export class DetailWeatherComponent implements OnInit {
  @Input() currentWeather?: Weather;

  @Input() currentCity?: City;

  ngOnInit(): void {}
}
