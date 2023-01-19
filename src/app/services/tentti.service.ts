import { Injectable } from '@angular/core';
import { TenttiItem } from '../tentti/tentti';

@Injectable({
  providedIn: 'root'
})
export class TenttiService {
  feedbackItemArray: Array<TenttiItem> = [new TenttiItem('Kysymys 1'), new TenttiItem('Kysymys 2'), new TenttiItem('Kysymys 3')];
  getData(): any {
    console.log("jeppistä");

    return this.feedbackItemArray;
  }
  constructor() { }
}
