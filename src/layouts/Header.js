import React from 'react';
import PropTypes from 'prop-types'; 

const Header= (props) =>{

   const newGame =(e)=>{
    e.preventDefault();
    //code to start a new game
        console.log('button clicked'); 
    }

    const createGame =(e)=>{
        e.preventDefault();
        //code to start a new game
            console.log('button clicked'); 
        }

    return (
       <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-2">
           <div className="container">
               <h1 className="title">{props.gameTitle}</h1>
               <button className="btn btn-success" onClick={newGame}>New Quiz</button>
               <button className="btn btn-warning " onClick={createGame}>Create Quiz</button>
           </div>
       </nav>
    )
}

//check the type of the prototype
Header.propTypes ={
    gameTitle: PropTypes.string.isRequired
}

export default Header; 