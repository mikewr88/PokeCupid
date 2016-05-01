var AppDispatcher = require('../../dispatcher/dispatcher');
var TrainerConstants = require('../../constants/trainer_constants');


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
  }
};
