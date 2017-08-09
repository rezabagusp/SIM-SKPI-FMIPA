import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

@Component({
  selector: 'app-verifikasi',
  templateUrl: './verifikasi.component.html',
  styleUrls: ['./verifikasi.component.scss']
})
export class VerifikasiComponent implements OnInit {


  // datatables
  private datalist=[]
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http,            
              ) {
    console.log('verifikasi fakultas')
    
   }

  ngOnInit() {   
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true,
    };
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(this.extractData)
      .subscribe(data => {
        console.log(data);
        this.datalist = data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
      console.log(this.datalist)
  }
  private extractData(res: Response) {
    return res.json();
  }  

}
