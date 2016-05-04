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
  trainerShow: function () {
    var trainerId = this.props.trainer.id;
    TrainerActions.createVisit(SessionStore.currentUser().id, trainerId);
    hashHistory.push("trainer/" + trainerId);
  },

  createLike: function () {
    var trainerId = this.props.trainer.id;
    TrainerActions.createLike(SessionStore.currentUser().id, trainerId);
  },

  render: function () {
    var imgUrl;
    if (this.props.trainer.image_url) {
      imgUrl = this.props.trainer.image_url;
    } else {
      imgUrl ='http://i.imgur.com/wOIqRXY.jpg';

    }
    return (
      <li className='trainer-index-item'>
        <div id="index-image-container">
          <img src={imgUrl} className='index-image' onClick={this.trainerShow}></img>
        </div>

        <br></br>
        <div id="index-item-info">
          <p>{this.props.trainer.username}</p>
          <p>From {this.props.trainer.location}</p>
          <p>{this.props.trainer.trainer_type} Trainer</p>
        </div>
        <button id="like-button" onClick={this.createLike}>Like</button>
      </li>
    );
  }

});
