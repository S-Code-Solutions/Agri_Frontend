import { Component, OnInit } from '@angular/core';
import {ChartData, ChartType} from 'chart.js';


@Component({
  selector: 'app-sub-statics',
  templateUrl: './sub-statics.component.html',
  styleUrls: ['./sub-statics.component.scss']
})
export class SubStaticsComponent implements OnInit {

  percent=30;

  constructor() { }

  ngOnInit(): void {

  }

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Organic', 'Chemical', 'Both' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [
          'rgb(8, 144, 61)',
          'rgb(32, 184, 6)',
          'rgb(248, 205, 16)'
        ],},

    ]
  };
  public doughnutChartType: ChartType = "doughnut";



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
