import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constans';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  findAllDrivers() {
    const apiUrl = Constants.FIND_ALL_DRIVERS;
    return this.http.get<string[]>(apiUrl)
      .map(result => result);

  }

  findSpeedDrivers() {
    const apiUrl = Constants.FIND_ALL_DRIVERS_SPEED;
    return this.http.get<string[]>(apiUrl)
      .map(result => result);

  }

  findSpeedLewis() {
    const apiUrl = Constants.FIND_MAX_SPEED;
    return this.http.get<string[]>(apiUrl)
      .map(result => result);

  }
  findSpeedMax() {
    const apiUrl = Constants.FIND_MAX_SPEED;
    return this.http.get<string[]>(apiUrl)
      .map(result => result);

  }
}
