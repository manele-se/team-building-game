import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

 class Question extends Component {
    render() {
        const{question, questionText}= this.props; 
        
        return (
            <div className= "row">
                <div className="jumbotron col-10 offset-1">
                    <h2 className="question">{question}</h2>
                    <p className="textQuestion">{questionText}</p>

                </div>
                
            </div>
        )
    }
}

//check the type of the prototype
Question.propTypes ={
    question: PropTypes.string.isRequired,
    questionText: PropTypes.string.isRequired
}



export default Question; 