import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;

  constructor(private router: Router) {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['aluno/inicio']);
  }
}
