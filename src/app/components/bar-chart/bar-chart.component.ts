import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels = ['mean', 'totalRaces', 'median'];
  public barChartType = 'bar';
  public barChartData = [
    {
      data: ['20', '50', '30'], label: 'Lewis'
    },
    {
      data: [40, 20, 15], label: 'Max'
    },

   ];


  barChartLegend;


  constructor() {}

  ngOnInit(){}
}
