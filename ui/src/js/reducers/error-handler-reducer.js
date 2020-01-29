/* eslint-disable import/prefer-default-export */
import {
  ON_FAILURE,
} from '../actions/error-handler-action';

export function onErrorReducer(err = { errMessage: '' }, action) {
  switch (action.type) {
    case ON_FAILURE:
      console.log('ON_FAILURE action detected');
      return { errMessage: action.errMessage };
    default:
      return err;
  }
}
