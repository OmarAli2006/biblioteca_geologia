import React, { Fragment } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

//Importar los componentes
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
        <div>
            <Route exact path='/login' render = {props => <Login {...props} />} />
          </div>
        </Router>
        </Fragment>
    </div>
  )
}

export default App;
