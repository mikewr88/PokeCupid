var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var VisitStore = require('../stores/visit_store');
var LikeStore = require('../stores/like_store');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var TrainerActions = require('../actions/client_actions/trainer_actions');

module.exports = React.createClass({

  getInitialState: function () {
    return {numVisitors: 0, numLikes: 0, currentUser: null};
  },

  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.getCurrentUser);
    SessionActions.fetchCurrentUser();
  },

  componentDidMount: function () {
    this.visitorListener = VisitStore.addListener(this.getVisitors);
    this.likesListener = LikeStore.addListener(this.getLikes);
    TrainerActions.fetchLikers();
    TrainerActions.fetchVisitors();
  },

  componentWillUnmount: function () {
    this.visitorListener.remove();
    this.likesListener.remove();
    this.sessionListener.remove();
  },

  getCurrentUser: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  getVisitors: function () {
    this.setState({numVisitors: VisitStore.allVisitors().length});

  },

  getLikes: function () {
    this.setState({numLikes: LikeStore.allLikers().length});
  },

  goToVisitors: function () {
    hashHistory.push('/visitors');
  },

  goToLikes: function () {
    hashHistory.push('/likes');
  },

  goToProfile: function () {
    hashHistory.push('/profile');
  },

  handleLogOut: function (event) {
    event.preventDefault();
    SessionActions.logOut();
  },

  handleLogo: function (event) {
    event.preventDefault();
    hashHistory.push('trainer-home');
  },

  render: function () {
    var profile;
    if (SessionStore.currentUser()){
      profile = (
        <div id='navbar-profile'>
          <img id='navbar-badge' src={SessionStore.currentUser().image_url}></img>
          <div id='profile-buttons'>
            <button className='nav-button' onClick={this.handleLogOut}>Log Out</button>
            <button className='nav-button' onClick={this.goToProfile}>Profile</button>

          </div>

        </div>
      );
    }
    return (
      <div className="nav-bar">
        <div id="logo-title" onClick={this.handleLogo}>
          <img src="http://i.imgur.com/g2sYshv.png" className='logo-nav' ></img>
          <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
        </div>
        <div id='nav-button-container'>
          <button className='nav-button' onClick={this.goToVisitors}>Visitors
            <div className="bubble">{this.state.numVisitors}</div>
          </button>
          <button className='nav-button' onClick={this.goToLikes}>Likes
            <div className="bubble">{this.state.numLikes}</div>
          </button>

          {profile}
        </div>

      </div>
    );
  }
});
