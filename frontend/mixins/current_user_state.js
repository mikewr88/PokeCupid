var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/client_actions/session_actions');
var TrainerActions = require('../actions/client_actions/trainer_actions');

module.exports = {
  getInitialState: function () {
    return  {
      currentUser: SessionStore.currentUser()
    };
  },

  componentWillMount: function () {
    SessionStore.addListener(this.updateCurrentUser);
    if (typeof SessionStore.currentUser()=== 'undefined'){
      SessionActions.fetchCurrentUser();
    }else {
      TrainerActions.fetchVisitors();
      TrainerActions.fetchLikers();
    }
  },

  updateCurrentUser: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  }
};
