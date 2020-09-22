import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import configData from '../../config/config.json';

const config = configData;

@NgModule({
    imports: [
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule, // firestore
      AngularFireAuthModule, // auth
      AngularFireStorageModule // storage
    ]
  })
  export class FirebaseModule {}
