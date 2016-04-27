var SessionServerActions = require('../actions/server_actions/session_server_actions');

module.exports = {
  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success:  function (user) {
        SessionServerActions.logIn(user);
      }
    });
  },

  signUp: function (data) {
    console.log('here');
    $.ajax({
      method: 'POST',
      url: '/api/user',
      dataType: 'json',
      data: {user: {username: data.username, password: data.password, gender: data.gender, location: data.location, trainer_type: data.trainer_type}},
      success: function (user) {
        SessionServerActions.signUp(user);
      }
    });
  },

  logIn: function (data) {
    $.ajax({
      method: "POST",
      url: '/api/session',
      data: {user: {username: data.username, password: data.password}},
      success: function (user) {
        SessionServerActions.logIn(user);
      }
    });
  },

  logOut: function () {
    $.ajax({
      method: "DELETE",
      url: '/api/session',
      success: function () {
        SessionServerActions.logOut();
      }
    });
  }
};