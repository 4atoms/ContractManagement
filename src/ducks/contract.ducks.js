import cloneDeep from "lodash/cloneDeep";
import { setNamespace, setApiError } from "Utilities/helpers";
import Network from "Utilities/network";
import { dateFormat } from "../utilities/helpers";
const namespace = "contract";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  apiError: null,
  contractsList: null,
  upcomingContractsList: [],
  expiredContractsList: [],
  contractListDraft: null,
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
  return nw
    .api("contractList")
    .get()
    .then((resp) => {
      resp.data.data.ongoing.forEach((x) => {
        x.start_date = dateFormat(x.start_date);
        x.end_date = dateFormat(x.end_date);
      });
      resp.data.data.upcoming.forEach((x) => {
        x.start_date = dateFormat(x.start_date);
        x.end_date = dateFormat(x.end_date);
      });
      resp.data.data.expired?.forEach((x) => {
        x.start_date = dateFormat(x.start_date);
        x.end_date = dateFormat(x.end_date);
      });
      // dispatch(assignToContractStore("contractsListDraft", resp.data.data));
      dispatch(assignToContractStore("contractsList", resp.data.data.ongoing));
      dispatch(
        assignToContractStore("upcomingContractsList", resp.data.data.upcoming)
      );
      dispatch(
        assignToContractStore("expiredContractsList", resp.data.data.expired)
      );
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
    });
};

const getContractsDataWithQuery = (query) => (dispatch) => {
  return nw
    .apiWithQuery("contractWithQuery", query)
    .get()
    .then((response) => {
      dispatch(assignToContractStore("contractListDraft", response.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
    });
};

const getDetailOfcontract = (contract_id) => (dispatch) => {
  return nw
    .apiWithPath("contractList", [contract_id])
    .get()
    .then((resp) => {
      dispatch(assignToContractStore("detailOfContract", resp.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
    });
};

//update the contract
const updateContract = (request) => (dispatch) => {
  return nw
    .apiWithPath("contractList", [request.id])
    .put(request)
    .then((resp) => {
      console.log(resp.data.data);
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
    });
};

const renewContracts = (request) => (dispatch) => {
  return nw
    .api("renewContract")
    .post(request)
    .then((resp) => {
      console.log(resp.data.data);
      getContractsData()(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
    });
};

const deleteContract = (contract_id) => (dispatch) => {
  return nw
    .apiWithPath("contractList", [contract_id])
    .delete()
    .then((resp) => {
      console.log(resp.data);
      getContractsData()(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToContractStore, error);
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
    getContractsDataWithQuery,
    getDetailOfcontract,
    updateContract,
    renewContracts,
    deleteContract,
  },
};
