var React = require('react');
var ReactDOM = require('react-dom');
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
var FilterConstants = require('../constants/filter_constants');
var Dropdown = require('./loginDropdown');
var Search = require('./searchBar');


module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {trainers: [], visitors: [], likes: [], likees: LikeStore.allLikees(), location: 'Location', gender: 'Gender', trainer_type: 'Type'};
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
    this.setState({likes: LikeStore.allLikers(), likees: LikeStore.allLikees()});
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

  handleTypeDropdown: function (event) {
    event.preventDefault();
    this.setState({trainer_type: event.target.value});
    this.setState({trainers: TrainerStore.filterAll(this.state.location, this.state.gender, event.target.value)});
  },

  handleGenderDropdown: function (event) {
    event.preventDefault();
    this.setState({gender: event.target.value});
    this.setState({trainers: TrainerStore.filterAll(this.state.location, event.target.value, this.state.trainer_type)});
  },

  handleLocationDropdown: function (event) {
    event.preventDefault();
    this.setState({location: event.target.value});
    this.setState({trainers: TrainerStore.filterAll(event.target.value, this.state.gender, this.state.trainer_type)});
  },

  handleAll: function (event) {
    event.preventDefault();

    this.setState({trainers: TrainerStore.all(), location: 'Location', gender: 'Gender', trainer_type: 'Type' });

  },



  render: function () {


    var trainerArray = [];
    var trainers = this.state.trainers;
    trainers.forEach(function (trainer){
      var liked;
      if (this.state.likees.indexOf(trainer.id) === -1) {
        liked = false;
      }else{
        liked= true;
      }
       trainerArray.push(<TrainerIndexItem liked={liked} trainer={trainer}/>);
    }.bind(this));
      return (
        <div>

          <div id="trainer-home-container">
            <div id="trainer-home-header">Browse Trainers</div>
            <Search />
            <div id='filter-container'>
              <button id="all-trainer-button" onClick={this.handleAll}>All Trainers</button>
                <Dropdown catKey="gender"
                          value={this.state.gender}
                          category={FilterConstants.gender}
                          onChange={this.handleGenderDropdown}
                          sel={this.state.gender}></Dropdown>


                <Dropdown catKey="trainer_type"
                          value={this.state.trainer_type}
                          category={FilterConstants.trainer_type}
                          onChange={this.handleTypeDropdown}
                          sel={this.state.trainer_type}></Dropdown>


                <Dropdown catKey="location"
                          value={this.state.location}
                          category={FilterConstants.location}
                          onChange={this.handleLocationDropdown}
                          sel={this.state.location}></Dropdown>

            </div>
          </div>

          <ul className='trainer-home-ul'>
            {trainerArray}
          </ul>
        </div>
      );

  }
});
