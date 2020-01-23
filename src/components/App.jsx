import React, { Component } from 'react';
import '../css/App.css';
// import components
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <QuestionText />
        <AnswerButton />      
      </div>

    );
    
  }
}

export default App;