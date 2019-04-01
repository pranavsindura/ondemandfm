const React = require('react');
const Link = require('react-router-dom').Link;
// const VoteContainer = require('../containers/VoteContainer');

/* the main page for the about route of this app */
class ErrorPage extends React.Component{
  render(){
  return (
    <div className="text-center"> 
      <div className="display-1">ERROR 404</div>
      <div>Page Not Found</div>
      <Link  to="/">Go Home</Link>
    </div>
  );
  }
}

module.exports = ErrorPage;