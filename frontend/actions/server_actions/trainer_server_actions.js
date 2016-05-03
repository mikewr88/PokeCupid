var AppDispatcher = require('../../dispatcher/dispatcher');
var TrainerConstants = require('../../constants/trainer_constants');
var VisitConstants = require('../../constants/visit_constants');

module.exports = {
  receiveAllTrainers: function (trainers) {
    AppDispatcher.dispatch({
      actionType: TrainerConstants.TRAINERS_RECEIVED,
      trainers: trainers
    });

  },

  receiveTrainer: function (trainer) {
    AppDispatcher.dispatch({
      actionType: TrainerConstants.TRAINER_RECEIVED,
      trainer: trainer
    });
  },

  receiveVisit: function (visit) {
    AppDispatcher.dispatch({
      actionType: VisitConstants.VISIT_RECEIVED,
      visit: visit
    });
  },

  receiveVisitors: function (visitors) {
    AppDispatcher.dispatch({
      actionType: VisitConstants.VISITORS_RECEIVED,
      visitors: visitors
    });
  }
};
