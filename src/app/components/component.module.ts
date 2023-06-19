import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from '../services/service.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    AutoCompleteComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
  ],
})
export class ComponentModule {}
