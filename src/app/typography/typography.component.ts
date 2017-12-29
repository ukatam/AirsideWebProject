import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  prioritylist: any ;
  showDialog = false;
  departments: any;
  dept:any;
  priority:any;
  txtobservations:any;

  constructor(public http:Http) { 
    this.http.get('http://localhost:4200/api/Department/').map(res => res.json()).subscribe( data1=> {
      this.departments = data1;
      },
      err => {
        console.log("error has occured");      
      });
    this.http.get('http://localhost:4200/api/Priority/').map(res => res.json()).subscribe( data1=> {
        this.prioritylist = data1;
        },
        err => {
        console.log("error has occured");      
      });
  }
  sendEmail(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

   
    let postparams ={
      Dept_ID:this.dept,
      Priority:this.priority,
      observation:this.txtobservations
    }
    
    this.http.post('http://localhost:4200/api/Email/', JSON.stringify(postparams),{headers:headers})
    .map(res => res.json())
      .subscribe(data => {
        this.showDialog = !this.showDialog;
        this.dept="";
        this.priority="";
        this.txtobservations="";
      },
      error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
