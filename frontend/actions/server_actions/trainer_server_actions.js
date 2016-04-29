var AppDispatcher = require('../../dispatcher/dispatcher');
var TrainerConstants = require('../../constants/trainer_constants');


module.exports = {
  receiveAllTrainers: function (trainers) {
    AppDispatcher.dispatch({
      actionType: TrainerConstants.TRAINERS_RECEIVED,
      trainers: trainers
    });

  }
};
