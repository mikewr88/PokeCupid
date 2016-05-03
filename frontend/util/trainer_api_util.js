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
      success: function (data) {
        TrainerServerActions.receiveVisitors(data.visitors);
      }
    });
  },

  createLike: function (liker_id, likee_id) {
    $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: {like: {liker_id: liker_id, likee_id: likee_id}},
      success: function (like) {
        TrainerServerActions.receiveLike(like);
      }
    });
  },

  fetchLikers: function () {
    $.ajax({
      method: 'GET',
      url: 'api/likes',
      success: function (data) {
        TrainerServerActions.receiveLikers(data.likers);
      }
    });
  }

};
