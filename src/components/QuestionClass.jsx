import {question} from '../clients/firebase.js'; 
import { Component } from 'react';
let database = firebase.database();
let question = database.ref("/questions");
question.once("question_text").then(displayQuestion);


class QuestionClass extends Component{
    constructor(questionObj) {
        this.question = questions.question_text;
        this.answer1 = choices[0];
        this.answer2 = choices[1];
        this.answer3 = choices[2];
        this.answer4 = choices[3];
    }
}

function cleanDataSet() {
    let cleanData = [];
  for (let i = 0; i < question.length; i++) {
      let q = new Question(question[i]);
      cleanData.push(q);
  }

  return cleanData;
}


displayQuestion = function(question_text) {
    const questions = question_text.val();
}

const formattedData = cleanDataSet();
export default formattedData;