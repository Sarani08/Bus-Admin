import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login/login'
import PropTypes from 'prop-types';

//import { black } from 'material-ui/styles/colors';
import { white } from 'material-ui/styles/colorManipulator';
//import { grey100 } from 'material-ui/styles/colors';
import { grey600 } from 'material-ui/styles/colorManipulator';


function App() {

 
  return (
    <Router>
      <div style={appstyle}>
        <Login/>
      </div>
    </Router>
  );
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

const appstyle ={
  backgroundColor: grey600,
  color: white
}
 
export default App;
