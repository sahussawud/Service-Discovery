import logo from "./logo.svg";
import Navbar from "./Navbar";
import axios from "axios";
import React, { Component } from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Services from './Screens/services'
import Studentservice from './Screens/Studentservice'
import Teacherdetailservice from './Screens/Teacherdetailservice'
import Course from './Screens/Course'
import Enrollservice from './Screens/Enrollservice'
import Teacherservice from './Screens/Teacherservice'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Navbar />
        <div>
        <Switch>
          <Route exact path='/' component={Services}/>
          <Route exact path='/Studentservice' component={Studentservice}/>
          <Route exact path='/Teacherservice' component={Teacherservice}/>
          <Route exact path='/Course' component={Course}/>
          <Route exact path='/Enrollservice' component={Enrollservice}/>
          <Route exact path='/Teacherdetailservice' component={Teacherdetailservice}/>
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
