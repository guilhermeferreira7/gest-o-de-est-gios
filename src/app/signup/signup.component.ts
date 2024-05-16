import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService.create(this.user).subscribe((res) => {
      if (this.user.isEnterprise) {
        this.router.navigate([`empresa/${this.user.id}/inicio`]);
      } else {
        this.router.navigate([`aluno/${this.user.id}/inicio`]);
      }
    });
  }

  markAsEnterprise(event: any) {
    this.user.isEnterprise = event.target.checked ? true : false;
  }
}
