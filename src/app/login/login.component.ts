import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;

  constructor(private router: Router) {
    this.user = { email: '', password: '' };
  }

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['aluno/inicio']);
  }
}
