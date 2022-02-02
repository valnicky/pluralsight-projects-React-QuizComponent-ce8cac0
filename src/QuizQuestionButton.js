import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render() {
        return (
<li>
    <button type="">{this.props.button_text}</button>
</li>
        );
    }
}

export default QuizQuestionButton