import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { InterestRate } from 'app/DTO/calculate.dto';

@Component({
  selector: 'secure-term',
  templateUrl: './secure-term.component.html',
  styleUrls: ['./secure-term.component.scss']
})
export class SecureTermComponent implements OnInit {

  activeTab: string = 'fees'; 
  submitted: boolean = false;
  form !: FormGroup;
  loading: boolean = false;

  

  constructor(
    private formBuilder: FormBuilder
  ) { 
    
  }


  ngOnInit(): void {
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

 

}
