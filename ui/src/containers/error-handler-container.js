import { connect } from 'react-redux';
import ErrorHandler from '../components/error-handler';

import {
  onFailureAction,
} from '../actions/error-handler-action';

const mapStateToProps = (state) => {
  const newState = {
    errMessage: state.onErrorReducer.errMessage,
  };
  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  onError: (errMessage) => {
    dispatch(onFailureAction(errMessage));
  },
});

const ErrorHandlerContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);

export default ErrorHandlerContainer;
