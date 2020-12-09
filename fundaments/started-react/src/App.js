import './App.css';
import React from 'react';

//formas  de criar componete react


function AppFuncional(){
  return (
    <h1>My name is Renan moura</h1>
  );
}

class App extends React.Component{

  state = {
    name:'Renan moura'
  }


  render(){
    return(
    <h1>What is your name?{this.state.name}</h1>
    )
  }
}

export default App;
