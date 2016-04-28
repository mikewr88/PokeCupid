var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;


module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],
  componentWillMount: function () {
    SessionStore.addListener(this.redirect);

  },

  handleLogOut: function (event) {
    event.preventDefault();
    SessionActions.logOut();
  },

  redirect: function () {
    if (!SessionStore.currentUser()){
      hashHistory.push('/login');
    }
  },

  // onChange: function () {
  //   if (!this.state.currentUser){
  //     hashHistory.push('/login');
  //   }
  // },

  // componentDidMount: function () {
  //   SessionStore.addListener(this.onChange);
  // },

  render: function () {

      return (
        <button onClick={this.handleLogOut}>Log Out</button>
      );

  }
});
