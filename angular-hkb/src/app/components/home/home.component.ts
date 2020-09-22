import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { JobService } from '../../shared/providers/job.service';
import { Job } from '../../shared/models/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs$: Observable<Job[]>;

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
  }
}
