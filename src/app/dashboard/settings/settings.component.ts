import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	ckeditorContent: string = '<p>Some Text Here</p>';
	ckeConfig: any;

  constructor() { }

  ngOnInit() {

  	$('document').ready(function(){
  	$('.menu .item')
  .tab()
;
  	});

  	 this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'justify,link,basicstyles',
      forcePasteAsPlainText: true,

    };
  }

}
