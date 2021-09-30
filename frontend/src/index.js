import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import User from './containers/User';
import Admin from './containers/Admin';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
   
      <BrowserRouter>
      <div>
      <nav>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink to="/admin" activeClassName="active">
            Admin
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
       
      </BrowserRouter>
 
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
