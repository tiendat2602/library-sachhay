import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BooksDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { BooksConnector } from './books/BooksConnector';
import { Admin } from './admin/Admin';
import { AuthProviderImpl } from "./auth/AuthProviderImpl";


export default class App extends Component {
    render() {
      return <Provider store={ BooksDataStore }>
              <AuthProviderImpl>
                <Router>
                  <Switch>
                    <Route path="/admin" component={Admin} />
                    <Route path="/" component={BooksConnector}/>
                  </Switch>
                </Router>
              </AuthProviderImpl>
    </Provider>
  }
}