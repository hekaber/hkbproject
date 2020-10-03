import { Component, OnInit, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';

import { JobService } from '../../shared/providers/job.service';
import { DomService } from '../../shared/providers/dom.service';
import { Job } from '../../shared/models/job';

const areas = 'top,skills,job_cards';

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

  @ViewChildren(areas) sections: QueryList<ElementRef>;

  jobs$: Observable<Job[]>;
  currentSkillState = 'initial';
  topButtonState = 'initial';
  logos = ['python.svg', 'php.svg', 'java.svg', 'javascript.svg', 'css.svg', 'html.svg'];
  private _window: Window;
  private _document: Document;
  
  constructor(
    private jobService: JobService,
    private domService: DomService
  ) {
    
    this._window = domService.getNativeWindow();
    this._document = domService.getNativeDocument();
  }

  ngOnInit(): void {
      this.jobs$ = this.jobService.getAllJobs();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const activeSection = this.sections.toArray().findIndex(section => this.isElementInViewport(section.nativeElement));
    console.log(areas.split(',')[activeSection]);
    if (this._window.pageYOffset == 0) {

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
    this._window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  private resetStates(): void {
    this.topButtonState = 'initial';
    this.currentSkillState = 'initial';
  }

  private isElementInViewport(el: HTMLElement): boolean {

    var rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (this._window.innerHeight - 60 || this._document.documentElement.clientHeight - 60) &&
      rect.left <= (this._window.innerWidth || this._document.documentElement.clientWidth)
    );
  }
}
