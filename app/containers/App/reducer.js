// import { LOCATION_CHANGE } from 'react-router-redux';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: true,
  error: false,
  data: fromJS({}),
  config: fromJS(__CONFIG__), // eslint-disable-line no-undef
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return state
        .set('data', fromJS(action.data))
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('error', true);
    default:
      return state;
  }
}

export default appReducer;
