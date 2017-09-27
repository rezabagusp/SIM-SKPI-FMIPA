import { DataService } from './../../_services/data.service';
import { SummaryService } from './../../_services/summary.service'
import { Http, Response, Headers } from '@angular/http'

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  providers:[DataService]
})
export class DashboardComponent {
  private total = 0
  private request = 0
  private accept = 0
  private reject = 0
  private pending = 0
  private skor = 0

  /*Bar chart Total*/
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true
  }
  public barChartLabels:string[] = ['']
  public barChartType:string = 'bar'
  public barChartLegend:boolean = true
 
  public barChartData:any[] = [
    {data: [0], label: 'Terima'},
    {data: [0], label: 'Tolak'},
    {data: [0], label: 'Dalam Proses'}
  ]
 
  // events
  public chartClicked(e:any):void {
    console.log(e)
  }
 
  public chartHovered(e:any):void {
    console.log(e)
  } 
  /*Bar chart skor*/
  public barChartOptions1:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true
  }
  public barChartLabels1:string[] = ['']
  public barChartType1:string = 'bar'
  public barChartLegend1:boolean = true
 
  public barChartData1:any[] = [
    {data: [0], label: 'Statistika'},
    {data: [0], label: 'Geofisika dan Meteorologi'},
    {data: [0], label: 'Biologi'},
    {data: [0], label: 'Kimia'},
    {data: [0], label: 'Matematika'},
    {data: [0], label: 'Ilmu Komputer'},
    {data: [0], label: 'Fisika'},
    {data: [0], label: 'Bio Kimia'}
  ]
 
  // events
  public chartClicked1(e:any):void {
    console.log(e)
  }
 
  public chartHovered1(e:any):void {
    console.log(e)
  }

  public login = ""

  constructor( private http: Http,
      private data:DataService, 
      private Summary: SummaryService) {
  }
  ngOnInit() {   
    // init
    this.GetSummary()
    this.SetChart2()        
  }

  GetSummary() {
    this.Summary.GetSummaryMahasiswaById(this.data.token, this.data.url_summary_departement + '/' + this.data.id_departemen)
      .subscribe(data => {
        if(data.status) {
          this.total = data.result.total
          this.request = data.result.request
          this.accept = data.result.accepted
          this.reject = data.result.rejected
          this.pending = data.result.pending
          this.SetChart1()
        }
      })
  }

  SetChart1() {
    let clone = JSON.parse(JSON.stringify(this.barChartData))
    clone[0].data[0] = this.accept
    clone[1].data[0] = this.reject
    clone[2].data[0] = this.pending
    this.barChartData = clone
  }

  SetChart2() {
    this.Summary.GetDepartementList(this.data.token, this.data.url_summary_listdepartement + '/' + this.data.id_departemen)
      .subscribe(dept => {
        let data = dept.result
        let clone = JSON.parse(JSON.stringify(this.barChartData1))
        for(let i=0; i<data.length-1; i++) {
          clone[i].data[0] = data[i].skor[0]
          clone[i].label = data[i].label
          if(this.data.id_departemen == 9) {
            this.skor += data[i].skor[0]
            this.login = "Fakultas"
          } else {
            if(this.data.id_departemen == data[i].id) {
              this.skor += data[i].skor[0]
              this.login = data[i].label
            }
          }
        }
        this.barChartData1 = clone
      })
  }
}