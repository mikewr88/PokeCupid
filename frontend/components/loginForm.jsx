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
var Errors = require('./shared/errors');
var Upload = require('./shared/ImageUpload');

module.exports = React.createClass({
  mixins: [LinkedStateMixin, CurrentUserStateMixin],

  componentWillMount: function () {
    SessionActions.fetchCurrentUser();
    if (this.state.currentUser){
      hashHistory.push('/trainer-home');
    }

  },

  getInitialState: function () {
    return {form: 'login',
            errors: SessionStore.errors(),
            username: '',
            password: '',
            modalOpen: false,
            location: "Pallet Town",
            trainer_type: "Water",
            gender: "♂",
            description: '',
            image_url: null
          };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser(), errors: SessionStore.errors()});
  },

  openModal: function () {
    this.setState({modalOpen: true, username: '', password: '', errors: []});
  },

  closeModal: function (event) {
    this.setState({modalOpen: false, username: '', password: '', errors: []});
  },

  logInModal: function (event) {

    this.setState({modalOpen: false, username: '', password: ''});
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

  handleImage: function (image_url) {
    this.setState({image_url: image_url});
  },

  handleLogIn: function (event) {
    event.preventDefault();
    this.setForm(event.target.value);
    SessionActions.logIn({
        username: this.state.username,
        password: this.state.password
    });
  },

  guestLogin: function () {
    SessionActions.logIn({
      username: "guest",
      password: "password"
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
        trainer_type: this.state.trainer_type,
        image_url: this.state.image_url,
        description: this.state.description
    });
  },


  form: function () {

      if (this.state.errors.length >0) {
        var allErrors = <Errors errors={this.state.errors}/>;
        SessionStore.clearErrors();
      }


      return (
        <div className='splash-page'>
          <span className='splash-header'>
            <div id="logo-title">
              <img src="http://i.imgur.com/g2sYshv.png" className='logo'></img>
              <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
            </div>
            <div id='modal-button-div'>
              <button id="modal-button" onClick={this.guestLogin} >Log In As Guest</button>
              <button id="modal-button" onClick={this.openModal} value='logIn' >Already Have An Account?</button>
            </div>
          </span>

          <Modal className="login-modal" isOpen={this.state.modalOpen} style={ModalStyle} onRequestClose={this.closeModal}>
            {allErrors}



            <form id="login-form">

              <label id='username'>Username:        <input className="input-text input-modal username" type='text' valueLink={this.linkState('username')} autofocus></input>
              </label>
                <br></br>
              <div id="login-button-container">
                <button id='auth-button' className='login-button' onClick={this.logInModal} value="Log In">Log In!</button>
              </div>
                <br></br>
              <label id='password'>Password:        <input className="input-text input-modal password" type='password' valueLink={this.linkState('password')}></input>
              </label>

            </form>

          </Modal>


          {allErrors}
        <form className='sign-up-form'>
          <div id="tagline">Tired of Trying to Catch Em All? Join PokeCupid Today!</div>
          <br></br>
          <label>Enter a Username:       <input className="input-text" type='text' valueLink={this.linkState('username')}></input>
          </label>
          <br></br>

          <label>Enter a Password:        <input className="input-text" type='password' valueLink={this.linkState('password')}></input>
          </label>
          <br></br>
          <div>
            <label>I am a    <Dropdown catKey="gender"
                        value={this.state.gender}
                        category={UserConstants.gender}
                        onChange={this.handleGenderDropdown}></Dropdown>
            </label>

            <label>   trainer of type    <Dropdown catKey="trainer_type"
                        value={this.state.trainer_type}
                        category={UserConstants.trainer_type}
                        onChange={this.handleTypeDropdown}></Dropdown>
            </label>

            <label>    from    <Dropdown catKey="location"
                        value={this.state.location}
                        category={UserConstants.location}
                        onChange={this.handleLocationDropdown}></Dropdown>
            </label>

          </div>
          <br></br>


            <textarea rows='4' cols='50' placeholder='Add a description' className='description' valueLink={this.linkState('description')}></textarea>


          <br></br>

          <Upload setImage={this.handleImage} />
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
