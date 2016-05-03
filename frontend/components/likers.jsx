var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var hashHistory = require('react-router').hashHistory;
var LikeStore = require('../stores/like_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');

module.exports = React.createClass({
  getInitialState: function () {
    return {likers: LikeStore.allLikers()};
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
    this.setState({likers: LikeStore.allLikers()});
  },

  render: function () {
    console.log(this.state.likers);
    var LikeList = this.state.likers.map(function (liker) {
      return (<li className="liker-list-item">{liker.username}</li>);
    });
    return (
      <div>
        <h1>People that Like You!</h1>
        <br></br>
        <ul id="liker-list-container">
          {LikeList}
        </ul>
      </div>
    );
  }
});
