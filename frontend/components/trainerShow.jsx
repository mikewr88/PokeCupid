var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function () {
    return {trainer: TrainerStore.find(parseInt(this.props.params.trainerId))};
  },

  handleBack: function (event) {
    event.preventDefault();
    hashHistory.push("/trainer-home");
  },

  render: function () {
    return (
      <div>
        <button id="back-button" onClick={this.handleBack}>Back to Trainers</button>
        <img src={this.state.trainer.image_url} className="trainer-show-img"></img>
        <h2 className="trainer-show-username">{this.state.trainer.username}</h2>
        <h2 className="trainer-show-trainer-type">{this.state.trainer.trainer_type}</h2>
        <h2 className="trainer-show-location">{this.state.trainer.location}</h2>
        <h2 className="trainer-show-gender">{this.state.trainer.gender}</h2>

      </div>
    );
  }
});
