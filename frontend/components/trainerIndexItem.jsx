var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var TrainerStore = require('../stores/trainer_store');
var LikeStore = require('../stores/like_store');
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

  destroyLike: function () {
    var trainerId = this.props.trainer.id;
    TrainerActions.destroyLike(SessionStore.currentUser().id, trainerId);
  },

  render: function () {
    var imgUrl;
    if (this.props.trainer.image_url) {
      imgUrl = this.props.trainer.image_url;
    } else {
      imgUrl ='http://i.imgur.com/wOIqRXY.jpg';
    }
    var likeButton;
    if (this.props.liked === false) {
      likeButton = (<img src="http://i.imgur.com/g2sYshv.png" title="Like" onClick={this.createLike} className='like-button'></img>);
    }else{
      likeButton = (<img src="http://i.imgur.com/g2sYshv.png" title="Unlike" onClick={this.destroyLike} className='dislike-button'></img>);
    }

    var badge;

    switch (this.props.trainer.trainer_type) {
      case 'Normal':
        badge = 'http://i.imgur.com/WxplXBq.png';
        break;
      case 'Water':
        badge = 'http://i.imgur.com/d37HDQg.png';
        break;
      case 'Fire':
        badge = 'http://i.imgur.com/4Erfk81.png';
        break;
      case 'Electric':
        badge = 'http://i.imgur.com/eyJRoHW.png';
        break;
      case 'Grass':
        badge = 'http://i.imgur.com/95CFGQN.png';
        break;
      case 'Ice':
        badge = 'http://i.imgur.com/rKBDZ0v.png';
        break;
      case 'Fighting':
        badge = 'http://i.imgur.com/lpCQMmv.png';
        break;
      case 'Poison':
        badge = 'http://i.imgur.com/7jNtN91.png';
        break;
      case 'Ground':
        badge = 'http://i.imgur.com/sPoyzlm.png';
        break;
      case 'Flying':
        badge = 'http://i.imgur.com/k79R335.png';
        break;
      case 'Psychic':
        badge = 'http://i.imgur.com/PIKkfqg.png';
        break;
      case 'Bug':
        badge = 'http://i.imgur.com/xA2wQvB.png';
        break;
      case 'Rock':
        badge = 'http://i.imgur.com/o03co7e.png';
        break;
      case 'Ghost':
        badge = 'http://i.imgur.com/D3GC1GF.png';
        break;
      case 'Dragon':
        badge = 'http://i.imgur.com/4jvkzw9.png';
        break;

    }

    return (

      <li className='trainer-index-item' id={this.props.trainer.trainer_type}>
        <div className='card-name'>
          <p>{this.props.trainer.username}</p>
          <img id='badge' src={badge}></img>
        </div>
          {likeButton}
        <div id="index-image-container">
          <img src={imgUrl} className='index-image' onClick={this.trainerShow}></img>
        </div>

        <br></br>
        <div className='card-info'>
          <div id="index-item-info">

            <p>{this.props.trainer.gender}</p>
            <p>From {this.props.trainer.location}</p>
            <p>{this.props.trainer.trainer_type} Trainer</p>
          </div>
        </div>

      </li>
    );
  }

});
