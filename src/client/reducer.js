import { combineReducers } from 'redux';
import { LOAD_MORE } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  name: 'My name is default'
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MORE:
      return state.set('name', action.payload);
    default:
      return state;
  }
}

module.exports = reducer;
