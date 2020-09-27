import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';

import { JobService } from '../../shared/providers/job.service';
import { Job } from '../../shared/models/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeDivOpacity', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('2000ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class HomeComponent implements OnInit {

  jobs$: Observable<Job[]>;
  currentState = 'initial';
  logos = ['python.svg', 'php.svg', 'java.svg', 'javascript.svg', 'css.svg', 'html.svg'];
  
  constructor(private service: JobService) { }

  ngOnInit(): void {
      this.jobs$ = this.service.getAllJobs();
  }

  scrollToElement(element: HTMLElement): void {

    element.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
      inline: "nearest"
    });
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
