export class City {
  public Name: string;
  public Lat: number;
  public Lon: number;
  public Country: string;
  public State: string;

  constructor(o: any = {}) {
    this.Name = o['name'] ?? '';
    this.Lat = o['lat'] ?? '';
    this.Lon = o['lon'] ?? '';
    this.Country = o['country'] ?? '';
    this.State = o['state'] ?? '';
  }
}
