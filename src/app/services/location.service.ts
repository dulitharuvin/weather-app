import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable, map } from 'rxjs';
import { City } from '../dtos/city.dto';
import { WeatherApi } from '../Shared/WeatherDataExclued.enum';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private openWeatherApiBaseUrl: string = environment.openWeatherApiBaseUrl;
  private openWeatherApiKey: string = environment.openWeatherApiKey;

  constructor(private httpClient: HttpClient) {}

  public getCityLocationList(
    searchQuery: string,
    limit: number
  ): Observable<City[]> {
    const getLocationsUrl = `${this.openWeatherApiBaseUrl}/geo/${WeatherApi.LocationAPIVer}/direct/?q=${searchQuery}&limit=${limit}&appid=${this.openWeatherApiKey}`;
    return this.httpClient.get<City[]>(getLocationsUrl).pipe(
      map((cities) => {
        return cities.map((city) => new City(city));
      })
    );
  }
}
