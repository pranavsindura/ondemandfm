// import 'bootstrap/dist/css/bootstrap.min.css';
const React = require('react');
const { render } = require('react-dom');
const { composeWithDevTools } = require('redux-devtools-extension');
// console.log(process.env.REACT_APP_dirbleToken);

// require('dotenv').config();
const thunk = require('redux-thunk');
// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Switch = require('react-router-dom').Switch;

// redux
const { createStore , applyMiddleware} = require('redux');
const { Provider } = require('react-redux');
const reducers = require('./reducers');
const ReduxThunk = require('redux-thunk').default;

const logAction = store => next => action =>{
  console.log(JSON.stringify(action));
  try{
    return next(action);
  }catch(e){
    console.log(e);
  }
  
};

let store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

/* Import Components */
const Station = require('./components/Station');
const ErrorPage = require('./components/ErrorPage');

render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Station}/>
        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>), document.getElementById('main'));