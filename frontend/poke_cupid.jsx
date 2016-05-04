var React = require('react'),
    ReactDOM = require('react-dom'),
    LoginForm = require('./components/loginForm'),
    TrainerHome = require('./components/trainerHome'),
    TrainerShow = require('./components/trainerShow'),
    Visitors = require('./components/visitors'),
    NavBar = require('./components/navBar'),
    Likes = require('./components/likers'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory,
    SessionApiUtil = require('./util/session_api_util'),
    SessionActions = require('./actions/client_actions/session_actions'),
    CurrentUserStateMixin = require('./mixins/current_user_state'),
    Modal = require("react-modal");


  var App = React.createClass({
    mixins: [CurrentUserStateMixin],
    redirectToHome: function () {
      if (this.props.location.pathname === '/' && this.state.currentUser){
        hashHistory.push('trainer-home');
      }
    },

    render: function () {
      this.redirectToHome();
      // if (this.props.location.pathname === '/'){
      //
      // }

      var trainerClass = 'basic';
      if (this.state.currentUser) {
        trainerClass = this.state.currentUser.trainer_type;
      }
      return (
        <div className={trainerClass}>
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
        <Route path='visitors' component={Visitors}/>
        <Route path='likes' component={Likes}/>

    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement("#root");
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
                    document.getElementById("root"));
  });
