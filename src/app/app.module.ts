import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {HttpClientModule} from '@angular/common/http';
import {DriversComponent} from './components/drivers/drivers.component';
import {StatsService} from './stats.service';
import {DriversChartComponent} from './components/drivers-chart/drivers-chart.component';
import { WeatherComponent } from './components/weather/weather.component';
import {WeatherService} from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DriversComponent,
    DriversChartComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StatsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
