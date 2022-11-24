import { Injectable } from '@angular/core';
import { FeedbackItem } from '../feedback/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackItemArray: Array<FeedbackItem> = [new FeedbackItem('Kysymys 1'), new FeedbackItem('Kysymys 2'), new FeedbackItem('Kysymys 3')];
  getData(): any {
    console.log("jeppistä");

    return this.feedbackItemArray;
  }
  constructor() {

  }
}
