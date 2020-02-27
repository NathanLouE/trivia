import React, { Component } from 'react';
import '../css/App.css';
// import components
import Answer from './Answer.jsx';
import Question from './Question.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState({count:this.state.count+1});
  }

  handleClick2(input) {
    console.log(input);
    if (input === this.props.data[this.state.count].correct_choice_index) {
      console.log ("correct")
    } else {
      console.log ("incorrect")
    }
  }

  render() {
    console.log(this.props.data);
    const q = this.props.data[this.state.count];
    return (
      <div className="app">
        <h1> <Question question={q.question_text}/> </h1>
        <div className="container">
          <div className="answer1">
            <button onClick={() => this.handleClick2(0)} className="answerButton"><Answer answer = {q.choices[0]}/></button>
            <button onClick={() => this.handleClick2(1)} className="answerButton"><Answer answer = {q.choices[1]}/></button>
          </div>
          <div className="answer2">
            <button onClick={() => this.handleClick2(2)} className="answerButton"><Answer answer = {q.choices[2]}/></button>
            <button onClick={() => this.handleClick2(3)} className="answerButton"><Answer answer = {q.choices[3]}/></button>
          </div>
          <button className="switch" onClick={() => this.handleClick()}>Click</button>
        </div>
      </div>
    );
  }
}
export default App;