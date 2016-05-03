var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');
var hashHistory = require('react-router').hashHistory;
var VisitStore = require('../stores/visit_store');
var TrainerActions = require('../actions/client_actions/trainer_actions');

module.exports = React.createClass({
  getInitialState: function () {
    console.log(VisitStore.allVisitors());
    return {visitors: VisitStore.allVisitors()};
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
    TrainerActions.fetchVisitors();
  },

  updateVisitors: function () {
    this.setState({visitors: VisitStore.allVisitors()});
  },

  render: function () {
    var VisitList = this.state.visitors.map(function (visitor) {
      return (<li className="visitor-list-item">{visitor.username}</li>);
    });
    return (
      <div>
        <h1>Visitors to Your Page!</h1>
        <br></br>
        <ul id="visit-list-container">
          {VisitList}
        </ul>
      </div>
    );
  }
});
