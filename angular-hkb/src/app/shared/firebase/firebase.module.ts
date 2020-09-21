import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
    apiKey: "AIzaSyBppCoHIN2oQU2GdMlgsn3CHNsMBv-lB14",
    authDomain: "hkbergerpage.firebaseapp.com",
    databaseURL: "https://hkbergerpage.firebaseio.com",
    projectId: "hkbergerpage",
    storageBucket: "hkbergerpage.appspot.com",
    messagingSenderId: "1061633195408",
    appId: "1:1061633195408:web:4afe30e60abd7936130715",
    measurementId: "G-NPFRHT11F3"
};

@NgModule({
    imports: [
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule, // firestore
      AngularFireAuthModule, // auth
      AngularFireStorageModule // storage
    ]
  })
  export class FirebaseModule {}