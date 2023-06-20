import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../dtos/weather.dto';
import { Observable, map } from 'rxjs';
import { WeatherApi } from '../Shared/WeatherDataExclued.enum';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private openWeatherApiBaseUrl: string = environment.openWeatherApiBaseUrl;
  private openWeatherApiKey: string = environment.openWeatherApiKey;

  constructor(private httpClient: HttpClient) {}

  public getCityWeatherDetails(
    latitude: number,
    longitude: number
  ): Observable<Weather> {
    const getWeatherDataUrl = `${this.openWeatherApiBaseUrl}/data/${WeatherApi.WeatherAPIVer}/onecall?lat=${latitude}&lon=${longitude}&exclude=${WeatherApi.WeatherDataExcludeProps}&units=metric&appid=${this.openWeatherApiKey}`;
    return this.httpClient.get<Weather>(getWeatherDataUrl).pipe(
      map((weather) => {
        return new Weather(weather);
      })
    );
  }
}
