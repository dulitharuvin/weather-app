export class City {
  public Name: string;
  public Latitude: number;
  public Longitude: number;
  public Country: string;
  public State: string;

  constructor(o: any = {}) {
    this.Name = o['name'] ?? '';
    this.Latitude = o['lat'] ?? '';
    this.Longitude = o['lon'] ?? '';
    this.Country = o['country'] ?? '';
    this.State = o['state'] ?? '';
  }
}
