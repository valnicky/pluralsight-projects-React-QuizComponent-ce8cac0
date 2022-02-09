import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'
import './styles/quizquestion.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class QuizQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      incorrectAnswer: true
    }
  }
   handleClick(buttonText)  {
     if(buttonText === this.props.quiz_question.answer){
       this.props.showNextQuestionHandler();
        this.setState({incorrectAnswer:  false})
        console.log(`<p className="correct">That's right!!! Correct answer :) </p>`)
     }else { this.setState( {incorrectAnswer: true})
     console.log('false');
       
     }
    
  }
render(){
    return (
         <main>
        <section>
          <p>
              {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul className="list-group list-group-flush">
         { this.props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton   button_text={answer_option} key ={index} clickHandler= {this.handleClick.bind(this)} />
          )}
        
          </ul>
        </section>
        {this.state.incorrectAnswer === true ? <p className="error">Choose the correct answer please!</p> : <p className="correct">That's right!!! Correct answer :) </p> }
      </main>
    )
}
}

export default QuizQuestion