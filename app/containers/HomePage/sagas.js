import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import {
  LOAD_DATA,
} from 'containers/App/constants';

import {
  selectConfig,
} from 'containers/App/selectors';

import {
  dataLoaded,
  dataLoadingError,
} from 'containers/App/actions';

import request from 'utils/request';

export function* loadData() {
  const config = yield select(selectConfig());
  const url = `${config.s3Url}${config.dataset}/${config.dataset}.dataset.json`;
  const result = yield call(request, url);

  if (!result.err) {
    yield put(dataLoaded(result));
  } else {
    yield put(dataLoadingError(result.err));
  }
}

export function* loadDataSaga() {
  yield* takeEvery(LOAD_DATA, loadData);
}

export default [
  loadDataSaga,
];
