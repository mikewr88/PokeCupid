var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;


module.exports = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  componentWillMount: function () {
    if (this.state.currentUser){
      hashHistory.pushState('/trainer-home');
    }
  },

  onChange: function () {
    if (this.state.currentUser){
      hashHistory.pushState('/trainer-home');
    }
  },

  componentDidMount: function () {
    SessionStore.addListener(this.onChange);
  },

  getInitialState: function () {
    return {form: 'login'};
  },

  setForm: function (value) {
    this.setState({form: value});
  },

  handleLogIn: function (event) {
    event.preventDefault();
    this.setForm(event.target.value);
    SessionActions.logIn({
        username: this.state.username,
        password: this.state.password
    });
  },

  handleSignUp: function (event) {
    event.preventDefault();
    this.setForm(event.target.value);
    SessionActions.signUp({
        username: this.state.username,
        password: this.state.password,
        gender: "M",
        location: "Kanto",
        trainer_type: "water"
    });
  },


  form: function () {

      return (
        <form >
          <label>Username:
            <input type='text' valueLink={this.linkState('username')}></input>
          </label>
          <br></br>
          <label>Password:
            <input type='password' valueLink={this.linkState('password')}></input>
          </label>
          <br></br>

          <button onClick={this.handleLogIn} value='logIn' >Log In!</button>
          <button onClick={this.handleSignUp} value='signUp' >Sign Up!</button>

        </form>
      );
  },

  render: function () {
    return (
      <div>{this.form()}</div>
    );

  }
});
