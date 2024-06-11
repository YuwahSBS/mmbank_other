import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.scss']
})
export class PersonalLoanComponent implements OnInit {

  activeTab: string = 'Personal';
  isLoading = false 

  constructor() { }

  ngOnInit(): void {

  }

  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 1000 );
  }

  selectTab(tab: string): void {
    this.load()
    this.activeTab = tab;
  }

}
