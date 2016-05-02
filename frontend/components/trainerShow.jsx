var React = require('react');
var TrainerStore = require('../stores/trainer_store');

module.exports = React.createClass({
  getInitialState: function () {
    return {trainer: TrainerStore.find(parseInt(this.props.params.trainerId))};
  },

  render: function () {
    return (
      <div>
        <h2>Hi: {this.state.trainer.username}</h2>
        
      </div>
    );
  }
});
