export class FeedbackItem {
    questions: string;
    answer: any;
    answerList: Array<string>;
    user: any;

    constructor(question: string, answer?: string) {
        this.questions = question;
        this.answer = answer;
        this.answerList = ['Ei arvosteltu', 'Huono', 'Ok', 'Hyvä'];
        this.user = {
            question: ['Kysymys 1', 'Kysymys 2', 'Kysymys 3']
        }
    }

    //let q: FeedbackItem[] = [new FeedbackItem('Kysymys 1', 1), new FeedbackItem('Kysymys 1', 2), new FeedbackItem('Kysymys 1', 3)];

    setAnswer(value: number) {
        this.answer = this.answerList[value];
    }
}