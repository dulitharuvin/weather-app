import { Component, Input, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/dtos/daily-weather.dto';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss'],
})
export class ForecastWeatherComponent implements OnInit {
  @Input() dailyWeatherList?: DailyWeather[] = [];

  ngOnInit(): void {}
}
