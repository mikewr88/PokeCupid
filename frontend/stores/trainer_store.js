
var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var TrainerConstants = require('../constants/trainer_constants');
var SessionStore = require('./session_store');

var TrainerStore = new Store(AppDispatcher);

var _trainers, _trainerErrors;

TrainerStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case TrainerConstants.TRAINERS_RECEIVED:
      TrainerStore.getTrainers(payload.trainers);
      TrainerStore.__emitChange();
      break;
    case TrainerConstants.TRAINER_RECEIVED:
      TrainerStore.getTrainer(payload.trainer);
      TrainerStore.__emitChange();
      break;
  }
};

TrainerStore.getTrainers = function (trainers) {
  _trainers = {};
  trainers.forEach(function (trainer) {
    _trainers[trainer.id] = trainer;
  });
};

TrainerStore.getTrainer = function (trainer) {
  _trainers[trainer.id] = trainer;
};

TrainerStore.filterType = function (type) {
  var trainers = [];
  for (var id in _trainers){
    if (_trainers[id].trainer_type === type){
      trainers.push(_trainers[id]);
    }
  }
  return trainers;
};

TrainerStore.filterLocation = function (location) {
  var trainers = [];
  for (var id in _trainers){
    if (_trainers[id].location === location){
      trainers.push(_trainers[id]);
    }
  }
  return trainers;
};

TrainerStore.filterGender = function (gender) {
  var trainers = [];
  for (var id in _trainers){
    if (_trainers[id].gender === gender){
      trainers.push(_trainers[id]);
    }
  }
  return trainers;
};

TrainerStore.filterAll = function (location, gender, type) {
  var trainers = [];
  for (var id in _trainers){
    if (
          (location === _trainers[id].location || location === 'Location') &&
          (gender === _trainers[id].gender || gender === 'Gender') &&
          (type === _trainers[id].trainer_type || type === 'Type')
       ){
      trainers.push(_trainers[id]);
    }
  }
  return trainers;
};

TrainerStore.all = function () {
  var trainers = [];
  var currentUserId = SessionStore.currentUser().id;
  for (var id in _trainers){
    if (currentUserId !== _trainers[id].id){
      trainers.push(_trainers[id]);
    }
  }
  return trainers;
};

TrainerStore.find = function (trainerId) {
  if (typeof _trainers === 'undefined'){
    return {};
  }
  return Object.assign({}, _trainers[trainerId]);
};


module.exports = TrainerStore;
