var React = require('react'),
    ReactDOM = require('react-dom'),
    LoginForm = require('./components/loginForm'),
    TrainerHome = require('./components/trainerHome'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory,
    SessionApiUtil = require('./util/session_api_util'),
    CurrentUserStateMixin = require('./mixins/current_user_state'),
    Modal = require("react-modal");


  var App = React.createClass({
    mixins: [CurrentUserStateMixin],

    render: function () {
      return (
        <div>
          <img src="http://i.imgur.com/wOIqRXY.jpg" className='logo'></img>
          <h1>PokeCupid</h1>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path ='/' component={App}>
      <Route path='login' component={LoginForm}/>
      <Route path='trainer-home' component={TrainerHome}/>

    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement("#root");
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
                    document.getElementById("root"));
  });
