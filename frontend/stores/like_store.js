var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var LikeConstants = require('../constants/like_constants');

var LikeStore = new Store(AppDispatcher);

var _likers= [];

LikeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKE_RECEIVED:
      LikeStore.updateLikes(payload.like);
      break;
    case LikeConstants.LIKERS_RECEIVED:
      LikeStore.receiveLikers(payload.likers);
      break;
  }
  LikeStore.__emitChange();
};


LikeStore.updateLikes = function (likers) {
  
  // _likers = likers;
};

LikeStore.receiveLikers = function (likers) {
  _likers = likers;
};

LikeStore.allLikers = function () {
  return _likers;
};

module.exports = LikeStore;
