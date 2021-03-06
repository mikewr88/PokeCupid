var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var LikeStore = require('../stores/like_store');
var hashHistory = require('react-router').hashHistory;
var VisitStore = require('../stores/visit_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var TrainerIndexItem = require('./trainerIndexItem');

module.exports = React.createClass({
  getInitialState: function () {
    return {visitors: VisitStore.allVisitors(), likes: [], likees: LikeStore.allLikees()};
  },

  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirect);
  },

  redirect: function () {
    if (!SessionStore.currentUser()){
      hashHistory.push('/');
    }
  },

  componentDidMount: function () {
    this.visitorListener = VisitStore.addListener(this.updateVisitors);
    this.likesListener = LikeStore.addListener(this.likesChange);
    TrainerActions.fetchLikers();

    TrainerActions.fetchVisitors();
  },


  likesChange: function () {
    this.setState({likes: LikeStore.allLikers(), likees: LikeStore.allLikees()});
  },

  componentWillUnmount: function () {
    this.likesListener.remove();
    this.sessionListener.remove();
    this.visitorListener.remove();
  },


  updateVisitors: function () {
    this.setState({visitors: VisitStore.allVisitors()});
  },

  render: function () {

    var visitorArray = [];
    var visitors = this.state.visitors;
    var i = 0;
    visitors.forEach(function (visitor){
      var liked;
      if (this.state.likees.indexOf(visitor.id) === -1) {
        liked = false;
      }else{
        liked= true;
      }
       visitorArray.push(<TrainerIndexItem key = {i} liked={liked} trainer={visitor}/>);
       i++;
    }.bind(this));


    return (
      <div>
        <h1 id='trainer-home-header'>Visitors To Your Page!</h1>
        <h1 id='visitor-like-home-header'>Someone Thinks You're a Catch</h1>
        <ul className="trainer-home-ul">
          {visitorArray}
        </ul>
      </div>
    );
  }
});
