import React, { Component } from 'react';
import '../css/App.css';
// import components
import AnswerButton from './AnswerButton';
import QuestionText from './QuestionText';
import firebase from 'clients/firebase.js';

let database = buildFirebase();
let databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = data.val();
// Do something with the questions
});



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