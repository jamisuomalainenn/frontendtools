import { Component, OnInit } from '@angular/core';
import { FeedbackItem } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  /*title = "questions";
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 3;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  thickInterval = 1;
*/



  /*
    questionValue() {
      if (this.value == 0) {
        this.answer = 'Vastaa kysymykseen';
      }
      else if (this.value = 1) {
        this.answer = 'Välttävä';
      }
      else if (this.value == 2) {
        this.answer = 'Hyvä';
      }
      else {
        this.answer = 'Erinomainen';
      }
    }
  */
  //kysymys: string[] =
  //['Kysymys 1', 'Kysymys 2', 'Kysymys 3'];
  user: any;
  answer: string = '';

  feedbackItemArray: Array<FeedbackItem> = [];
  constructor() {
    this.feedbackItemArray = [
      new FeedbackItem("Q1"),
      new FeedbackItem("Q2"),
      new FeedbackItem("Q3")
    ];
    /* this.user = {
      question: ['Question 1', 'Question 2', 'Question 3']
    }*/
  }

  ngOnInit(): void {
  }

  onInputChange(feedbackEvent: any, fbItem: FeedbackItem) {
    fbItem.setAnswer(feedbackEvent.value);
  }
}