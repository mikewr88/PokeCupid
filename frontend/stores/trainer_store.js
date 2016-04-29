var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var TrainerConstants = require('../constants/trainer_constants');

var TrainerStore = new Store(AppDispatcher);

var _trainers, _trainerErrors;

TrainerStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TrainerConstants.TRAINERS_RECEIVED:
      TrainerStore.getTrainers(payload.trainers);
      break;
  }
  TrainerStore.__emitChange();

};

TrainerStore.getTrainers = function functionName(trainers) {
  console.log(trainers);
  _trainers = {};
  trainers.forEach(function (trainer) {
    _trainers[trainer.id] = trainer;
  });
};

TrainerStore.all = function () {
  var trainers = [];
  for (var id in _trainers){
    trainers.push(_trainers[id]);
  }
  return trainers;
};

TrainerStore.find = function (trainerId) {
  return Object.assign({}, _trainers[trainerId]);
};


module.exports = TrainerStore;
