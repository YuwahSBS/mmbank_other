import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-loan',
  templateUrl: './page-loan.component.html',
  styleUrls: ['./page-loan.component.scss']
})
export class PageLoanComponent implements OnInit {
  activeTab: string = 'fees'; 

  constructor() { }

  ngOnInit(): void {

  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

}
