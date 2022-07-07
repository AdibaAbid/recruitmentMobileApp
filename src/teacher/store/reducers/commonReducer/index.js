import actionTypes from '../../Constant';

const INITIAL_STATE = {
  modalToggle: false,
  modalHeight: '95%',
  modalComponent: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MODALTOGGLE:
      return {
        ...states,
        modalToggle: action.payload,
      };

    case actionTypes.MODALHEIGHT:
      return {
        ...states,
        modalHeight: action.payload,
      };

    case actionTypes.MODALCOMPONENT:
      return {
        ...states,
        modalComponent: action.payload,
      };

    default:
      return states;
  }
};
