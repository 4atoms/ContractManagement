import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";

const namespace = "login";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  loginRequest: { username: null, password: null },
};

// ACTIONS

const ASSIGN_TO_AUTH_STORE = createAction("ASSIGN_TO_AUTH_STORE");
const RESET_AUTH_STORE = createAction("RESET_AUTH_STORE");

const assignToAuthStore = (type, payload) => ({
  type: ASSIGN_TO_AUTH_STORE,
  meta: {
    type,
    payload,
  },
});

const resetAuthStore = () => (dispatch) => {
  dispatch({
    type: RESET_AUTH_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS
const login = (request, history) => () => {
  nw.api("login")
    .get()
    .then((resp) => {
      console.log(resp.data);
      // console.log(request);
      sessionStorage.setItem("accessToken", resp.data.accessToken);
      history.push("/home");
    });
};
// Routing

// Reducers
const authReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_AUTH_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_AUTH_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: authReducer,
  creators: {
    assignToAuthStore,
    resetAuthStore,
    login,
  },
};
