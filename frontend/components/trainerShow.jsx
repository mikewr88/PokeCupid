var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var hashHistory = require('react-router').hashHistory;
var VisitorStore = require('../stores/visit_store');

module.exports = React.createClass({
  getInitialState: function () {
    return {trainer: TrainerStore.find(parseInt(this.props.params.trainerId))};
  },

  handleBack: function (event) {
    event.preventDefault();
    hashHistory.push("/trainer-home");
  },

  render: function () {
    console.log(VisitorStore.allVisitors());
    return (
      <div id="show-page">
        <button id="back-button" onClick={this.handleBack}>Back to Trainers</button>
        <div id="show-img-container">
          <img src={this.state.trainer.image_url} className="trainer-show-img"></img>
        </div>
        <div id='show-info'>
          <h2 className="trainer-show-username">{this.state.trainer.username}</h2>
          <h2 className="trainer-show-trainer-type">{this.state.trainer.trainer_type}</h2>
          <h2 className="trainer-show-location">{this.state.trainer.location}</h2>
          <h2 className="trainer-show-gender">{this.state.trainer.gender}</h2>
        </div>

      </div>
    );
  }
});
