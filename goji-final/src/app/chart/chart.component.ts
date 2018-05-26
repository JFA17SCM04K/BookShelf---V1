import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data: any;
  total: any;
  totalNo: any=0;
  totalYes: any=0;
  options: any;
  toggle: number=1;
  constructor(private http: HttpClient,
              private commonService: CommonService) {}

  ngOnInit() {}


  getChartAsPerGenre(value){
        console.log("value is "+value);
        this.data = {
          labels: [],
          datasets: [
              {
                  data: [],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#41552B",
                      "#72162F"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#41552B",
                    "#72162F"
                  ]
              }]
          };
          this.options = {
                title: {
                    display: true,
                    text: 'Chart',
                    fontSize: 14
                },
                legend: {
                    position: 'bottom'
                }
            };

        if(value == 'genre'){
          console.log("if part is triggered");
          this.commonService.getChartDataNew()
            .subscribe(data =>{
                let i2=0;
                let arrayLabels2 = [];
                let valueLabels2 = [];
                while(data[i2]){
                    arrayLabels2.push(data[i2]._id);
                    valueLabels2.push(data[i2].total);
                    i2=i2+1;
                }
                this.data.labels = arrayLabels2;
                console.log("the this.data.labels"+this.data.labels);
                this.data.datasets[0].data = valueLabels2;
                console.log("the this.data.datasets[0].data"+this.data.datasets[0].data);
                this.options.title.text = "Analyzing the books as per GENRE";
                console.log("my title");
                console.log(this.options.title.text);


            });
        }else{
          console.log("else part is triggered");
          this.commonService.getChartData()
            .subscribe(data =>{
                let i=0;
                let arrayLabels = [];
                let valueLabels = [];
                while(data[i]){
                    arrayLabels.push(data[i]._id);
                    valueLabels.push(data[i].total);
                    i=i+1;
                }
                this.data.labels = arrayLabels;
                console.log("the this.data.labels"+this.data.labels);
                this.data.datasets[0].data = valueLabels;
                console.log("the this.data.datasets[0].data"+this.data.datasets[0].data);
                this.options.title.text = "Analyzing the books as per AVAILABILITY";

            });
        }

  }

}
