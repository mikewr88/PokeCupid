var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/client_actions/session_actions');
var TrainerActions = require('../actions/client_actions/trainer_actions');

var CurrentUserStateMixin = {
  getInitialState: function () {
    return  {
      currentUser: SessionStore.currentUser()
    };
  },

  componentWillMount: function () {
    this.sessionListener = SessionStore.addListener(this.updateCurrentUser);
    if (typeof SessionStore.currentUser()=== 'undefined'){
      SessionActions.fetchCurrentUser();
    }else {
      TrainerActions.fetchVisitors();
      TrainerActions.fetchLikers();
    }
  },

  // componentDidMount:function () {
  //   this.sessionListener = SessionStore.addListener(this.updateCurrentUser);
  //
  // },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  updateCurrentUser: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  }
};

module.exports = CurrentUserStateMixin;
