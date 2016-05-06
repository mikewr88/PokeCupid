var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var hashHistory = require('react-router').hashHistory;
var VisitStore = require('../stores/visit_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  getInitialState: function () {
    return {trainer: TrainerStore.find(parseInt(this.props.params.trainerId))};
  },

  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirect);
    TrainerActions.fetchAllTrainers();
  },

  componentDidMount: function () {
    this.trainerListener = TrainerStore.addListener(this.getTrainer);
  },

  componentWillUnmount: function () {
    this.trainerListener.remove();
    this.sessionListener.remove();
  },

  getTrainer: function () {
    this.setState({trainer: TrainerStore.find(parseInt(this.props.params.trainerId))});
  },

  redirect: function () {
    if (!SessionStore.currentUser()){
      hashHistory.push('/');
    }
  },

  createLike: function () {
    var trainerId = this.props.params.trainerId;
    TrainerActions.createLike(SessionStore.currentUser().id, trainerId);
  },

  render: function () {
    return (
      <div id="show-page">
        <div id="show-img-like">
          <div id="show-img-container">
            <img src={this.state.trainer.image_url} className="trainer-show-img"></img>
          </div>

          <button id="like-button" onClick={this.createLike}>Like This Trainer</button>

        </div>
        <div id='show-info'>
          <div className="trainer-show-username">{this.state.trainer.username}</div>
          <div className="trainer-show-description">{this.state.trainer.description}</div>
          <div className="trainer-show-trainer-type">{this.state.trainer.trainer_type}</div>
          <div className="trainer-show-location">{this.state.trainer.location}</div>
          <div className="trainer-show-gender">{this.state.trainer.gender}</div>
        </div>

      </div>
    );
  }
});
