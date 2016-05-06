var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var VisitConstants = require('../constants/visit_constants');

var VisitStore = new Store(AppDispatcher);

var _visitors= [];

VisitStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case VisitConstants.VISIT_RECEIVED:
      VisitStore.updateVisits(payload.visit);
        VisitStore.__emitChange();
      break;
    case VisitConstants.VISITORS_RECEIVED:
      VisitStore.receiveVisitors(payload.visitors);
        VisitStore.__emitChange();
      break;
  }
};


VisitStore.updateVisits = function (visitors) {

  // _visitors = visitors;
};

VisitStore.receiveVisitors = function (visitors) {
  _visitors = visitors;
};

VisitStore.allVisitors = function () {
  return _visitors;
};

module.exports = VisitStore;
