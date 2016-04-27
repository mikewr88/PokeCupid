var React = require('react'),
    ReactDOM = require('react-dom'),
    LoginForm = require('./components/loginForm'),
    TrainerHome = require('./components/trainerHome'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory;


  var App = React.createClass({
    render: function () {
      return (
        <div>
          <h1>PokeCupid</h1>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path ='/' component={App}>
      <Route path='trainer-home' component={TrainerHome}/>
      <Route path='login' component={LoginForm}/>
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
                    document.getElementById("root"));
  });
