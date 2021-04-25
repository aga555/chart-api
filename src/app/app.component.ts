import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chart-api';

  chart = []; // This will hold our chart info

  constructor() {
  }

  ngOnInit() {
  }
}
