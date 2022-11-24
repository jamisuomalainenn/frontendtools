import { __values } from "tslib";

export class FeedbackItem {
    question: string;
    answer: any;


    setAnswer(nr: any) {
        if (nr == 0) {
            this.answer = 'Ei arvosteltu';
        }
        else if (nr == 1) {
            this.answer = 'Huono';
        }
        else if (nr == 2) {
            this.answer = 'Ok';
        }
        else {
            this.answer = 'Hyvä';
        }

    }

    constructor(question: string) {
        this.question = question;
        this.answer = 'Ei arvosteltu';

    }

}
