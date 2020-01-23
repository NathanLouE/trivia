import React, { Component } from 'react';


class AnswerButton extends Component {
    constructor(props) {
    super(props);
    this.state = {answer1: "placeholder1", answer2: "placeholder2", answer3: "placeholder3", answer4: "placeholder4"}
    }

handleClick() {

}

    render () {
        return (
            <div>
                <button className="answer">{this.state.answer1}</button>
                <button className="answer">{this.state.answer2}</button>
                <button className="answer">{this.state.answer3}</button>
                <button className="answer">{this.state.answer4}</button>
            </div>
        )
    }
}



export default AnswerButton;