import { Component, OnInit } from '@angular/core';
import { JobService } from '../../shared/providers/job.service';
import { Job } from '../../shared/models/job';
import { Observable } from 'rxjs';

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

}
