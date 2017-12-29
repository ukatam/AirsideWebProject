import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
declare var jsPDF: any;
@Component({
  selector: 'app-checklist-report',
  templateUrl: './checklist-report.component.html',
  styleUrls: ['./checklist-report.component.css']
})
export class ChecklistReportComponent implements OnInit {
  apronheader: boolean;

 
  
    checklistname: string;
    pdf: boolean=false;
    myVar:boolean=true;
    hide:boolean=false;
    checklistdetails: any;
    loading:boolean=false;
    checklistreport:boolean=false;
    checklist: string;
    runwaylist: any;
    edited:boolean=false;
    list:boolean=true;
    checklisttype: string;
    public time: any;
    public date: any;
    public p: number = 1;
  
    constructor(public http:Http) { }
  
    ngOnInit() {
    }
    isLoading(){
      this.pdf=true;
      return true;
    }
    onCancelclick(){
      this.list=true;
      this.checklistreport=false;
      this.hide=false;
      this.apronheader=false;
    }
    onSubmit(DATE,Inspection_Time)
    {this.loading=true;
      this.checklistreport=false;
      this.edited=false;
      this.list=false;
     
      console.log("Test");
      this.date=DATE;
      this.time=Inspection_Time;
    
      let headers1 =new Headers();
      //console.log(this.checklist);
      headers1.append("Content-Type",'application/json');
      headers1.append("Accept",'application/json');
    
     let postParams1={
         date:DATE,
         time:Inspection_Time
     }
  
     if(this.checklist=="1")
     {
      this.hide=true;
      this.apronheader=false;
      this.checklistreport=true;
      this.edited=false;
       this.checklistname="RUNWAY INSPECTION CHECKLIST";
       this.http.post('http://localhost:4200/api/RunwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
      .map(res => res.json()).subscribe(data => {
       this.checklistdetails=data;
       console.log(data);
       this.loading=false;
       },
       error => {
        this.loading=false;
       console.log(error);
       });
     } 
     else if(this.checklist=="2")
     {
      this.hide=true;
      this.apronheader=false;
      this.checklistreport=true;
      this.edited=false;
      this.checklistname="TAXIWAY INSPECTION CHECKLIST";
       this.http.post('http://localhost:4200/api/TaxiwayChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
       .map(res => res.json()).subscribe(data => {
       this.checklistdetails=data;
       this.loading=false;
       console.log(data);
       },
        error => {
       console.log(error);
       this.loading=false;
       });
     }
     else if(this.checklist=="3")
     { 
       this.apronheader=true;
       this.hide=false;
       console.log("Apron Test");
      this.checklistname="APRON INSPECTION CHECKLIST";
         this.checklistreport=false;
        this.edited=true;
       this.http.post('http://localhost:4200/api/ApronChecklistDetails',JSON.stringify(postParams1),{ headers : headers1 })
       .map(res => res.json()).subscribe(data => {
       this.checklistdetails=data;
       this.loading=false;
       //console.log(data);
       },
        error => {
       console.log(error);
       this.loading=false;
       });
     }
  }
  
  onExcelclick()
  {
    
    /*const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.checklistdetails);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, 'ChecklistReport');*/
    if(this.checklist=="1" || this.checklist=="2")
    {
      var responseData = this.checklistdetails;
      console.log(this.checklistdetails);
      var doc = new jsPDF('p', 'pt');
      var source = document.getElementById('divhide');
      doc.addHTML(source,20,20, () => {
        var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
        var rows = [];
        var col1 = ["Department","Name"];
        var rows1=[]
     
        var Other_Observations;
        var Name;
        var Department;
        for( let item of responseData )
        {
          Department=item['Department_Name'];
          Other_Observations=item['Other_Observations'];
          Name=item['Person_Name'];
          var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
          rows.push(temp);
        }
      
        rows1.push(Other_Observations,Name);
          doc.autoTable(col, rows, {
          
          /* drawCell: function(cell, data){
            var rows = data.table.rows;
            if(data.row.index == rows.length - 1){
              doc.setFillColor(200, 200, 255);
            }
          }, */
          theme: 'grid',
          styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
          margin: { top: 190},
        
          addPageContent: function(data){
          //   doc.autoTable(col1, rows1, {
          //   styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
          //   margin: { top: 600},
          
          //   addPageContent: function(data){
              
          //   }
          // });
          doc.setFont("verdana");
         
          doc.setFontSize(10);
          doc.text(50, 670, 'Department');
          doc.text(500, 670, 'Name');
          doc.setFont("verdana");
          doc.text(50, 690, Department);
          doc.text(500, 690, Name);
          doc.setFont("verdana");
     
          doc.setFontSize(10);
          doc.text(50, 730, 'If other observations observed: ');
          doc.setFont("verdana");
          doc.setFontSize(10);
          doc.text(50, 745, Other_Observations);
          }
        });
      doc.save('ChecklistInspectionReport.pdf');
  
    });
  
    // var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
    // var rows = [];
   
    // for( let item of responseData )
    // {
    //   var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
    //   rows.push(temp);
    // }
      /* doc.fromHTML( '<table id="divhide" ><tr><td >Mumbai <br> International Airport <br > Pvt. Ltd</td><td >RUNWAY/ TAXIWAY INSPECTION CHECKLIST <hr> Department: ASM</td><td>Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:-29/05/2017 </td></tr></table>', 20,30 , {
        'fontSize': 8,
        'font': "verdana",
        left: 40,
        'width': 522,
      } 
  //   ); */
  //     doc.autoTable(col, rows, {
      
  //     /* drawCell: function(cell, data){
  //       var rows = data.table.rows;
  //       if(data.row.index == rows.length - 1){
  //         doc.setFillColor(200, 200, 255);
  //       }
  //     }, */
  //     theme: 'grid',
  //     styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
  //     margin: { top: 100},
    
  //     addPageContent: function(data){
       
  //     }
  //   });
  //   doc.save('Test.pdf');
    } else if(this.checklist=="3"){
      
  
    }
  }
  onPdfDownload()
  {
    var responseData = this.checklistdetails;
    console.log(responseData);
    console.log("apron");
    var doc = new jsPDF('p', 'pt');
    var source = document.getElementById('divapron');
    doc.addHTML(source,20,20, () => {
      var col = ["Stand", "Surface Condition", "Markings", "Cleaning","Serviceability","Action Taken"];
      var rows = [];
    
   
      var Other_Observations;
      var SafetyOfficerName;
    
      var Department;
      for( let item of responseData )
      {
        Department=item['Department_Name'];
        Other_Observations=item['Other_Observations'];
        SafetyOfficerName=item['OfficierName'];
        var temp = [item['Stand'], item['Surface_Condition'], item['Markings'], item['Cleaning'],item['Serviceability'],item['ActionTaken']];
        rows.push(temp);
        
      }
     
     
    
        doc.autoTable(col, rows, {
        
        /* drawCell: function(cell, data){
          var rows = data.table.rows;
          if(data.row.index == rows.length - 1){
            doc.setFillColor(200, 200, 255);
          }
        }, */
        theme: 'grid',
        styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
        margin: { top: 300},
      
        addPageContent: function(data){
          doc.setFont("verdana");
          
           doc.setFontSize(10);
           doc.text(40, 180, 'Name of Safety Officer:');
          doc.text(150, 180, SafetyOfficerName);
          doc.text(40, 200, 'Observations:');
          doc.text(40, 215, Other_Observations);
    //  doc.text(40,180,'Name of Safety Officer:');
    //  doc.text(45,180,Name);
             }
      });
    doc.save('ApronInspectionChecklist.pdf');
  
  });
  
  }
  onApronCancel()
  {
    this.list=true;
    this.checklistreport=false;
    this.hide=false;
    this.apronheader=false;
    this.edited=false;
  }
    onChecklistSelect(){
      this.loading=true;
      this.list=true;
      this.checklistreport=false;
      this.edited=false;
      this.hide=false;
      this.apronheader=false;
      this.checklist=this.checklisttype;
      if(this.checklisttype=="1")
      {
       this.http.get('http://localhost:4200/api/RunwayApprovalList/').map(res => res.json()).subscribe( data1=> {
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
       this.http.get('http://localhost:4200/api/TaxiwayApprovalList/').map(res => res.json()).subscribe( data1=> {
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
       this.http.get('http://localhost:4200/api/ApronApprovalList/').map(res => res.json()).subscribe( data1=> {
         this.runwaylist = data1;
         //console.log(this.runwaylist);
         this.loading=false;
         },
         err => {
           console.log("error has occured");  
           this.loading=false;    
         });
      }
     
    }
  
  }
  

