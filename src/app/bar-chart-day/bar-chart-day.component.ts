import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart-day',
  templateUrl: './bar-chart-day.component.html',
  styleUrls: ['./bar-chart-day.component.css'],
})
export class BarChartDayComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Doanh thu theo tuần trong năm 2022',
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
          ['Tuần 1', 20, 1, 19],
          ['Tuần 2', 25, 4, 21],
          ['Tuần 3', 40, 7, 33],
          ['Tuần 4', 30, 9, 25],
          ['Tuần 5', 32, 10, 22],
          ['Tuần 6', 31, 5, 33],
          ['Tuần 7', 35, 7, 15],
          ['Tuần 8', 48, 8, 23],
          ['Tuần 9', 50, 9, 22],
          ['Tuần 10', 55, 15, 28],
          ['Tuần 11', 45, 12, 24],
          ['Tuần 12', 38, 15, 28],
          ['Tuần 13', 41, 18, 24],
          ['Tuần 14', 44, 21, 30],
          ['Tuần 15', 47, 24, 33],
          ['Tuần 16', 50, 27, 36],
          ['Tuần 17', 53, 30, 39],
          ['Tuần 18', 56, 33, 42],
          ['Tuần 19', 59, 36, 45],
          ['Tuần 20', 62, 39, 48],
          ['Tuần 21', 65, 42, 51],
          ['Tuần 22', 68, 45, 54],
          ['Tuần 23', 71, 48, 57],
          ['Tuần 24', 74, 51, 60],
          ['Tuần 25', 77, 54, 62],
          ['Tuần 26', 80, 57, 75],
          ['Tuần 27', 86, 60, 78],
          ['Tuần 28', 89, 63, 81],
          ['Tuần 29', 92, 66, 84],
          ['Tuần 30', 95, 69, 87],
          ['Tuần 31', 98, 72, 90],
          ['Tuần 32', 101, 75, 93],
          ['Tuần 33', 104, 78, 96],
          ['Tuần 34', 107, 81, 99],
          ['Tuần 35', 110, 84, 102],
          ['Tuần 36', 113, 90, 105],
          ['Tuần 37', 113, 93, 108],
          ['Tuần 38', 116, 96, 114],
          ['Tuần 39', 119, 99, 117],
          ['Tuần 40', 122, 102, 120],
          ['Tuần 41', 125, 105, 111],
          ['Tuần 42', 128, 108, 123],
          ['Tuần 43', 131, 111, 126],
          ['Tuần 44', 134, 114, 129],
          ['Tuần 45', 137, 117, 132],
          ['Tuần 46', 140, 120, 135],
          ['Tuần 47', 143, 123, 138],
          ['Tuần 48', 146, 126, 141],
          ['Tuần 49', 149, 129, 144],
          ['Tuần 50', 152, 132, 147],
          ['Tuần 51', 155, 135, 150],
          ['Tuần 52', 161, 138, 153],
          ['Tuần 53', 164, 141, 156],
          ['Tuần 54', 128, 108, 123],
          ['Tuần 55', 131, 111, 126],
          ['Tuần 56', 134, 114, 129],
          ['Tuần 57', 137, 117, 132],
          ['Tuần 58', 140, 120, 135],
          ['Tuần 59', 143, 123, 138],
          ['Tuần 60', 146, 126, 141],
          ['Tuần 61', 149, 129, 144],
          ['Tuần 62', 152, 132, 147],
          ['Tuần 63', 155, 135, 150],
          ['Tuần 64', 134, 114, 129],
          ['Tuần 65', 137, 117, 132],
          ['Tuần 66', 140, 120, 135],
          ['Tuần 67', 143, 123, 138],
          ['Tuần 68', 146, 126, 141],
          ['Tuần 69', 149, 129, 144],
          ['Tuần 70', 152, 132, 147],
          ['Tuần 71', 155, 135, 150],
        ],
      },
      xAxis: {
        type: 'category',
        axisTick: { show: true },
        axisLabel: {
          width: 100,
          overflow: 'truncate',
          interval: 5,
          hideOverlap: true,
        },
      },
      yAxis: [
        {
          type: 'value',
          minInterval: 1,
        },
      ],
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
