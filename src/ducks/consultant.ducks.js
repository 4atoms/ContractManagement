import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "consultant";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
};

// ACTIONS

const ASSIGN_TO_CONSULTANT_STORE = createAction("ASSIGN_TO_CONSULTANT_STORE");
const RESET_CONSULTANT_STORE = createAction("RESET_CONSULTANT_STORE");

const assignToConsultantStore = (type, payload) => ({
  type: ASSIGN_TO_CONSULTANT_STORE,
  meta: {
    type,
    payload,
  },
});

const resetConsultantStore = () => (dispatch) => {
  dispatch({
    type: RESET_CONSULTANT_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const consultantReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_CONSULTANT_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_CONSULTANT_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: consultantReducer,
  creators: {
    assignToConsultantStore,
    resetConsultantStore,
  },
};
