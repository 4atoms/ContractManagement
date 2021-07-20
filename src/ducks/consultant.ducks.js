import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "consultant";

const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  consultantsList: [],
  detailOfConsultant: [],
  detailOfContract: [],
  id: null,
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
const setId = (num) => (dispatch) => {
  dispatch(assignToConsultantStore("id", num));
  console.log(num);
};

const getConsultantsData = () => (dispatch) => {
  nw.api("consultantList")
    .get()
    .then((resp) => {
      console.log(resp.data.data);
      dispatch(assignToConsultantStore("consultantsList", resp.data.data));
    });
};

const getDetailOfConsulant = (consultant_id) => (dispatch) => {
  nw.apiWithPath("consultantList", [consultant_id])
    .get()
    .then((resp) => {
      const contract_id = resp.data.data.contracts?.[0].id;
      nw.apiWithPath("contractList", [contract_id])
        .get()
        .then((resp2) => {
          console.log(resp2.data.data);
          dispatch(assignToConsultantStore("detailOfContract", resp2.data.data));
        });
      dispatch(assignToConsultantStore("detailOfConsultant", resp.data.data));
      console.log(resp.data.data);
    });
};
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
    getConsultantsData,
    getDetailOfConsulant,
    setId,
  },
};
