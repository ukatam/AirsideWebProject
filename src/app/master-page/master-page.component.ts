import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {
  showDialog: boolean=false;
  masterdata: any;
  reportsdate:any;
  docnumber:any;
  constructor(public http:Http) { 
    this.http.get('http://localhost:4200/api/addMaster/').map(res => res.json()).subscribe( data1=> {
      this.masterdata=data1
      console.log(data1);
      this.reportsdate=this.masterdata[0].Date_Field;
      this.docnumber=this.masterdata[0].Document_Number;

      },
      err => {
        console.log("error has occured");      
      });
  }
  onSave()
  {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

   
    let postparams ={
      date:this.reportsdate,
      doc_no:this.docnumber,
      user:localStorage.getItem("user")
    }
    
    this.http.post('http://localhost:4200/api/addMaster/', JSON.stringify(postparams),{headers:headers})
    .map(res => res.json())
      .subscribe(data => {
        this.showDialog = !this.showDialog;
      
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
