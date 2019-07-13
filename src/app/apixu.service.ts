import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  public message = new BehaviorSubject('');
  currmessage = this.message.asObservable();
  public message2 = new BehaviorSubject('');
  lat = this.message2.asObservable();
  public message3 = new BehaviorSubject('');
  long = this.message3.asObservable();
  constructor(private http: HttpClient) { }

  getweather(location)
  {
  
    return this.http.get(
      'http://api.apixu.com/v1/current.json?key=f90e5215141446da84e50326190907&q=' + location
      );
  }

  getforecast(location)
  {
    return this.http.get("http://api.apixu.com/v1/forecast.json?key=f90e5215141446da84e50326190907&q=" + location +"&days=7")
  }
  clickedsubmit(location)
  {
    this.message.next(location);
  }
  
  sendtoresult(lat, long){
    this.message2.next(lat);
    this.message3.next(long);
  }
  getusingcurrent(lat, long)
  {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=2a95b33cb1fcd596b8d4d54f865f7051" );
  }


}
