var React = require('react'),
    ReactDOM = require('react-dom'),
    LoginForm = require('./components/loginForm'),
    TrainerHome = require('./components/trainerHome'),
    TrainerShow = require('./components/trainerShow'),
    Visitors = require('./components/visitors'),
    NavBar = require('./components/navBar'),
    Footer = require('./components/footer'),
    Likes = require('./components/likers'),
    Profile = require('./components/profile'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory,
    SessionApiUtil = require('./util/session_api_util'),
    SessionActions = require('./actions/client_actions/session_actions'),
    CurrentUserStateMixin = require('./mixins/current_user_state'),
    Modal = require("react-modal"),
    SessionStore = require('./stores/session_store');


  var App = React.createClass({
    mixins: [CurrentUserStateMixin],
    redirectToHome: function () {

      if (this.props.location.pathname === '/' && SessionStore.currentUser()){

        hashHistory.push('trainer-home');
      }
    },

    componentWillUpdate: function () {
      this.redirectToHome();
    },

    render: function () {
      var footer;
      var AuthOrNav;
      if (this.props.location.pathname === '/'){
        AuthOrNav = (<LoginForm />);
        footer = (<Footer/>);
      }else {
        AuthOrNav = (<NavBar />);
      }

      var trainerClass = 'basic';
      if (this.state.currentUser) {
        trainerClass = this.state.currentUser.trainer_type;
      }
      return (
        <div className={trainerClass}>
          {AuthOrNav}
          {this.props.children}
          {footer}
        </div>
      );
    }
  });

  var routes = (
    <Route path ='/' component={App}>

        <Route path='trainer-home' component={TrainerHome}/>
        <Route path='trainer/:trainerId' component={TrainerShow}/>
        <Route path='visitors' component={Visitors}/>
        <Route path='likes' component={Likes}/>
        <Route path='profile' component={Profile}/>
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement("#root");
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
                    document.getElementById("root"));
  });
