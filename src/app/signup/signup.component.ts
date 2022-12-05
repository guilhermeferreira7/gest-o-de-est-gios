import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;

  constructor() {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  onSubmit() {}

  markAsEnterprise(event: any) {
    this.user.isEnterprise = event.target.checked ? true : false;
  }
}
