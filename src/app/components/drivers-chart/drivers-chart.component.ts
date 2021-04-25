import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatsService} from '../../stats.service';
import 'rxjs/add/operator/map';
import {ChartDataSets} from 'chart.js';


class DriverData {
  mean: string;
  median: string;
  totalRaces: string;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './drivers-chart.component.html',
  styleUrls: ['./drivers-chart.component.css']
})
export class DriversChartComponent implements OnInit {


  public barChartLabels = [];
  public barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  barChartLegend;
  public barChartType = 'bar';


  constructor(private statsService: StatsService) {
  }

  public barChartData: any = [
    {
      label: 'mean',
      data: []
    },
    {
      label: 'median',
      data: []
    },
    {
      label: 'TotalRaces',
      data: []
    }
  ];
  barChartDataLew: any = [
    {
      label: 'mean',
      data: []
    },
    {
      label: 'median',
      data: []
    },
    {
      label: 'TotalRaces',
      data: []
    }
  ];
  barChartLabelsLew: ['Lew'];

  ngOnInit(): void {

    this.statsService.findAllDrivers()
      .subscribe(a => {
        console.log(a);

        Object.keys(a).forEach(index => {
          console.log(index);
          this.barChartData[0].data.push(a[index]['mean']);
          this.barChartData[1].data.push(a[index]['median']);
          this.barChartData[2].data.push(a[index]['totalRaces']);

          this.barChartLabels.push(a[index].name);
        });
        this.barChartDataLew[0].data.push(a[0]['mean']);
        this.barChartDataLew[1].data.push(a[0]['median']);
        this.barChartDataLew[2].data.push(a[0]['totalRaces']);
        // this.barChartLabelsLew.push( a[0]['totalRaces']);
       // this.barChartLabelsLew.push('Lewis');
        /*        this.barChartDataLew[0].data.push(a[0]['median']);
                this.barChartDataLew[0].data.push(a[0]['totalRaces']);*!/*/
        console.log(this.barChartDataLew.data);
      });
  }

}
