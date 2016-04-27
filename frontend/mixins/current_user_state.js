var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/client_actions/session_actions');

module.exports = {
  getInitialState: function () {
    return  {
      currentUser: SessionStore.currentUser(),
      errors: SessionStore.errors()
    };
  },

  componentDidMount: function () {
    SessionStore.addListener(this.updateCurrentUser);
    if (typeof SessionStore.currentUser()=== 'undefined'){
      SessionActions.fetchCurrentUser();
    }
  },

  updateCurrentUser: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  }
};
