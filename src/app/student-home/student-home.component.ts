import { Component, OnInit } from '@angular/core';

interface JobOpportiniy {
  enterprise: string;
  offer: string;
  description: string;
}

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css'],
})
export class StudentHomeComponent implements OnInit {
  jobOpportunities: Array<JobOpportiniy>;
  isUnchanged: boolean;

  constructor() {
    this.isUnchanged = true;
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
