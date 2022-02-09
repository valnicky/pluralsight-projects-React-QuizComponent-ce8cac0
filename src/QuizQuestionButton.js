import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/quizquestionbutton.css'
class QuizQuestionButton extends Component {
     handleClick () {this.props.clickHandler(this.props.button_text)}
     
    render() {
    
        return (
            <li className="list-group-item mb-2">
                <button className="btn btn-sm" type="text" onClick= {this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        );
    }
}

export default QuizQuestionButton