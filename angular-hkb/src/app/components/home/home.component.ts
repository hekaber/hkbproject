import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';

import { JobService } from '../../shared/providers/job.service';
import { WindowService } from '../../shared/providers/window.service';
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
  currentSkillState = 'initial';
  topButtonState = 'initial';
  logos = ['python.svg', 'php.svg', 'java.svg', 'javascript.svg', 'css.svg', 'html.svg'];
  private mWindow;
  
  constructor(
    private jobService: JobService,
    private windowRef: WindowService
  ) {
    
    this.mWindow = windowRef.getNativeWindow();
  }

  ngOnInit(): void {
      this.jobs$ = this.jobService.getAllJobs();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    if (this.mWindow.pageYOffset == 0) {
      this.resetStates();
    }
  }

  scrollToElement(element: HTMLElement): void {

    element.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
      inline: "nearest"
    });

    if (element.classList.contains('skills')) {
      this.currentSkillState = this.currentSkillState === 'initial' ? 'final' : 'initial';
      this.topButtonState = this.topButtonState === 'initial' ? 'final' : 'initial';
    }

    
  }

  scrollToTop(): void {
    this.topButtonState = 'initial';
    this.mWindow.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  private resetStates(): void {
    this.topButtonState = 'initial';
    this.currentSkillState = 'initial';
  }
}
