import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { City } from 'src/app/dtos/city.dto';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    locationSearchQuery: [''],
  });

  subject: Subject<any> = new Subject();

  selectedCity: City | null = null;

  @Input() cityLocationList: City[] = [];

  @Output() locationSearchQuery: EventEmitter<string> =
    new EventEmitter<string>();

  @Output() selectCity: EventEmitter<City> = new EventEmitter<City>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.subject.pipe(debounceTime(1000)).subscribe((inputValue: string) => {
      if (!inputValue || inputValue.trim().length === 0) {
        return;
      }
      this.locationSearchQuery.emit(inputValue);
    });
  }

  public searchCityLocation(event: any) {
    this.subject.next(event.target.value);
  }

  selectCityLocation(cityLocation: City) {
    this.selectedCity = cityLocation;
    this.selectCity.emit(this.selectedCity);
    this.formGroup.get('locationSearchQuery')?.setValue(cityLocation.Name);
    this.cityLocationList = [];
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }
}
