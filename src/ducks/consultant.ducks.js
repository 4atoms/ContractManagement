import cloneDeep from "lodash/cloneDeep";
import { setNamespace, setApiError } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "consultant";

const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  apiError: null,
  consultantsList: null,
  detailOfConsultant: null,
  detailOfContract: null,
  searchKey: null,
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

const getConsultantsData = () => (dispatch) => {
  return nw
    .api("consultantList")
    .get()
    .then((resp) => {
      dispatch(assignToConsultantStore("consultantsList", resp.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
    });
};

// const getDetailOfConsultant = (consultant_id) => (dispatch) => {
//   nw.apiWithPath("consultantList", [consultant_id])
//     .get()
//     .then((resp) => {
//       const contract_id = resp.data.data.contracts?.[0].id;
//       nw.apiWithPath("contractList", [contract_id])
//         .get()
//         .then((resp2) => {
//           console.log(resp2.data.data);
//           dispatch(assignToConsultantStore("detailOfContract", resp2.data.data));
//         });
//       dispatch(assignToConsultantStore("detailOfConsultant", resp.data.data));
//       console.log(resp.data.data);
//     });
// };

const getDetailOfConsultant = (consultant_id) => (dispatch) => {
  return nw
    .apiWithPath("consultantList", [consultant_id])
    .get()
    .then((resp) => {
      dispatch(assignToConsultantStore("detailOfConsultant", resp.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
    });
};

const addConsultant = (consultantInfo) => (dispatch) => {
  return nw
    .api("consultantList")
    .post(consultantInfo)
    .then((resp) => {
      getDetailOfConsultant(resp.data.data.data.consultant_id)(dispatch);
      getConsultantsData()(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
    });
};

const addConsultantwithContract = (consultantInfo) => (dispatch) => {
  return nw
    .api("createContractWithConsultant")
    .post(consultantInfo)
    .then((resp) => {
      getDetailOfConsultant(resp.data.data.data.consultant_id)(dispatch);
      getConsultantsData()(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
    });
};
const updateConsultant = (consultantInfo, consultantId) => (dispatch) => {
  return nw
    .apiWithPath("consultantList", [consultantId])
    .put(consultantInfo)
    .then(() => {
      dispatch(assignToConsultantStore("detailOfConsultant", null));
      getConsultantsData()(dispatch);
      getDetailOfConsultant(consultantId)(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
    });
};

const deleteConsultant = (consultantInfo) => (dispatch) => {
  return nw
    .apiWithPath("consultantList", [consultantInfo])
    .delete(consultantInfo)
    .then(() => {
      getConsultantsData()(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToConsultantStore, error);
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
    getDetailOfConsultant,
    addConsultant,
    deleteConsultant,
    addConsultantwithContract,
    updateConsultant,
  },
};
