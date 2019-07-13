import { Component, OnInit } from '@angular/core';
import{ApixuService} from '../apixu.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  location: any;
  weatherforecast: any;
  forecastdays: any[] = [];
  check: boolean = true;
  flag : boolean = false;
  constructor(private apixu: ApixuService) { }

  ngOnInit() {
    this.apixu.currmessage.subscribe((weather) =>
    {
      this.location = weather;
      console.log(this.location);
    }
    );

    this.apixu.getforecast(this.location).subscribe(data =>{
      this.weatherforecast = data;
      console.warn("forecast");
      this.flag = true;
      console.log(this.weatherforecast);
      this.forecastdays = this.weatherforecast.forecast.forecastday;
      console.log(this.forecastdays);
    },
    error =>{
      this.check = false;
      console.log("error occured", error)
    });
  }


}
