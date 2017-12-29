import { Component, OnInit } from '@angular/core';
import {  Http, Headers, RequestOptions } from '@angular/http';
import {IMyDrpOptions} from 'mydaterangepicker';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
declare var jsPDF: any;

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  model?: any=null;
  loading:boolean=false;
  emaillogs: any;
  p:number=1;
  statuschange:boolean=false;
  reportlist:boolean=true;
  date: any;
  dept ?:any;
  departments: any;
  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
   
};

  constructor(public http : Http) {
    this.loading = true;
    this.date =  new Date();
    let headers1 =new Headers();
    //console.log(this.checklist);
    headers1.append("Content-Type",'application/json');
    headers1.append("Accept",'application/json');
  
   let postParams1={
    
   }

   this.http.post('http://localhost:4200/api/EmailLogs/', JSON.stringify(postParams1),{headers:headers1})
   .map(res => res.json())
     .subscribe(data => {
      this.emaillogs = data;
      this.loading = false;
      },
     error => {
       console.log(error);
       this.loading = false;
     });
     
     this.http.get('http://localhost:4200/api/Department/').map(res => res.json()).subscribe( data1=> {
      this.departments = data1;
      },
      err => {
        console.log("error has occured");      
      });
   }
   checkEscalation(status){
     
if(status =='Closed')
{
  console.log(status);
  return false;

}
else 
{
  return true;
}

   }
   onChangeStatus(reportid)
   {
     this.loading = true;
    this.http.get('http://localhost:4200/api/Email/?id='+reportid).map(res => res.json()).subscribe( data => {
      this.emaillogs = data;
      this.loading = false;
    },
    err => {
      console.log("error has occurred");
      this.loading = false;
    });
    this.statuschange=true;
    this.reportlist=false;
   }
   checkdelayed(status){ 
      if(status=='Active')
      return false ;
      else
      return true;
   }
   onExcelclick(){
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet( this.emaillogs);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, 'Email_Report');

    // writing code for exporting to pdf
    // var responseData = this.emaillogs;
    // var doc = new jsPDF('p', 'pt', 'a4');
    // var col = ["ID", "Observation", "Department", "Priority", "Level", "Date"];
    // var rows = [];
    // for( let item of responseData )
    // {
    //   var temp = [item['EmailReportID'], item['ChecklistObservation'], item['DepartmentName'], item['PName'], item['EscalationLevel'], item['EscalatedDate']];
    //   rows.push(temp);
    // }
    // doc.autoTable(col, rows, {
    //   theme: 'grid',
    //   styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
    //   margin: { top: 60},
    //   addPageContent: function(data){
    //     doc.text("Email Report", 40, 30);
    //   }
    // });
    // doc.save(this.date + 'Email_Report.pdf');
   }
   
    private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
   //the status is changed to delayed
    onDelayed(reportid,status){
      let headers1 =new Headers();
 
      //console.log(this.checklist);
      headers1.append("Content-Type",'application/json');
      headers1.append("Accept",'application/json');
      this.loading = true;
  
      let postParams1={
      ReportId :reportid,
      Status:status
      }
   this.http.post('http://localhost:4200/api/EscalationStatus/', JSON.stringify(postParams1),{headers:headers1})
   .map(res => res.json())
     .subscribe(data => {
        this.loading = false;
      },
     error => {
       console.log(error);
       this.loading = false;
     });
   }

   onSearch(){
    let headers1 =new Headers();
    console.log(this.model);
    //console.log(this.checklist);
    headers1.append("Content-Type",'application/json');
    headers1.append("Accept",'application/json');
    this.loading = true;
    let postParams1={
        DateRange :this.model==null ? null : this.model.formatted,
        Department:this.dept
    }
    this.http.post('http://localhost:4200/api/EmailLogs/', JSON.stringify(postParams1),{headers:headers1})
      .map(res => res.json())
      .subscribe(data => {
        this.emaillogs = data;
        this.loading = false;
      },
      error => {
       console.log(error);
       this.loading = false;
     }); 
   }
   //Needfull is done and escalation is closed
   onCloseEscalation(){

   }
    
   ngOnInit() {
    }

}
