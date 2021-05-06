import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  canvas: any;
  canvas2: any;
  canvas3: any;
  ctx: any;
  ctx2: any;

  label: '# of Votes';
  label2: '# of Votes2222';
  data2: [5, 4, 3];

  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.canvas2 = document.getElementById('myChart2');
    this.ctx = this.canvas.getContext('2d');
    this.ctx2 = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['New', 'In Progress', 'On Hold'],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
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
      }
    });
    const myChart2 = new Chart(this.ctx2, {
      type: 'bar',
      data: {
        labels: ['back', 'In Progress', 'On Hold'],
        datasets: [{
          label: this.label2,
          data: [1, 2, 3],
          backgroundColor: [
            'rgb(0,39,255)',
            'rgb(235,71,66)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
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
      }
    });

  }
}
