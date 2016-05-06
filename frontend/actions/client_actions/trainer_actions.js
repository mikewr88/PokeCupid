var TrainerApiUtil = require('../../util/trainer_api_util');

module.exports = {
  fetchAllTrainers: function () {
    TrainerApiUtil.fetchAllTrainers();
  },

  createVisit: function (visitor_id, visitee_id) {
    TrainerApiUtil.createVisit(visitor_id, visitee_id);
  },

  fetchVisitors: function () {
    TrainerApiUtil.fetchVisitors();
  },

  createLike: function (liker_id, likee_id) {
    TrainerApiUtil.createLike(liker_id, likee_id);
  },

  destroyLike: function (liker_id, likee_id) {
    TrainerApiUtil.destroyLike(liker_id,likee_id);
  },

  fetchLikers: function () {
    TrainerApiUtil.fetchLikers();
  },

  fetchLikees: function () {
    TrainerApiUtil.fetchLikees();
  },

  queryTrainers: function (query) {
    TrainerApiUtil.getMatchingTrainers(query);
  }
};
