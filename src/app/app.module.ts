import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartDayComponent } from './line-chart-day/line-chart-day.component';
import { BarChartDayComponent } from './bar-chart-day/bar-chart-day.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    LineChartDayComponent,
    BarChartDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
