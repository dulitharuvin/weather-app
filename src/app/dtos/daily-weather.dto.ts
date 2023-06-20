import { WeatherDetail } from './weather.dto';

export class DailyWeather {
  public Date?: Date | null;
  public Temp: Temperature | null;
  public Clouds: number;
  public WeatherDetail: WeatherDetail | null;

  constructor(o: any = {}) {
    const dailyWeather: unknown[] = o['weather'] ?? null;
    const temp = o['temp'] ?? null;

    this.Date = o['dt'] ? new Date(o['dt'] * 1000) : null;
    this.Clouds = o['clouds'] ?? '';
    this.Temp = temp ? new Temperature(temp) : null;
    this.WeatherDetail = dailyWeather
      ? new WeatherDetail(dailyWeather.at(0))
      : null;
  }
}

export class Temperature {
  public Min: number;
  public Max: number;

  constructor(o: any = {}) {
    this.Min = o['min'] ?? '';
    this.Max = o['max'] ?? '';
  }
}
