import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeathermainComponent } from './weathermain/weathermain.component';
import { ResultComponent } from './result/result.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [{
  path: '', component: WeathermainComponent
},{
  path: 'result', component: ResultComponent
},{
  path: 'forecast', component: ForecastComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
