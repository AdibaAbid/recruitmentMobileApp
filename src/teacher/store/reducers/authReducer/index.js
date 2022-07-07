import actionTypes from '../../Constant';

const INITIAL_STATE = {
  userInfo: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USERINFO:
      return {
        ...states,
        userInfo: action.payload,
      };

    default:
      return states;
  }
};
