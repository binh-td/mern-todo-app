import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodosList from './components/TodosList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

class App extends Component {

  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="https://www.google.com/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Todos List</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Add Todo</Link>
                </li>  
              </ul>
            </div>  
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
