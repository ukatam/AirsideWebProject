import { Component, OnInit } from '@angular/core';
import { AuthenticationService,User } from 'app/authentication.service';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public user: any={
    'email':'',
    'password':''
  };
  public errorMsg = '';
  constructor( private _service:AuthenticationService) { }
  login() {
    if(!this._service.login(this.user)){
        this.errorMsg = 'Failed to login';
    }
 
  }
}
