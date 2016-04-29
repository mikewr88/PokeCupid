var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var TrainerStore = require('../stores/trainer_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var TrainerHome = require('./trainerHome');

module.exports = React.createClass({
  render: function () {
    var imgUrl ='http://i.imgur.com/wOIqRXY.jpg';
    return (
      <li className='trainer-index-item'>
        <img src={imgUrl} className='logo-test'></img>
        <br></br>
        <p>{this.props.trainer.username}</p>
      </li>
    );
  }

});
