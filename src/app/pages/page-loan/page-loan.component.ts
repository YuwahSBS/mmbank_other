import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { InterestRate } from 'app/DTO/calculate.dto';
@Component({
  selector: 'page-loan',
  templateUrl: './page-loan.component.html',
  styleUrls: ['./page-loan.component.scss']
})
export class PageLoanComponent implements OnInit {
  activeTab: string = 'fees'; 
  submitted: boolean = false;
  form !: FormGroup;
  loading: boolean = false;

  interestRate: InterestRate[] = [
    { name: 'saving', value: 7.1 },
    { name: 'specialS_one', value: 7.5 },
    { name: 'specialS_two', value:  8.5}
];

  deposit_Type: any = [
    'Saving', 
    'Special Saving - သိန်းငါးထောင်အောက်', 
    'Special Saving - သိန်းငါးထောင်နှင့်အထက်', 
    'Special Term Deposit 1 Month',
    'Special Term Deposit 3 Month',
    'Special Term Deposit 6 Month',
  ]
  highSaving_Acc: any = ['Option1', 'Option2', 'Option3', 'Option4']

  depositType : any
  depositAmt : number
  durationMth : number
  interest_rate_to_calc : number

  final_amt : number

  principal: number; // E2
  annualInterestRate: number; // D2 (as a percentage)
  periods: number; // F2

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      depositType : ['', [Validators.required]],
      //highSavingAcc : ['', [Validators.required]],
      depositAmt: ['', [Validators.required]],
      //interestRate: ['', [Validators.required]],
      durationMth : ['', [Validators.required]],
    })

    // Initialize with some values if needed
    this.principal = 1000;
    this.annualInterestRate = 5; // 5% annual interest
    this.periods = 12; // 12 months
  }

  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  calculate(){
    this.loading = true;
    this.submitted = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    this.depositAmt = this.f['depositAmt'].value
    this.durationMth = this.f['durationMth'].value

    console.log(this.depositType, 'depositType')
    console.log(this.depositAmt, 'depositamt')
    console.log(this.durationMth, 'durationmth')

    if(this.depositType == '1: Saving'){
      this.interest_rate_to_calc = this.interestRate[0].value
    }
    else if(this.depositType == '2: Special Saving - သိန်းငါးထောင်အောက်'){
      this.interest_rate_to_calc = this.interestRate[1].value
    }
    else if(this.depositType == '3: Special Saving - သိန်းငါးထောင်နှင့်အထက်'){
      this.interest_rate_to_calc = this.interestRate[2].value
    }

    this.calculateInterest(this.depositAmt,this.interest_rate_to_calc, this.durationMth)
  }

  calculateInterest(depositAmt:number, interestRate: number, durationMth:number) {
    let interestRate_ = interestRate;
    let depositAmt_ = depositAmt;
    let durationMth_ = durationMth;

    const monthlyInterestRate = interestRate_ / 100 / 12;
    const interest = depositAmt_ * monthlyInterestRate * durationMth_;
    this.final_amt = parseFloat(interest.toFixed(2));
    console.log(this.final_amt, 'finalamt');
  }

  sendMessage() {
    this.loading = false
    setTimeout(() => {
      this.loading = false;
    }, 500);

  }

  reset(){
    this.form.reset()
    this.submitted = true
    this.final_amt = null
  }

  changedepositType(e) {
    // console.log(e.value)
    // this.deposit_Type.setValue(e.target.value, {
    //   onlySelf: true
    // })
    const selectElement = event.target as HTMLSelectElement;
    this.depositType = selectElement.value;
    console.log('Selected value:', this.depositType);
  }

  changehighSavingacc(e){
    console.log(e.value)
    this.highSaving_Acc.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
