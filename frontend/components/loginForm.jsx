var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");
var ModalStyle = require("../constants/LoginModalConstant");
var Dropdown = require("./loginDropdown");
var UserConstants = require("../constants/user_constants");

module.exports = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  componentWillMount: function () {
    if (this.state.currentUser){
      hashHistory.push('/trainer-home');
    }
  },

  getInitialState: function () {
    return {form: 'login',
            username: 'username',
            password: 'password',
            modalOpen: false,
            location: "Pallet Town",
            trainer_type: "water",
            gender: "♂"};
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

  handleLocationDropdown: function (event) {
    event.preventDefault();
    this.setState({location: event.target.value});
  },

  handleTypeDropdown: function (event) {
    event.preventDefault();
    this.setState({trainer_type: event.target.value});
  },

  handleGenderDropdown: function (event) {
    event.preventDefault();
    this.setState({gender: event.target.value});
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
        gender: this.state.gender,
        location: this.state.location,
        trainer_type: this.state.trainer_type
    });
  },


  form: function () {

      return (
        <div className='splash-page'>
          <span className='splash-header'>
            <div id="logo-title">
              <img src="http://i.imgur.com/g2sYshv.png" className='logo'></img>
              <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
            </div>
            <div id='modal-button-div'>
              <button id="modal-button" onClick={this.openModal} value='logIn' >Already Have An Account?</button>
            </div>
          </span>

          <Modal className="login-modal" isOpen={this.state.modalOpen} style={ModalStyle} onRequestClose={this.closeModal}>
            <h2 id="login-modal-header">Log Into Your PokeCupid Account</h2>
            <form id="login-form">
              <label>Username:        <input className="input-text input-modal" type='text' valueLink={this.linkState('username')} autofocus></input>
              </label>
                <br></br>
              <label>Password:        <input className="input-text input-modal" type='password' valueLink={this.linkState('password')}></input>
              </label>
                <br></br>
              <div id="login-button-container">
                <button id='auth-button' className='login-button' onClick={this.logInModal} value="Log In">Log In!</button>
              </div>
            </form>

          </Modal>

        <form className='sign-up-form'>
          <label>Username:        <input className="input-text" type='text' valueLink={this.linkState('username')}></input>
          </label>
          <br></br>

          <label>Password:        <input className="input-text" type='password' valueLink={this.linkState('password')}></input>
          </label>
          <br></br>
          <label>Location:        <Dropdown catKey="location"
                      value={this.state.location}
                      category={UserConstants.location}
                      onChange={this.handleLocationDropdown}></Dropdown>
          </label>
          <br></br>
          <label>Trainer Type:        <Dropdown catKey="trainer_type"
                      value={this.state.trainer_type}
                      category={UserConstants.trainer_type}
                      onChange={this.handleTypeDropdown}></Dropdown>
          </label>
          <br></br>
          <label>Gender:        <Dropdown catKey="gender"
                      value={this.state.gender}
                      category={UserConstants.gender}
                      onChange={this.handleGenderDropdown}></Dropdown>
          </label>

          <br></br>
          <div id="sign-up-bt-div">
            <button id='auth-button' onClick={this.handleSignUp} value='signUp' >Sign Up!</button>
          </div>
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
