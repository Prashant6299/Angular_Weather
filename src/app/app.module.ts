import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeathermainComponent } from './weathermain/weathermain.component';
import {ApixuService } from './apixu.service';
import { ResultComponent } from './result/result.component';
import { ForecastComponent } from './forecast/forecast.component';
@NgModule({
  declarations: [
    AppComponent,
    WeathermainComponent,
    ResultComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
