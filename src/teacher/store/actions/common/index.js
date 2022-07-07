import actionTypes from '../../Constant';

export function setModalHeight(height) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({ type: actionTypes.MODALHEIGHT, payload: height });
    });
  };
}

export function setModalToggle(show) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({ type: actionTypes.MODALTOGGLE, payload: show });
    });
  };
}

export function setModalComponent(children) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({ type: actionTypes.MODALCOMPONENT, payload: children });
    });
  };
}
