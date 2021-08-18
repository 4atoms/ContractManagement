import cloneDeep from "lodash/cloneDeep";
import { setNamespace, setApiError } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "clientandproject";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  apiError: null,
  clientsList: [],
  projectsList: [],
};

// ACTIONS

const ASSIGN_TO_CLIENTANDPROJECT_STORE = createAction(
  "ASSIGN_TO_CLIENTANDPROJECT_STORE"
);
const RESET_CLIENTANDPROJECT_STORE = createAction(
  "RESET_CLIENTANDPROJECT_STORE"
);

const assignToClientandprojectStore = (type, payload) => ({
  type: ASSIGN_TO_CLIENTANDPROJECT_STORE,
  meta: {
    type,
    payload,
  },
});

const resetClientandprojectStore = () => (dispatch) => {
  dispatch({
    type: RESET_CLIENTANDPROJECT_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

const getClientData = () => (dispatch) => {
  return nw
    .api("clientList")
    .get()
    .then((resp) => {
      dispatch(assignToClientandprojectStore("clientsList", resp.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToClientandprojectStore, error);
    });
};
const getProjectData = () => (dispatch) => {
  return nw
    .api("projectList")
    .get()
    .then((resp) => {
      dispatch(assignToClientandprojectStore("projectsList", resp.data.data));
    });
};

// Routing

// Reducers
const clientandprojectReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_CLIENTANDPROJECT_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_CLIENTANDPROJECT_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: clientandprojectReducer,
  creators: {
    assignToClientandprojectStore,
    resetClientandprojectStore,
    getClientData,
    getProjectData,
  },
};
