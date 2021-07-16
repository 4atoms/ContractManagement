import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
import cookie from "react-cookies";

const namespace = "auth";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  loginRequest: { email: null, password: null },
  accessToken: null,
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
    .post(request)
    .then((resp) => {
      console.log(resp.data.data.accessToken);
      cookie.save("access_token", resp.data.data.accessToken);
      // sessionStorage.setItem("accessToken", resp.data.accessToken);
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
