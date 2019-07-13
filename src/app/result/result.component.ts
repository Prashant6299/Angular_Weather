import { Component, OnInit, Input} from '@angular/core';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  flag: boolean = false;
 weatherdata: any ;
 location: any;
 check: boolean = true;
  constructor(private apixu: ApixuService) {

   
   }


  
  ngOnInit() {
    this.apixu.currmessage.subscribe((weather) =>
    {
      this.location = weather;
      console.log(this.location);
      this.apixu.getweather(this.location).subscribe(data => {
        this.weatherdata = data;
        this.flag = true;
        console.warn("result");
         console.log(this.weatherdata);
      }, 
      error =>{
        this.check = false;
        console.log("error occured", error)
      });
    }
    );

   

  

  

  }



}
