var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('./utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (cb) {
    this.on('change', cb);
  },
  removeChangeListener: function (cb) {
    this.removeListener('change', cb);
  }
});

AppDispatcher.register(function (payload) { 
  var action = payload.action;

  switch(action.actionType) {

  }

  return true;
});

module.exports = AppStore;