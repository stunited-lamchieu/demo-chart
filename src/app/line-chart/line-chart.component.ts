import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Doanh thu theo tháng trong năm 2022',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Doanh thu gộp', 'Doanh thu giảm', 'Doanh thu ròng'],
      },
      grid: {
        bottom: '20%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12',
        ],
      },
      yAxis: {
        type: 'value',
        minInterval: 1,
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
          xAxisIndex: [0, 1],
          width: '60%',
          left: 'center',
        },
        {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 100,
          xAxisIndex: [0, 1],
        },
      ],
      series: [
        {
          name: 'Doanh thu gộp',
          type: 'line',
          data: [20, 25, 40, 30, 32, 31, 35, 48, 50, 55, 45, 38],
        },
        {
          name: 'Doanh thu giảm',
          type: 'line',
          data: [1, 4, 7, 9, 10, 5, 7, 8, 9, 15, 12, 15],
        },
        {
          name: 'Doanh thu ròng',
          type: 'line',
          data: [19, 21, 33, 25, 22, 33, 15, 23, 22, 28, 24, 30],
        },
      ],
    };
  }
}
