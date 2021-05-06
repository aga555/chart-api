import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {DriversComponent} from './components/drivers/drivers.component';
import {DriversChartComponent} from './components/drivers-chart/drivers-chart.component';
import {SpeedChartComponent} from './components/speed-chart/speed-chart.component';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'drivers-chart', component: DriversChartComponent},
  {path: 'speed', component: SpeedChartComponent},
  {path: '**', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
