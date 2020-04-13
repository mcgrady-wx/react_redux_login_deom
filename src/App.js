import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import IndexPage from './components/IndexPage'
import Nav from './components/Nav'


function App() {
  return (
     	<Router>
     		<Nav/>
     		<div className="container">
     			<Switch>
			      <Route exact path="/" component={ IndexPage }></Route>
			      <Route path="/signup" component={ SignupPage }></Route>
			      <Route path="/login" component={ LoginPage }></Route>
					</Switch>
				</div>
     	</Router>
  );
}

export default App;
