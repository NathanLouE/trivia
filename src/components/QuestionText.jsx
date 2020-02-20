import React, { Component } from 'react';

class QuestionText extends Component {
    constructor(props) {
        super(props);
        this.state = {question: "placeholder question"}
        }
    render () {
        return (
            <div>
                {this.props.question}
            </div>
        )
    }
}

export default QuestionText;