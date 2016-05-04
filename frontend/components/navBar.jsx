var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  goToVisitors: function () {
    hashHistory.push('/visitors');
  },

  goToLikes: function () {
    hashHistory.push('/likes');
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
    return (
      <div className="nav-bar">
        <div id="logo-title" onClick={this.handleLogo}>
          <img src="http://i.imgur.com/g2sYshv.png" className='logo-nav' ></img>
          <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
        </div>
        <div id='nav-button-container'>
          <button className='nav-button' onClick={this.goToVisitors}>Visitors</button>
          <button className='nav-button' onClick={this.goToLikes}>Likes</button>
          <button className='nav-button' onClick={this.handleLogOut}>Log Out</button>

        </div>

      </div>
    );
  }
});
