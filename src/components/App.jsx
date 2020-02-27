import React, { Component } from 'react';
import '../css/App.css';
// import components
import Answers from './Answers.jsx';
import Question from './Question.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count:this.state.count+1});
  }

  render() {
    console.log(this.props.data);
    const q = this.props.app[this.state.count];
    return (
      <div className="app">
        Trivia!
        <button  className="switch" onClick={() => this.handleClick()}>Click</button>
        <h1> <Question question={q.question_text}/> </h1>
        <div className="btnContainer">
          <div className="btnContainers">
            <button className="ansButton"><Answer answer = {q.choices[0]}/></button>
            <button className="ansButton"><Answer answer = {q.choices[1]}/></button>
          </div>
          <div className="btnContainers">
            <button className="ansButton"><Answer answer = {q.choices[2]}/></button>
            <button className="ansButton"><Answer answer = {q.choices[3]}/></button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;