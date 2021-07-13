import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";

const namespace = "login";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  username: null,
  password: null,
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
const login = (request) => () => {
  console.log(request);
  nw.api("login")
    .get()
    .then((resp) => {
      console.log(resp.data);
      // console.log(request);
    });
};
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
    login,
  },
};
