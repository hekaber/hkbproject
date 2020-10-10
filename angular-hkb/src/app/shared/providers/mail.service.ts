import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  send(payload: Object) {
    console.log(payload);
  }
}
