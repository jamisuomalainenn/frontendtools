import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackItem } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  feedbackItemArray: Array<FeedbackItem> = [];


  constructor(fbservice: FeedbackService) {
    this.feedbackItemArray = fbservice.getData();
  }

  ngOnInit(): void {

  }

  onInputChange(event: any, fbItem: FeedbackItem) {
    fbItem.setAnswer(event.value);
  }
}