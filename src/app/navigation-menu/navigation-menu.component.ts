import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	$('ul.menu li').click(function(){
  		$('ul.menu li').removeClass('active');
  		$(this).addClass('active');
  	});

  }

}
