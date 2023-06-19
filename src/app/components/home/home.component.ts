import { Component, OnInit } from '@angular/core';
import { WeatherApi } from 'src/app/Shared/WeatherDataExclued.enum';
import { City } from 'src/app/dtos/city.dto';
import { Weather } from 'src/app/dtos/weather.dto';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cityLocationList: City[];
  weather?: Weather;

  searchingLocations: boolean = false;
  searchingWeather: boolean = false;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {
    this.cityLocationList = [];
  }

  ngOnInit(): void {}

  public searchCityLocations(event: string): void {
    console.log(' Search city input outpu query : ' + event);
    this.searchingLocations = true;
    this.getCityLocationList(event);
  }

  public getWeatherDetails(event: City): void {
    this.searchingWeather = true;
    this.getCityLocationWeather(event);
  }

  private getCityLocationList(searchQuery: string): void {
    this.locationService
      .getCityLocationList(searchQuery, WeatherApi.LocationLimit)
      .subscribe({
        next: (data) => {
          this.cityLocationList = [];
          this.cityLocationList = [...data];
          this.searchingLocations = false;
        },
        error: (error) => {
          this.cityLocationList = [];
          this.searchingLocations = false;
          console.log(error.message);
        },
      });
  }

  private getCityLocationWeather(cityLocation: City) {
    const { Latitude, Longitude } = cityLocation;
    this.weatherService.getCityWeatherDetails(Latitude, Longitude).subscribe({
      next: (data) => {
        this.weather = data;
        this.searchingWeather = false;
      },
      error: () => {
        this.searchingWeather = false;
      },
    });
  }
}
