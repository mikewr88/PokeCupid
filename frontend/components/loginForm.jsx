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
        <div>
          <span className='splash-header'>
            <img src="http://i.imgur.com/wOIqRXY.jpg" className='logo'></img>
            <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
            <div id='modal-button-div'>
              <button id="modal-button" onClick={this.openModal} value='logIn' >Already Have An Account?</button>
            </div>
          </span>

          <Modal isOpen={this.state.modalOpen} style={ModalStyle} onRequestClose={this.closeModal}>
            <h2>Log Into Your PokeCupid Account</h2>
            <form login-form>
              <label>Username:    <input className="input-text" type='text' valueLink={this.linkState('username')} autofocus></input>
              </label>
                <br></br>
              <label>Password:    <input className="input-text" type='password' valueLink={this.linkState('password')}></input>
              </label>
                <br></br>

              <button id='login-button' onClick={this.logInModal} value="Log In">Log In!</button>
            </form>

          </Modal>

        <form className='sign-up-form'>
          <label>Username:        <input className="input-text" type='text' valueLink={this.linkState('username')} autofocus></input>
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

          <br></br>

          <button id='auth-button' onClick={this.handleSignUp} value='signUp' >Sign Up!</button>

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
