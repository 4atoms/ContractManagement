import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
const namespace = "contractDetail";
const createAction = setNamespace(namespace);

// STORE
const initialState = {
};

// ACTIONS

const ASSIGN_TO_CONTRACT_DETAIL_STORE = createAction("ASSIGN_TO_CONTRACT_DETAIL_STORE");
const RESET_CONTRACT_DETAIL_STORE = createAction("RESET_CONTRACT_DETAIL_STORE");

const assignToContractDetailStore = (type, payload) => ({
  type: ASSIGN_TO_CONTRACT_DETAIL_STORE,
  meta: {
    type,
    payload,
  },
});

const resetContractDetailStore = () => (dispatch) => {
  dispatch({
    type: RESET_CONTRACT_DETAIL_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// Routing

// Reducers
const contractReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_CONTRACT_DETAIL_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_CONTRACT_DETAIL_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: contractReducer,
  creators: {
    assignToContractDetailStore,
    resetContractDetailStore,
  },
};
