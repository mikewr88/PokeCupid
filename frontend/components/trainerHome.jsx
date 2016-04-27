var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;


module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],
  componentWillMount: function () {
    if (!this.state.currentUser){
      hashHistory.pushState('/login');
    }
  },

  handleLogOut: function (event) {
    event.preventDefault();
    SessionActions.logOut();
  },

  onChange: function () {
    if (!this.state.currentUser){
      hashHistory.pushState('/login');
    }
  },

  componentDidMount: function () {
    SessionStore.addListener(this.onChange);
  },

  render: function () {

      return (
        <button onClick={this.handleLogOut}>Log Out</button>
      );

  }
});
