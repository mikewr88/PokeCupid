var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var LikeConstants = require('../constants/like_constants');

var LikeStore = new Store(AppDispatcher);

var _likers = [];
var _likees = [];

LikeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKEE_RECEIVED:
      LikeStore.updateLikee(payload.likee_id);
      LikeStore.__emitChange();
      break;
    case LikeConstants.LIKERS_RECEIVED:
      LikeStore.receiveLikers(payload.likers);
      LikeStore.__emitChange();
      break;
    case LikeConstants.LIKEES_RECEIVED:
      LikeStore.receiveLikees(payload.likees);
      LikeStore.__emitChange();
      break;
    case LikeConstants.REMOVE_LIKEE:
      LikeStore.removeLikee(payload.likee_id);
      LikeStore.__emitChange();
      break;
  }

};


LikeStore.updateLikee = function (likee_id) {
  if (_likees.indexOf(likee_id) === -1){
    _likees.push(likee_id);
  }
};

LikeStore.receiveLikers = function (likers) {
  _likers = likers;
};

LikeStore.receiveLikees = function (likees) {
  likees.forEach(function (likee) {
    if (_likees.indexOf(likee.id) === -1){
      _likees.push(likee.id);
    }
  });
};

LikeStore.removeLikee = function (likee_id) {
  var idx = _likees.indexOf(likee_id);
  if (idx !== -1){
    _likees.splice(idx, 1);
  }
};

LikeStore.allLikers = function () {
  return _likers;
};

LikeStore.allLikees = function () {
  if (typeof _likees === 'undefined'){
    return [];
  }else {
    return _likees;

  }
};

module.exports = LikeStore;
