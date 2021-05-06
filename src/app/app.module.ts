import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {HttpClientModule} from '@angular/common/http';
import {DriversComponent} from './components/drivers/drivers.component';
import {StatsService} from './stats.service';
import {DriversChartComponent} from './components/drivers-chart/drivers-chart.component';

import {WeatherService} from './weather.service';
import {SpeedChartComponent} from './components/speed-chart/speed-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DriversComponent,
    DriversChartComponent,
    SpeedChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StatsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
