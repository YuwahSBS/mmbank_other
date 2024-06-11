import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-deposit',
  templateUrl: './page-deposit.component.html',
  styleUrls: ['./page-deposit.component.scss']
})
export class PageDepositComponent implements OnInit {

  activeTab: string = 'fees'; 

  constructor() { }

  ngOnInit(): void {

  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

}
