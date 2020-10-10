import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private fireDatabase: AngularFireDatabase) { }

    formData: Job;

    getAllJobs(): Observable<Job[]> {
      return this.fireDatabase.list<Job>('/jobs').valueChanges();
    }
}
