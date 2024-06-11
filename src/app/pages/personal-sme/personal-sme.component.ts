import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-sme',
  templateUrl: './personal-sme.component.html',
  styleUrls: ['./personal-sme.component.scss']
})
export class PersonalSmeComponent implements OnInit {

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
