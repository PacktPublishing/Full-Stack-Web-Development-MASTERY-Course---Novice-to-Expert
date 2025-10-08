import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  state = {progress: 0}
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} country="us" pageSize={12} category="general" key="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} country="us" pageSize={12} category="business" key="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} country="us" pageSize={12} category="entertainment" key="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} country="us" pageSize={12} category="health" key="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} country="us" pageSize={12} category="science" key="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} country="us" pageSize={12} category="sports" key="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} country="us" pageSize={12} category="technology" key="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

