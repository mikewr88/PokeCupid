var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var TrainerStore = require('../stores/trainer_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var TrainerIndexItem = require('./trainerIndexItem');


module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {trainers: []};
  },
  componentWillMount: function () {
    SessionStore.addListener(this.redirect);
  },

  componentDidMount: function () {
    this.trainerListener = TrainerStore.addListener(this.trainerChange);
    TrainerActions.fetchAllTrainers();
  },

  trainerChange: function () {
    this.setState({trainers: TrainerStore.all()});
  },

  componentWillUnmount: function () {
    this.trainerListener.remove();
  },

  handleLogOut: function (event) {
    event.preventDefault();
    SessionActions.logOut();
  },

  redirect: function () {
    if (!SessionStore.currentUser()){
      hashHistory.push('/');
    }
  },

  render: function () {
    var array = [];
    var trainers = TrainerStore.all();
    trainers.forEach(function (trainer){
       array.push(<TrainerIndexItem trainer={trainer}/>);
    });
      return (
        <div>
          <button onClick={this.handleLogOut}>Log Out</button>
          <ul className='trainer-home-ul'>
            {array}
          </ul>
        </div>
      );

  }
});
