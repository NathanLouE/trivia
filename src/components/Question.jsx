import React, { Component } from 'react';
import QuestionClass from "./QuestionClass.js";
import QuestionText from "./QuestionText";
import AnswerButton from "./AnswerButton";

class Question extends Component {
  render() {
    return (
      <div>
        {/* <QuestionText Question={Question}/> */}
        <AnswerButton />
      </div>
    );
  }
}

export default Question;
