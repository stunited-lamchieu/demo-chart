import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}
  options: any;

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Doanh thu theo tháng trong năm 2022',
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      icon: 'circle',
      grid: {
        bottom: '20%',
        containLabel: true,
      },
      dataset: {
        source: [
          ['product', 'Doanh thu gộp', 'Doanh thu giảm', 'Doanh thu ròng'],
          ['Tháng 1', 20, 1, 19],
          ['Tháng 2', 25, 4, 21],
          ['Tháng 3', 40, 7, 33],
          ['Tháng 4', 30, 9, 25],
          ['Tháng 5', 32, 10, 22],
          ['Tháng 6', 31, 5, 33],
          ['Tháng 7', 35, 7, 15],
          ['Tháng 8', 48, 8, 23],
          ['Tháng 9', 50, 9, 22],
          ['Tháng 10', 55, 15, 28],
          ['Tháng 11', 45, 12, 24],
          ['Tháng 12', 38, 15, 30],
        ],
      },
      xAxis: {
        type: 'category',
        axisTick: { show: true },
        axisLabel: {
          width: 100,
          overflow: 'truncate',
          interval: 0,
        },
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
      yAxis: [
        {
          type: 'value',
          minInterval: 1,
        },
      ],
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      barWidth: '15%',
      barGap: 0.2,
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        borderRadius: [5, 5, 0, 0],
      },
    };
  }
}
