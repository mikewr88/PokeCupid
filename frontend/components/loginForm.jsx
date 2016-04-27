var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/session_actions');
module.exports = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  getInitialState: function () {
    return {form: 'login'};
  },

  handleSubmit: function (event) {
    event.preventDefault();
    SessionActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type='text' valueLink={this.linkState('username')}></input>
        </label>
        <label>Password:
          <input type='text' valueLink={this.linkState('password')}></input>
        </label>
        <input type='submit' value='Log In'></input>
      </form>
    );

  }
});
