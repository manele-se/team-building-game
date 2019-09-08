import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

 class Answer extends Component {
  
   

    //show green if right answer, show red if wrong anwer
    onShowResult =(textAnswer, e)=>{
        let isRight = 'A cat has 9 lives'; 
        
        if(isRight === textAnswer ){
            //show green
            console.log(textAnswer +' green'); 
        
        }else{
            console.log(textAnswer +' red'); 
            //show red
        }
    }


    render() {
        //property to pull out
        const {textAnswer} = this.props.answer; 
        console.log("here"); 
        return (
            <div className="card card-body mb-3 p-4 col-10 offset-1">
              <div className="list-group">
                  <div
                   className="list-group"
                   onClick={this.onShowResult.bind(this, textAnswer)}>{textAnswer} </div>
              </div>
            </div>
        )
    }
}
//check the type of the prototype
Answer.propTypes ={
    textAnswer: PropTypes.object.isRequired
}

export default Answer; 