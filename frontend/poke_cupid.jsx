var React = require('react'),
    ReactDOM = require('react-dom'),
    LoginForm = require('./components/loginForm'),
    TrainerHome = require('./components/trainerHome'),
    TrainerShow = require('./components/trainerShow'),
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
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path ='/' component={App}>
      <IndexRoute component={LoginForm}/>
      <Route path='trainer-home' component={TrainerHome}/>
      <Route path='trainer/:trainerId' component={TrainerShow}/>
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement("#root");
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
                    document.getElementById("root"));
  });
