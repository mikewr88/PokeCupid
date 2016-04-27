var SessionApiUtil = require('../../util/session_api_util');

module.exports = {
  signUp: function (user) {
    SessionApiUtil.signUp(user);
  },

  logIn: function (user) {
    SessionApiUtil.logIn(user);
  },

  fetchCurrentUser: function () {
    SessionApiUtil.fetchCurrentUser();
  },

  logOut: function () {
    SessionApiUtil.logOut();
  }
};
