import React, { Component } from 'react';
import '../css/App.css';
// import components
import formattedData from './QuestionClass';
import AnswerButton from './AnswerButton';
import Question from './Question';
import QuestionText from './QuestionText';
import {buildFirebase} from '../clients/firebase.js';

let database = buildFirebase();
let databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = data.val();
// Do something with the questions
});



class App extends Component {

  render() {
    console.log(this.props.data);
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