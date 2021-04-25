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

}
