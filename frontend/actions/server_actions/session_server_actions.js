var AppDispatcher = require('../../dispatcher/dispatcher');
var SessionConstants = require('../../constants/session_constants');

module.exports = {
  logIn: function (user) {
    AppDispatcher.dispatch({
        actionType: SessionConstants.LOGIN,
        user: user
    });
  },

  signUp: function (user) {
    AppDispatcher.dispatch({
        actionType: SessionConstants.SIGNUP,
        user: user
    });
  },

  logOut: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  },

  receiveErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.ERROR,
      errors: errors
    });
  }

};
