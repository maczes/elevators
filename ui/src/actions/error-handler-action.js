/**
 * Action types definitions
 */
export const ON_FAILURE = 'ON_FAILURE';

/**
 * Action definitions
 */
export const onFailureAction = (errMessage) => ({
  type: ON_FAILURE,
  errMessage,
});
