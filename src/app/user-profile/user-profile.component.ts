import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import 'rxjs/add/operator/map';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loading:boolean=true;
  users: any;
  getUserById: any;
  showDialog = false;
  p: number = 1;
  adduserForm: FormGroup;
  constructor(public http: Http,private router: Router) {
    
    this.bindUserData();
   }
   
  async ngOnInit() {
    this.initializeForm();
  }

//bind user data
bindUserData(){
    this.loading=false;
    this.http.get('http://localhost:4200/api/UserAccount/').map(res => res.json()).subscribe( data => {
    this.users = data;
    this.loading=true;
  },
  err => {
    //console.log("error has occurred");
  });
}

//Edit User Details
  onUserEdit(userid){
   this.loading = false;
   this.http.get('http://localhost:4200/api/UserAccount/?id='+userid).map(res => res.json()).subscribe( data => {
      this.getUserById = data;
      this.loading = true;
    },
    err => {
      this.loading = true;
    });
  }
  //Delete User
  onUserDelete(userid){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    
    let postparams ={
    id:userid
    } 
    this.http.post('http://localhost:4200/api/EditUser', JSON.stringify(postparams),{headers:headers})
    .map(res => res.json())
      .subscribe(data => {
      
        this.showDialog = !this.showDialog;
      
      
      },
      error => {
        console.log(error);
      });
      this.bindUserData();
  }
  
  //Add Usser
  onAddUser(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.adduserForm.value;
    console.log(this.adduserForm.value);
    let postparams = value;
    this.http.post('http://localhost:4200/api/UserAccount', JSON.stringify(postparams),{headers:headers})
    .map(res => res.json())
      .subscribe(data => {
      
        this.showDialog = !this.showDialog;
        this.adduserForm.reset();
        console.log(this.showDialog);
      },
      error => {
        console.log(error);
      });
  }

  editUserInfo(userid){
     
  }

  private initializeForm(){
    this.adduserForm = new FormGroup({
        department: new FormControl(null),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        emailid: new FormControl('', Validators.required),
        profileoptionRadio: new FormControl(null)
    });
  }
}
