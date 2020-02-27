import React, { Component } from 'react';

class Question extends Component {
    render () {
        return (
            <div className="qFormat">
                {this.props.question}
            </div>
    )};
}

export default Question;