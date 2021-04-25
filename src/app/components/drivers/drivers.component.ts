import {Component, OnInit} from '@angular/core';
import {StatsService} from '../../stats.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  driverArray: any = [];
  tableHeades: any = ['id', 'name', 'mean', 'total', 'median'];

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.findAllDrivers();
  }

  findAllDrivers() {
    const resp = this.statsService.findAllDrivers();
    resp.subscribe({
      next: (drivers: string[]) => {
        this.driverArray = drivers;
      }
    });
  }
}

