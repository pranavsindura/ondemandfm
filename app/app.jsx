// require( 'bootstrap/dist/css/bootstrap.min.css');
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
const NavBar = require('./components/NavBar');
const About = require('./components/About');
const Home = require('./components/Home');
const Popular = require('./components/Popular');

render((
  <Provider store={store}>
    <BrowserRouter>
    <div>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Station}/>
        <Route exact path="/popular" component={Popular}/>
        <Route exact path="/about" component={About}/>
        <Route component={ErrorPage}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('main'));