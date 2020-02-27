import React, { Component } from 'react';

class Question extends Component {
    render () {
        return (
            <div className="question">
                {this.props.question}
            </div>
    )};
}

export default Question;