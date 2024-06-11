import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    confirmationCode: string = '';
    myForm: FormGroup;
    wrongPassword : boolean = false
    phoneNo : any
    input3: any;
    infowarning: boolean = false
    submitted = false;
    get f() {
      return this.myForm.controls;
    }

    constructor(private formBuilder: FormBuilder,private router: Router) { 
        this.myForm = this.formBuilder.group({
          psw: ['', [Validators.required]]
          });
    }

    ngOnInit() {
    }

      verify(){
        this.submitted = true;

        if (this.myForm.invalid) {
          return;
        }
        this.confirmationCode =  this.f['psw'].value
        let lastFourDigits = '4986'

        if (this.confirmationCode.trim() === '') {
          // If password field is empty
          this.myForm.get('psw').setErrors({ 'required': true });
        } else if (this.confirmationCode !== '4986') {
          // If password is not "3456"
          this.myForm.get('psw').setErrors({ 'incorrectPassword': true });
        } else {
          // Clear any previous errors if password is valid
          this.myForm.get('psw').setErrors(null);
          this.router.navigate(['/home'],);
          // Handle form submission
        }
    
        // if (this.confirmationCode === lastFourDigits)
        // {
        //   this.router.navigate(['/home'],);
        //   this.wrongPassword = false
        // }
        // else {
        //   this.wrongPassword = true
        //   this.infowarning = true
        //   console.log('error')
        // }
      }
}
