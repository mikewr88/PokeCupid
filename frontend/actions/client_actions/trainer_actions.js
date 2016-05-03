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

  }
};
