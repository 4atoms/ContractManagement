import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
import { dateFormat } from "../utilities/helpers";
const namespace = "contract";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  contractsList: [],
  contractListDraft: [],
  detailOfContract: [],
  id: null,
};

// ACTIONS

const ASSIGN_TO_CONTRACT_STORE = createAction("ASSIGN_TO_CONTRACT_STORE");
const RESET_CONTRACT_STORE = createAction("RESET_CONTRACT_STORE");

const assignToContractStore = (type, payload) => ({
  type: ASSIGN_TO_CONTRACT_STORE,
  meta: {
    type,
    payload,
  },
});

const resetContractStore = () => (dispatch) => {
  dispatch({
    type: RESET_CONTRACT_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS
const getContractsData = () => (dispatch) => {
  nw.api("contractList")
    .get()
    .then((resp) => {
      resp.data.data.forEach((x) => {
        x.start_date = dateFormat(x.start_date);
        x.end_date = dateFormat(x.end_date);
      });
      // dispatch(assignToContractStore("contractsListDraft", resp.data.data));
      dispatch(assignToContractStore("contractsList", resp.data.data));
    });
};
const getDetailOfcontract = (contract_id) => (dispatch) => {
  nw.apiWithPath("contractList", [contract_id])
    .get()
    .then((resp) => {
      dispatch(assignToContractStore("detailOfContract", resp.data.data));
    });
};

// Routing

// Reducers
const contractReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_CONTRACT_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_CONTRACT_STORE:
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
    assignToContractStore,
    resetContractStore,
    getContractsData,
    getDetailOfcontract,
  },
};
