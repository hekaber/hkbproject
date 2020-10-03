import { Injectable } from '@angular/core';



function getWindow (): any {
  return window;
}

function getDocument (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class DomService {

  getNativeWindow(): Window {
    return getWindow();
  }

  getNativeDocument(): Document {
    return getDocument();
  }
}
