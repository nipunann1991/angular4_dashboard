import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


	constructor(private router: Router) { 
    
  }

	token: any = sessionStorage.getItem('token');
  isAdmin : boolean= false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('i am checking to see if you are logged in');

    if (this.token) { 
    	return true;

    }else{

    	this.router.navigate(['/login']); 
      return false;
    }
   
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }


  isDashboard(){

    if (this.token) {  
       return true;

    }else{ 
      return false;
      
    }
    
  }

  
 

}