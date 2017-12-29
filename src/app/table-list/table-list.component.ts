import { Component, OnInit, NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
declare var jsPDF: any;

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
 
})
export class TableListComponent implements OnInit {
  public time: any;
  public date: any;
  loading:boolean=false;
  public p: number = 1;
  checklistdetails: any;
  reportpattern:boolean=false;
  acceptabilitySigns = ['+', '-', '0'];
  myVar:boolean = true;
  public editchecklist = false;
  public editapronchecklist = false;
  public checklistreport = false;
  public edited = false;
  runwaylist: any;
  checklisttype:any;
  checklist:any;
  approve: boolean = true;
  showDialog = false;

  constructor( public http: Http ) {
  
   }
   //Load checklist List
   onChecklistType(){
     this.checklist=this.checklisttype;
     this.loading=true;
     if(this.checklisttype=="1")
     {
      this.http.get('http://localhost:4200/api/RunwayChecklist/').map(res => res.json()).subscribe( data1=> {
        this.runwaylist = data1;
        //console.log(this.runwaylist);
        this.loading=false;
        },
        err => {
          console.log("error has occured");      
          this.loading=false;
        });
     }
     else if(this.checklisttype=="2")
     {
      this.http.get('http://localhost:4200/api/TaxiwayChecklist/').map(res => res.json()).subscribe( data1=> {
        this.runwaylist = data1;
        this.loading=false;
        //console.log(this.runwaylist);
        },
        err => {
          console.log("error has occured");    
          this.loading=false;  
        });
     } 
     else if(this.checklisttype=="3")
     {
      this.http.get('http://localhost:4200/api/ApronChecklist/').map(res => res.json()).subscribe( data1=> {
        this.runwaylist = data1;
        //console.log(this.runwaylist);
        this.loading=false;
        },
        err => {
          console.log("error has occured");      
          this.loading=false;
        });
     }
     console.log(this.checklisttype[0].Other_observations);
   }
   //Get Checklist Details
     onSubmit(DATE,Inspection_Time)
     {

       this.date=DATE;
       this.time=Inspection_Time;
       this.myVar=false;  
       let headers1 =new Headers();
       //console.log(this.checklist);
       headers1.append("Content-Type",'application/json');
       headers1.append("Accept",'application/json');
     
      let postParams1={
          date:DATE,
          time:Inspection_Time
      }

      this.loading=true;

      if(this.checklist=="1")
      {
        this.checklistreport=true;
        
        this.http.post('http://localhost:4200/api/RunwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
       .map(res => res.json()).subscribe(data => {
        this.checklistdetails=data;
        this.loading=false;
        },
        error => {
          this.loading=false;
        });
      } 
      else if(this.checklist=="2")
      {
        this.checklistreport=true;
        
        this.http.post('http://localhost:4200/api/TaxiwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
        .map(res => res.json()).subscribe(data => {
          this.checklistdetails=data;
          this.loading=false;
        },
         error => {
          this.loading=false;
        });
      }
      else if(this.checklist=="3")
      {
        
        this.edited = true;
        this.http.post('http://localhost:4200/api/ApronChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
        .map(res => res.json()).subscribe(data => {
          this.checklistdetails=data;
          this.loading=false;
        },
         error => {
          this.loading=false;
        });
      }
   }
   //Export to excel
   
  /*private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }*/
  //Edit Checklist
   EditChecklist(){
    this.editchecklist=true;
    this.checklistreport=false;
   }

   editApronChecklist(){
    this.edited = false;
    this.editapronchecklist = true;
   }

   approveChecklist(){
    this.loading=true;
    let headers =new Headers();
    headers.append("Content-Type",'application/json');
    

    let postparams={
     
      date: this.date,
      time: this.time,
      approved: this.approve,
      approvedby:localStorage.getItem("user")

    }

    //console.log(this.date);
    //console.log(this.time);
    //console.log(this.checklist);

    if(this.checklist=="1"){
      this.http.post('http://localhost:4200/api/ApproveRunwayChecklist',JSON.stringify(postparams),{ headers : headers })
      .map(res => res.json()).subscribe(data => {
      
        this.showDialog = !this.showDialog;
        this.loading=false;
        this.onChecklistType();
      },
       error => {
        this.loading=false;
      console.log(error);
      });
    }
    else if(this.checklist=="2"){
      this.http.post('http://localhost:4200/api/ApproveTaxiwayChecklist', JSON.stringify(postparams), { headers : headers})
      .map(res => res.json()).subscribe(data => {
        this.loading=false;
        this.showDialog = !this.showDialog;
        this.onChecklistType();
        },
         error => {
          this.loading=false;
        console.log(error);
      });
    }
    else if (this.checklist == "3"){
      this.http.post('http://localhost:4200/api/ApproveApronChecklist', JSON.stringify(postparams), { headers : headers})
      .map(res => res.json()).subscribe(data => {

         this.showDialog = !this.showDialog;
         this.loading=false;
         this.onChecklistType();
        },
         error => {
        console.log(error);
        this.loading=false;
      });
    }

    this.checklistreport = false;
    this.edited = false;
    this.myVar = true;
    
   }
   return()
   {
    this.checklistreport = false;
    this.edited = false;
    this.editchecklist=false;
    this.editapronchecklist=false;
    this.myVar = true;
   }
   // Update Checklist

   updatechecklist(myForm){
      let headers1 =new Headers();
    
      headers1.append("Content-Type",'application/json');
      headers1.append("Accept",'application/json');
     
      let postParams1=myForm.form.value.inputs;
      postParams1['date']=this.date;
      postParams1['time']=this.time;
      if(this.checklist == "1")
      {
        this.http.post('http://localhost:4200/api/RunwayActionTaken',JSON.stringify(postParams1),{ headers : headers1 })
        .map(res => res.json()).subscribe(data => {
          this.showDialog = !this.showDialog;
          this.return();
        },
        error => {
            console.log(error);
        });
      }
      else if(this.checklist == "2")
      {
        this.http.post('http://localhost:4200/api/TaxiwayActionTaken',JSON.stringify(postParams1),{ headers : headers1 })
        .map(res => res.json()).subscribe(data => {
          this.showDialog = !this.showDialog;
          this.return();
          console.log("data is sent");
        },
        error => {
          console.log(error);
        });
      }
   }

   updateApronEditedChecklist(myForm){
    
     console.log("test");
    
     
     let headers = new Headers();
     headers.append("Content-Type", 'application/json');
     headers.append("Accept", 'application/json');

     /*let postparams:any=[
      {
        'Stand':'',
        'Surface_Condition':''
      } ];
     // = myForm.form.value.inputs;
      i=0;
      console.log(v);
      while (i <v-1)
      { 
        let stand:string;
        stand='stand'+i;
        //console.log(stand);
        //console.log(myForm.form.value.inputs.surfacecondition0);
        var surfacecondition = 'surfacecondition'+i;
        console.log(surfacecondition);
        let pp1=myForm.form.value.inputs;
        postparams.push({
         'Stand':pp1.stand,
         'Surface_Condition':pp1.surfacecondition
        });
        i=i+1;
      }
     console.log(postparams);*/
   

     let postparams =
     {
      'paramset':this.checklistdetails
     }
     
      console.log(postparams);

      

      this.http.post('http://localhost:4200/api/ApronActionTaken',JSON.stringify(postparams),{ headers : headers })
      .map(res => res.json()).subscribe(data => {
       
        this.showDialog = !this.showDialog;
        this.return();
        
      },
      error => {
        console.log(error);
       
      });
   }

  ngOnInit() {
  }

}
