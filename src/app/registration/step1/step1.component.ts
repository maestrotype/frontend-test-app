import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  myReactiveForm: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.myReactiveForm = this.fb.group({
      uname1: ['Андрей'],
      email: [null]
    });
  }

  onSignIn(): void {
    this.myReactiveForm = this.fb.group({
      uname1: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ]
    });
  }

}
