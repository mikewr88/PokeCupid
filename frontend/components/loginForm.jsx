var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");
var ModalStyle = require("../constants/LoginModalConstant");

module.exports = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  componentWillMount: function () {
    if (this.state.currentUser){
      hashHistory.push('/trainer-home');
    }
  },

  getInitialState: function () {
    return {form: 'login', modalOpen: false};
  },

  openModal: function () {
    this.setState({modalOpen: true});
  },

  closeModal: function (event) {
    this.setState({modalOpen: false});
    
  },

  logInModal: function (event) {
    this.setState({modalOpen: false});
    this.handleLogIn(event);
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
        <div>

        <button onClick={this.openModal} value='logIn' >Already Have An Account?</button>


          <Modal isOpen={this.state.modalOpen} style={ModalStyle} onRequestClose={this.closeModal}>
            <h2>Log Into Your PokeCupid Account</h2>
            <form>
              <label>Username:
                <input type='text' valueLink={this.linkState('username')}></input>
              </label>
                <br></br>
              <label>Password:
                <input type='password' valueLink={this.linkState('password')}></input>
              </label>
                <br></br>

              <button id='login-button' onClick={this.logInModal} value="Log In">Log In!</button>
            </form>

          </Modal>

        <form >
          <label>Username:
            <input type='text' valueLink={this.linkState('username')}></input>
          </label>
          <br></br>
          <label>Password:
            <input type='password' valueLink={this.linkState('password')}></input>
          </label>
          <br></br>

          <button onClick={this.handleSignUp} value='signUp' >Sign Up!</button>

        </form>

      </div>
      );
  },

  render: function () {
    return (
      <div>{this.form()}</div>
    );

  }
});
