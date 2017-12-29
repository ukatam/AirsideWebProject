import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';

export class User {
  constructor(
    public group:string,
    public email: string,
    public password: string) { }
}
 
 

@Injectable()
export class AuthenticationService {
  public authenticatedUser: any;
 

  constructor(private _router: Router, public http:Http) { }

  logout(){
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){

    let headers1 =new Headers();
    //console.log(this.checklist);
    headers1.append("Content-Type",'application/json');
    headers1.append("Accept",'application/json');
  
    let postParams={
      UM_USER_NAME :user.email,
      UM_PASSWORD :user.password
   }

    this.http.post('http://localhost:4200/api/Login',JSON.stringify(postParams),{ headers : headers1 })
    .map(res => res.json()).subscribe(data => {
    this.authenticatedUser=data;
    console.log(this.authenticatedUser);
    if(this.authenticatedUser[0].AGM_I === 2 || this.authenticatedUser[0].AGM_I === 3){
      console.log(this.authenticatedUser[0].AGM_I);
      localStorage.setItem("user", this.authenticatedUser[0].UM_FIRST_NAME);
      localStorage.setItem("group", this.authenticatedUser[0].AGM_I);
      console.log(localStorage.getItem("group"));
      // this._router.navigate(['Dashboard']);
      return true;
    }else
    {
      return false;
    }
    },
     error => {
      return false;
    });
   
    
  }

  checkCredentials(){
    if(localStorage.getItem("user") === null ){
      this._router.navigate(['Login']);
    }
  }

}
