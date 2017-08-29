import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { SummaryService } from './../../_services/summary.service'
import { DataService } from './../../_services/data.service'

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardMahasiswaComponent {
	private total = 0
	private unrequest = 0
	private accept = 0
	private reject = 0
	private pending = 0

  public barChartOptions1:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true
  };
  public barChartOptions2:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true
  };
  public barChartLabels1:string[] = [''];
  public barChartType1:string = 'bar';
  public barChartLegend1:boolean = true;

  public barChartLabels2:string[] = [''];
  public barChartType2:string = 'bar';
  public barChartLegend2:boolean = true;
 
  public barChartData1:any[] = [
    {data: [0], label: 'Terima'},
    {data: [0], label: 'Tolak'},
    {data: [0], label: 'Dalam Proses'}
  ];
  public barChartData2:any[] = [
    {data: [0], label: 'Diajukan'},
    {data: [0], label: 'Belum Diajukan'}
  ];
 
  // events
  public chartClicked1(e:any):void {
    console.log(e);
  }
 
  public chartHovered1(e:any):void {
    console.log(e);
  }
  public chartClicked2(e:any):void {
    console.log(e);
  }
 
  public chartHovered2(e:any):void {
    console.log(e);
  }    

    constructor(private http: Http,
	  	private data:DataService, 
	    private Summary: SummaryService) {
    console.log("dashboard mahasiswa")
  }

  ngOnInit() {   
    // init
    this.GetSummary()       
  }

  GetSummary() {
  	this.Summary.GetSummaryMahasiswaById(this.data.token, this.data.url_summary_mahasiswa + '/' + this.data.id_mahasiswa)
  		.subscribe(data => {
  			if(data.status) {
  				this.total = data.result.total
  				this.unrequest = data.result.total-data.result.request
  				this.accept = data.result.accepted
  				this.reject = data.result.rejected
  				this.pending = data.result.pending
          this.SetBarChart()
  			}
  		})
  }

  SetBarChart() {
    let clone = JSON.parse(JSON.stringify(this.barChartData1))
    clone[0].data[0] = this.accept
    clone[1].data[0] = this.reject
    clone[2].data[0] = this.pending
    this.barChartData1 = clone
    clone = JSON.parse(JSON.stringify(this.barChartData2))
    clone[0].data[0] = this.total - this.unrequest
    clone[1].data[0] = this.unrequest
    this.barChartData2 = clone
  }
}
