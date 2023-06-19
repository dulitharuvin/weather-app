import { DailyWeather } from './daily-weather.dto';

export class Weather {
  public Temp: number;
  public Clouds: number;
  public WindSpeed: number;
  public WeatherDetail: WeatherDetail | null;
  public DailyWeather: DailyWeather[];

  constructor(o: any = {}) {
    const current = o['current'] ?? {};
    const currentWeather: unknown[] = current['weather'] ?? null;
    const dailyWeather: unknown[] = o['daily'] ?? [];

    this.Temp = current['temp'] ?? '';
    this.Clouds = current['clouds'] ?? '';
    this.WindSpeed = current['wind_speed'] ?? '';
    this.WeatherDetail = currentWeather
      ? new WeatherDetail(currentWeather.at(0))
      : null;

    this.DailyWeather = [];
    const dialyWeatherList = dailyWeather.map((dlw) => new DailyWeather(dlw));
    this.DailyWeather = [...this.DailyWeather, ...dialyWeatherList];
  }
}

export class WeatherDetail {
  public WeatherId: number;
  public WeatherMain: string;
  public WatherDescription: string;
  public WeatherIcon: string;

  constructor(o: any = {}) {
    this.WeatherId = o['id'] ?? '';
    this.WeatherMain = o['main'] ?? '';
    this.WatherDescription = o['description'] ?? '';
    this.WeatherIcon = o['icon'] ?? '';
  }
}
