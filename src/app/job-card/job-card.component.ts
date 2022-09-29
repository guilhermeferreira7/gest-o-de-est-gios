import { Component, OnInit, Input } from '@angular/core';
import { TJobOffer } from '../Types';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent implements OnInit {
  isUnchanged: boolean;
  @Input()
  job!: TJobOffer;

  constructor() {
    this.isUnchanged = true;
  }

  ngOnInit(): void {}
}
