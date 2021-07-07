import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "login";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
};

// ACTIONS

const ASSIGN_TO_LOGIN_STORE = createAction("ASSIGN_TO_LOGIN_STORE");
const RESET_LOGIN_STORE = createAction("RESET_LOGIN_STORE");

const assignToLoginStore = (type, payload) => ({
  type: ASSIGN_TO_LOGIN_STORE,
  meta: {
    type,
    payload,
  },
});

const resetLoginStore = () => (dispatch) => {
  dispatch({
    type: RESET_LOGIN_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const loginReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_LOGIN_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_LOGIN_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: loginReducer,
  creators: {
    assignToLoginStore,
    resetLoginStore,
  },
};
