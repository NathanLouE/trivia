import React, { Component } from 'react';


class AnswerButton extends Component {
    constructor(props) {
    super(props);
    }
    render () {
        return (
            <div>
                <button className="answer">{this.props.correct}</button>
                if (this.props.correct) {
                    return (<h1>{this.props.correct}</h1>);
                }
            </div>
        )
    }
}



export default AnswerButton;