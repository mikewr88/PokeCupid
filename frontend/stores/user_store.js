var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _currentUser, _authErrors;

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {

  }
  UserStore.__emitChange();

};
module.exports = UserStore;
