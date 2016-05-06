var AppDispatcher = require('../../dispatcher/dispatcher');
var TrainerConstants = require('../../constants/trainer_constants');
var VisitConstants = require('../../constants/visit_constants');
var LikeConstants = require('../../constants/like_constants');

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
  },

  receiveLike: function (likee_id) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKEE_RECEIVED,
      likee_id: likee_id
    });
  },

  deleteLike: function (likee_id) {
    AppDispatcher.dispatch({
      actionType:LikeConstants.REMOVE_LIKEE,
      likee_id: likee_id
    });
  },

  receiveLikers: function (likers) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKERS_RECEIVED,
      likers: likers
    });
  },

  receiveLikees: function (likees) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKEES_RECEIVED,
      likees: likees
    });
  },

  receiveSearchResults: function (trainers) {
    AppDispatcher.dispatch({
      actionType: TrainerConstants.TRAINERS_RECEIVED,
      trainers: trainers
    });

  }
};
