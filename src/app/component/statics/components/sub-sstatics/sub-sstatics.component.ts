import {Component, OnInit, ViewChild} from '@angular/core';
import {SubServicesService} from "../../services/sub-services.service";
import {ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-sub-sstatics',
  templateUrl: './sub-sstatics.component.html',
  styleUrls: ['./sub-sstatics.component.scss']
})
export class SubSstaticsComponent implements OnInit {

  percent = 0;
  Allproducts=0;
  PNatural = 0;
  PChemical = 0;
  PBoth = 0;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private substaticsservice:SubServicesService) { }

  ngOnInit(): void {
    this.getDaughnutTypes()
  }

  public doughnutChartLabels: string[] = ['Organic-Products', 'Chemical-Products', 'Both-Products'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          'rgba(8, 144, 61,0.6)',
          'rgba(32, 184, 6,0.6)',
          'rgba(248, 205, 16,0.6)'
        ],
        hoverBackgroundColor:[
          'rgba(8, 144, 61,1)',
        ],
        hoverBorderColor:[
          'rgba(248, 205, 16,0.6)'
        ]
      },

    ]
  };
  public doughnutChartType: ChartType = "doughnut";


  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getDaughnutTypes(){
    this.substaticsservice.Daughpercntage().subscribe(res=>{
      console.log(res.data)
      this.percent = res.data.pall
      this.Allproducts = res.data.pall
      this.PNatural = res.data.pnatural
      this.PChemical = res.data.pchemical
      this.PBoth = res.data.pboth
      this.doughnutChartData.datasets[0].data = [res.data.pnatural, res.data.pchemical, res.data.pboth];
      this.chart?.update();
    })
  }

}
