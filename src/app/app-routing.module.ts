import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {DriversComponent} from './components/drivers/drivers.component';
import {DriversChartComponent} from './components/drivers-chart/drivers-chart.component';
import {WeatherComponent} from './components/weather/weather.component';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'drivers-chart', component: DriversChartComponent},
  {path: 'weather', component: WeatherComponent},
  {path: '**', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
