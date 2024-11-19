import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
  
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} country="us" pageSize={12} category="general" key="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} country="us" pageSize={12} category="business" key="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} country="us" pageSize={12} category="entertainment" key="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} country="us" pageSize={12} category="health" key="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} country="us" pageSize={12} category="science" key="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} country="us" pageSize={12} category="sports" key="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} country="us" pageSize={12} category="technology" key="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App