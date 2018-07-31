import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



private appLogin(){

	sessionStorage.setItem('token','15587')
	
	if (sessionStorage.getItem('token')) {
		window.location.href = 'dashboard'
		//this.router.navigate(['dashboard']);
	}
}


}
