import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import{ApixuService} from '../apixu.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-weathermain',
  templateUrl: './weathermain.component.html',
  styleUrls: ['./weathermain.component.css']
})
export class WeathermainComponent implements OnInit {

  public form: FormGroup;
  public check: boolean = true;
  public weatherdata: any;
  flag: boolean = false;
  flag2: boolean = false;
  public currdata: any;
  location:any ={};  
  latitude;
  longitude;
  constructor(private fb: FormBuilder, private apixuService: ApixuService, public router: Router) { 
    this.form = this.fb.group({
      location: ['', [Validators.required]]
    })
  }

  usecurrent()
  {
    this.flag = true;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.location = position;
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position);
        this.apixuService.getusingcurrent(this.latitude, this.longitude).subscribe(data=>{
          this.currdata = data;
          console.log(this.currdata);
          this.apixuService.clickedsubmit(this.currdata.name);
           this.router.navigate(['/result']);
          this.flag = false;
        });
      },
      error=>{
        alert("We need location access for displaying weather for your area.Kindly allow location access for this web app.")
        this.flag = false;
      }
      
      );
    }
    
  }

 

  ngOnInit() {
    
  }

  sendtoapi(form)
  {
    this.flag2= true;
    this.check = true;
    this.apixuService.clickedsubmit(form.value.location);
      //console.log(this.weatherdata);
      this.router.navigate(['/result']);
    this.flag2 = false;
  }

}
