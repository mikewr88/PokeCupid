var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser, _authErrors;

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      SessionStore.login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      SessionStore.logout();
      break;
    case SessionConstants.ERROR:
      SessionStore.setErrors(payload.errors);
      break;
  }
  SessionStore.__emitChange();
};

SessionStore.login = function (user) {
  _currentUser = user;
  _authErrors = null;
};

SessionStore.logout = function () {
  _currentUser = null;
  _authErrors = null;
};

SessionStore.setErrors = function (errors) {
  _authErrors = errors;
};

SessionStore.errors = function () {
  if (_authErrors){
    return [].slice.call(_authErrors);
  }
};

SessionStore.currentUser = function () {
  if (_currentUser) {
    return $.extend({}, _currentUser);
  }
};

module.exports = SessionStore;
