import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component.js'
import EditTodo from './components/edit-todo.component.js'
import TodosList from './components/todos-list.component.js'
import FormatPhone from './components/format-e164.component.js'

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className = "navbar navbar-expand-lg navbar-light bg-light">
          <a class = "navbar-brand" href = "https://codingthesmartway.com" target = "-blank">
          <img src = {logo} width = "30" height = "30" alt = "CodingTheSmartWay.com" />
          </a>
          <Link to ="/" className = "navbar-brand"> Mern-Stack App</Link>
          <div className = "collapse navbar-collapse">
            <ul className = "navbar-nav mr-auto">
              <li className = "navbar-item">
                <Link to= "/" className = "nav-link"> Todos </Link>
              </li>
              <li className = "navbar-item">
                <Link to= "/create" className = "nav-link"> Create Todo </Link>
              </li>
              <li className = "navbar-item">
                <Link to= "/codes" className = "nav-link"> Format Phone Numbers </Link>
              </li>
            </ul>
          </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/codes" component={FormatPhone} />
        </div>
      </Router>
    );
  }
}

export default App;
