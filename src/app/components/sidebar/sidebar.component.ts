import { Component, OnInit } from '@angular/core';

declare var $: any;
//declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


var ROUTES1: RouteInfo[] = []

console.log(localStorage.getItem("group"));

debugger


    
    var ROUTES1: RouteInfo[] = [
        { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
        { path: 'table-list', title: 'View Checklists',  icon:'content_paste', class: '' },
        { path: 'checklist-report', title: 'Approved Checklists',  icon:'bubble_chart', class: '' },
        { path: 'typography', title: 'Send Mail',  icon:'library_books', class: '' },
    
        { path: 'upgrade', title: 'Email Logs',  icon:'unarchive', class: '' },
        { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
        { path: 'master-page', title: 'MasterPage',  icon:'notifications', class: '' },
        
    ];

export var ROUTES:RouteInfo[]=ROUTES1;
console.log(ROUTES1);


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
