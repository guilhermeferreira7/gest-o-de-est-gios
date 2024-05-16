import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { TJobOffer } from '../Types';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css'],
})
export class HomeStudentComponent implements OnInit {
  jobOpportunities: Array<TJobOffer>;
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const id: number = this.route.snapshot.params['id'];

    this.userService.getById(id).subscribe((res) => {
      this.user = res;
    });

    this.jobOpportunities = [
      {
        enterprise: 'Empresa X',
        offer: 'Vaga para X',
        description: 'Estamos contratando para...',
      },
      {
        enterprise: 'Empresa Y',
        offer: 'Vaga para Y',
        description: 'Contratamos estagiários para...',
      },
      {
        enterprise: 'Empresa Z',
        offer: 'Vaga para Z',
        description: 'Vagas abertas para estagiários...',
      },
    ];
  }

  ngOnInit(): void {}
}
