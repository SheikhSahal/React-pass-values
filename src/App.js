import React, { Component } from 'react';
import './App.css';
import Hellow from './Components/test'
import StateApp from './Components/state'
import Counter   from './Components/Counterwithsetstate'
import ParentComp from './Components/parent'

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Hellow name="sahal"> 
        <p>
          tooba also love sahal
        </p>
        </Hellow>
        <Hellow name="tooba" />
        <Hellow name="tooba sahal" /> */}

        {/* <StateApp /> */}


        {/* <Counter /> */}


        <ParentComp />
        
      </div>
    )
  }
}

export default App;
