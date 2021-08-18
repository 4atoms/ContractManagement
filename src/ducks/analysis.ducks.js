import cloneDeep from "lodash/cloneDeep";
import { setNamespace, setApiError } from "Utilities/helpers";
import Network from "Utilities/network";

const namespace = "analysis";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  apiError: null,
  allSuppliersAnalysis: null,
  allProjectsAnalysis: null,
  supplierAnalysis: null,
};

// ACTIONS

const ASSIGN_TO_ANALYSIS_STORE = createAction("ASSIGN_TO_ANALYSIS_STORE");
const RESET_ANALYSIS_STORE = createAction("RESET_ANALYSIS_STORE");

const assignToAnalysisStore = (type, payload) => ({
  type: ASSIGN_TO_ANALYSIS_STORE,
  meta: {
    type,
    payload,
  },
});

const resetAnalysisStore = () => (dispatch) => {
  dispatch({
    type: RESET_ANALYSIS_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

const getAllSuppliersAnalysis = (request) => (dispatch) => {
  return nw
    .apiWithQuery("suppliersAnalysis", request)
    .get()
    .then((response) => {
      dispatch(
        assignToAnalysisStore("allSuppliersAnalysis", response.data.data)
      );
    })
    .catch((error) => {
      setApiError(dispatch, assignToAnalysisStore, error);
    });
};

const getAllProjectsAnalysis = (request) => (dispatch) => {
  return nw
    .apiWithQuery("projectsAnalysis", request)
    .get()
    .then((response) => {
      dispatch(
        assignToAnalysisStore("allProjectsAnalysis", response.data.data)
      );
    })
    .catch((error) => {
      setApiError(dispatch, assignToAnalysisStore, error);
    });
};

const getSupplierAnalysis = (request, query) => (dispatch) => {
  return nw
    .apiWithPathAndQuery("suppliersChart", [request], [query])
    .get()
    .then((response) => {
      dispatch(assignToAnalysisStore("supplierAnalysis", response.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToAnalysisStore, error);
    });
};
// Routing

// Reducers
const analysisReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_ANALYSIS_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_ANALYSIS_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: analysisReducer,
  creators: {
    assignToAnalysisStore,
    resetAnalysisStore,
    getAllSuppliersAnalysis,
    getAllProjectsAnalysis,
    getSupplierAnalysis,
  },
};
