var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session_store');
var CurrentUserStateMixin = require('../mixins/current_user_state');
var SessionActions = require('../actions/client_actions/session_actions');
var hashHistory = require('react-router').hashHistory;
var TrainerStore = require('../stores/trainer_store');
var VisitStore = require('../stores/visit_store');
var LikeStore = require('../stores/like_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var TrainerIndexItem = require('./trainerIndexItem');
var Visitors = require('./visitors');


module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {trainers: [], visitors: [], likes: []};
  },
  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirect);
  },

  componentDidMount: function () {
    this.trainerListener = TrainerStore.addListener(this.trainerChange);
    this.visitorListener = VisitStore.addListener(this.visitorChange);
    this.likesListener = LikeStore.addListener(this.likesChange);
    TrainerActions.fetchAllTrainers();
    TrainerActions.fetchLikers();
    TrainerActions.fetchVisitors();
  },

  trainerChange: function () {
    this.setState({trainers: TrainerStore.all()});
  },

  visitorChange: function () {
    this.setState({visitors: VisitStore.allVisitors()});
  },

  likesChange: function () {
    this.setState({likes: LikeStore.allLikers()});
  },

  componentWillUnmount: function () {
    this.trainerListener.remove();
    this.sessionListener.remove();
    this.visitorListener.remove();
    this.likesListener.remove();
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

  goToVisitors: function () {
    hashHistory.push('/visitors');
  },

  goToLikes: function () {
    hashHistory.push('/likes');
  },

  render: function () {
    console.log(this.state.likes);
    var array = [];
    var trainers = TrainerStore.all();
    trainers.forEach(function (trainer){
       array.push(<TrainerIndexItem trainer={trainer}/>);
    });
      return (
        <div>
          <button onClick={this.handleLogOut}>Log Out</button>
          <button onClick={this.goToVisitors}>Visitors</button>
          <button onClick={this.goToLikes}>Likes</button>

          <ul className='trainer-home-ul'>
            {array}
          </ul>
        </div>
      );

  }
});
