var TrainerServerActions = require('../actions/server_actions/trainer_server_actions');
var hashHistory = require('react-router').hashHistory;

module.exports = {
  fetchAllTrainers: function () {
    $.ajax({
      method: "GET",
      url: 'api/users',
      success: function (users) {
        TrainerServerActions.receiveAllTrainers(users);
      }

    });
  },

  fetchTrainer: function (id) {
      $.ajax({
        method: "GET",
        url: 'api/user' + id.toString(),
        success: function (trainer) {
          TrainerServerActions.receiveTrainer(trainer);
        }
      });
  },

  createVisit: function (visitor_id, visitee_id) {
    $.ajax({
      method: 'POST',
      url: 'api/visits',
      data: {visit: {visitor_id: visitor_id, visitee_id: visitee_id}},
      success: function (visit) {
        TrainerServerActions.receiveVisit(visit);
      }
    });
  },

  fetchVisitors: function () {
    $.ajax({
      method: 'GET',
      url: 'api/visits',
      success: function (visitors) {
        TrainerServerActions.receiveVisitors(visitors);
      }
    });
  }
};
