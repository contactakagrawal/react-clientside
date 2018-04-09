import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  LOAD_NAME,
  API_BASE
} from '../client/constants'

export function fetchPostsApi(params) {
  return axios.post(`${API_BASE}/api`, {
    "filter": params.filter || {},
    "limit": params.limit,
    "offset": params.offset
  })
}

function* loadName(action) {
  try {
    yield put({ type: 'LOAD_NAME', payload: 'test' })
  } catch (e) {
    yield put({ type: 'LOAD_NAME_FAILED', payload: e.message })
  } 
}

function* appSaga() {
  yield takeLatest(LOAD_NAME, loadName) 
}

export default appSaga
