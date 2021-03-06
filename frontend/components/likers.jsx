var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var hashHistory = require('react-router').hashHistory;
var LikeStore = require('../stores/like_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');
var TrainerIndexItem = require('./trainerIndexItem');


module.exports = React.createClass({
  getInitialState: function () {
    return {likers: LikeStore.allLikers(), likees: LikeStore.allLikees()};
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
    this.likerListener = LikeStore.addListener(this.updateLikers);
    TrainerActions.fetchLikers();
  },

  updateLikers: function () {
    this.setState({likers: LikeStore.allLikers(), likees: LikeStore.allLikees()});
  },

  componentWillUnmount: function () {
    this.likerListener.remove();
    this.sessionListener.remove();
  },

  render: function () {

    var likerArray = [];
    var likers = this.state.likers;
    var i = 0;
    likers.forEach(function (liker){
      var liked;
      if (this.state.likees.indexOf(liker.id) === -1) {
        liked = false;
      }else{
        liked= true;
      }
       likerArray.push(<TrainerIndexItem key ={i} liked={liked} trainer={liker}/>);
       i++;
    }.bind(this));


    return (
      <div>
        <h1 id='trainer-home-header'>Trainers Who Like You!</h1>
        <h1 id='visitor-like-home-header'>You Must Have Used Attract</h1>
        <ul className="trainer-home-ul">
          {likerArray}
        </ul>
      </div>
    );
  }
});
