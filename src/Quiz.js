import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import './styles/quiz.css'
import 'bootstrap/dist/css/bootstrap.min.css';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    }
    showNextQuestion() {
        const pos = this.state.quiz_position +1; 
        this.setState({ quiz_position: pos });
    }
    handleResetClick() {
        this.setState({quiz_position: 1});
    }
    render() {
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;

        return ( <div className=" quiz my-5 py-5 mx-auto  text-weight-bolder d-flex justify-content-center align-content-center text-light  "> {
                (isQuizEnd === true) ? < QuizEnd  resetClickHandler = { this.handleResetClick.bind(this) } /> :  <QuizQuestion className="bg-danger"  quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}/> } </div>  );          
        }
    }

    export default Quiz