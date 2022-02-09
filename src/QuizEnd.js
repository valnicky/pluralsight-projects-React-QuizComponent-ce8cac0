import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class QuizEnd extends Component {
         handleResetClick ()  {
        this.props.resetClickHandler();
    }
    render() {
   
        return (
            <div>
                <p className="h4">Thanks for playing!</p>
                 <a href=''  onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd