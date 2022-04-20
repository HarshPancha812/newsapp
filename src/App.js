
import './App.css';

import React, { Component } from 'react';
import News from './mycomponents/News';
import Navbar from './mycomponents/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pagesize = 3;
  state = {
    progress : 0
  }
  setprogress = (progress)=>{
      this.setState({
        progress:progress,
      });
  }
  
  render() {
    
    return (
      <>
      <Router>
      
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
      <Switch>
         
          <Route key="general" exact path="/"><News setProgress={this.setprogress} category="general" country="in" pagesize={this.pagesize}/></Route>
          <Route key="business" exact path="/business"><News setProgress={this.setprogress}category="business" country="in" pagesize={this.pagesize}/></Route>

          <Route key="entertainment" exact path="/entertainment"><News setProgress={this.setprogress}category="entertainment" country="in" pagesize={this.pagesize}/></Route>
          <Route key="sports" exact path="/sports"><News setProgress={this.setprogress}category="sports" country="in" pagesize={this.pagesize}/></Route>
          <Route key="health" exact path="/health"><News setProgress={this.setprogress}category="health" country="in" pagesize={this.pagesize}/></Route>
          <Route key="science" exact path="/science"><News setProgress={this.setprogress}category="science" country="in" pagesize={this.pagesize}/></Route>
          <Route key="technology" exact path="/technology"><News setProgress={this.setprogress}category="technology" country="in" pagesize={this.pagesize}/></Route>

          
          
        </Switch>
      
      </Router>
            </>
    );
  }
}


