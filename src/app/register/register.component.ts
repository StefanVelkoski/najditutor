import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: boolean;
  tutor: boolean;
  registerCustomer: FormGroup;
  registerTutor: FormGroup;

  firstNameTutor: string;
  lastNameTutor: string;
  emailTutor: string;
  phoneTutor: number;
  passwordTutor: string;
  confirmPasswordTutor: string;
  bioTutor: string;
  professionTutor: string;
  checkboxTermsTutor: boolean;


  constructor() {
    this.customer = true;
    this.tutor  = false;
   }

  ngOnInit(): void {
    this.registerCustomer = new FormGroup({
      firstNameCustomer: new FormControl(''),
      lastNameCustomer: new FormControl(''),
      emailCustomer: new FormControl(''),
      phoneCustomer: new FormControl(''),
      passwordCustomer: new FormControl(''),
      confirmPasswordCustomer: new FormControl(''),
      checkboxTermsCustomer: new FormControl('')
    });
    this.registerTutor = new FormGroup({
      firstNameTutor: new FormControl(''),
      lastNameTutor: new FormControl(''),
      emailTutor: new FormControl(''),
      phoneTutor: new FormControl(''),
      passwordTutor: new FormControl(''),
      confirmPasswordTutor: new FormControl(''),
      bioTutor: new FormControl(''),
      professionTutor: new FormControl(''),
      checkboxTermsTutor: new FormControl('')
    });
  }

  onClickTutor(): void {
    this.customer = false;
    this.tutor = true;
  }
  onClickCustomer(): void {
    this.tutor = false;
    this.customer = true;
  }

  onSubmitCustomer(): void{
    console.log(this.registerCustomer.value);

  }
  onSubmitTutor(): void{
    console.log(this.registerTutor.value);
  }

}
