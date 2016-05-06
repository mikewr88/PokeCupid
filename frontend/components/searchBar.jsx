var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      query: ""
    };
  },

  queryChange: function (event) {
    event.preventDefault();
    this.setState({query: event.target.value});
    TrainerActions.queryTrainers(event.target.value);
  },

  render: function () {
    return (
      <div id='search-container'>
        <input className="search-bar" value={this.state.query} onChange={this.queryChange} placeholder="Search"></input>

      </div>
    );
  }
});
