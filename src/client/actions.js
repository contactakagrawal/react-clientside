import { GET_DIFFERENCE, LOAD_TAB, 
  LOAD_DETAILS, LOAD_MORE } from '../client/constants'

export function getDifference(payload){
  return {
    type: GET_DIFFERENCE,
    payload
  }
}

export function loadTab(payload){
  return {
    type: LOAD_TAB,
    payload
  }
}

export function loadDetails(payload){
  return {
    type: LOAD_DETAILS,
    payload
  }
}

export function loadMore(payload){
  return {
    type: LOAD_MORE,
    payload
  }
}
