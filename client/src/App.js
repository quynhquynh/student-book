import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Students from './containers/students'
import Student from './containers/student'
import New from './containers/new'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/students' component={Students} />
          <Route exact path='/students/new' component={New} />
          <Route exact path='/students/:id' component={Student} />
          <Redirect exact from='/' to='/students' />
        </Switch>
      </div>
    );
  }
}

export default App;

//students/:firstName