import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "signup";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
};

// ACTIONS

const ASSIGN_TO_SIGNUP_STORE = createAction("ASSIGN_TO_SIGNUP_STORE");
const RESET_SIGNUP_STORE = createAction("RESET_SIGNUP_STORE");

const assignToSignupStore = (type, payload) => ({
  type: ASSIGN_TO_SIGNUP_STORE,
  meta: {
    type,
    payload,
  },
});

const resetSignupStore = () => (dispatch) => {
  dispatch({
    type: RESET_SIGNUP_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const signupReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_SIGNUP_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_SIGNUP_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: signupReducer,
  creators: {
    assignToSignupStore,
    resetSignupStore,
  },
};
