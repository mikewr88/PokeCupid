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
    console.log(SessionStore.currentUser());
    TrainerActions.createVisit(SessionStore.currentUser().id, trainerId);
    hashHistory.push("trainer/" + trainerId);
  },

  render: function () {
    var imgUrl;
    if (this.props.trainer.image_url) {
      imgUrl = this.props.trainer.image_url;
    } else {
      imgUrl ='http://i.imgur.com/wOIqRXY.jpg';

    }
    return (
      <li className='trainer-index-item' onClick={this.trainerShow}>
        <div id="index-image-container">
          <img src={imgUrl} className='index-image'></img>
        </div>
        <br></br>
        <div id="index-item-info">
          <p>{this.props.trainer.username}</p>
          <br></br>
          <p>Trainer Type:{this.props.trainer.trainer_type}</p>
        </div>
      </li>
    );
  }

});
