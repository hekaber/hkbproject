import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class JobService {

  constructor(private fireStore: AngularFirestore) { }

    formData: Job;

    getAllJobs() {
      
        return this.fireStore.collection('jobs').snapshotChanges();
    }

}
