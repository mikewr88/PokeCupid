var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var hashHistory = require('react-router').hashHistory;
var TrainerActions = require('../actions/client_actions/trainer_actions');
var SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  getInitialState: function () {
    return {trainer: TrainerStore.find(parseInt(SessionStore.currentUser().id))};
  },

  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirect);
    TrainerActions.fetchAllTrainers();
  },

  componentDidMount: function () {
    this.trainerListener = TrainerStore.addListener(this.getTrainer);
  },

  getTrainer: function () {
    this.setState({trainer: TrainerStore.find(parseInt(SessionStore.currentUser().id))});
  },

  redirect: function () {
    if (!SessionStore.currentUser()){
      hashHistory.push('/');
    }
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  render: function () {
    return (
      <div id="show-page">
        <div id='trainer-show-header'>
          <div className="trainer-show-username">{this.state.trainer.username}</div>
          <div className="trainer-show-gender">{this.state.trainer.gender}</div>
        </div>

        <div id="show-img-like">
          <div id="show-img-container">
            <img src={this.state.trainer.image_url} className="trainer-show-img"></img>
          </div>

        <div id='show-info'>
          <div className="trainer-show-description">About Me: {this.state.trainer.description}</div>
          <div className="trainer-show-trainer-type">Type: {this.state.trainer.trainer_type}</div>
          <div className="trainer-show-location">Hometown: {this.state.trainer.location}</div>
        </div>

      </div>

      </div>
    );

  }
});
