import cloneDeep from "lodash/cloneDeep";
import { setNamespace, setApiError } from "Utilities/helpers";
import Network from "Utilities/network";

const namespace = "dashboard";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  apiError: null,
  overviewData: null,
  activeContractDashboard: null,
  renewContractDashboard: null,
  allSuppliersAnalysisDashboard: null,
  allProjectsAnalysisDashboard: null,
  analysisQuery: null,
};

// ACTIONS

const ASSIGN_TO_DASHBOARD_STORE = createAction("ASSIGN_TO_DASHBOARD_STORE");
const RESET_DASHBOARD_STORE = createAction("RESET_DASHBOARD_STORE");

const assignToDashboardStore = (type, payload) => ({
  type: ASSIGN_TO_DASHBOARD_STORE,
  meta: {
    type,
    payload,
  },
});

const resetDashboardStore = () => (dispatch) => {
  dispatch({
    type: RESET_DASHBOARD_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS

// overview card
const getOverviewData = () => (dispatch) => {
  return nw
    .api("dashboardOverview")
    .get()
    .then((resp) => {
      console.log(resp.data.data);
      dispatch(assignToDashboardStore("overviewData", resp.data.data));
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

// timesheet card
const getContractsWithQueryDashboard = (query) => (dispatch) => {
  return nw
    .apiWithQuery("contractWithQuery", query)
    .get()
    .then((response) => {
      if (query.status == "active") {
        dispatch(
          assignToDashboardStore("activeContractDashboard", response.data.data)
        );
      } else {
        dispatch(
          assignToDashboardStore("renewContractDashboard", response.data.data)
        );
      }
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

//update the contract
const updateContractDashboard = (request, query) => (dispatch) => {
  return nw
    .apiWithPath("contractList", [request.id])
    .put(request)
    .then((resp) => {
      console.log(resp.data.data);
      if (query) {
        if (query.type == "projects") {
          getAllProjectsAnalysisDashboard(query)(dispatch);
        } else {
          getAllSuppliersAnalysisDashboard(query)(dispatch);
        }
      }
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

//renewcard
const renewContractsDashboard = (request) => (dispatch) => {
  return nw
    .api("renewContract")
    .post(request)
    .then((resp) => {
      console.log(resp.data.data);
      getContractsWithQueryDashboard({ status: "active" })(dispatch);
      getOverviewData()(dispatch);
      getContractsWithQueryDashboard({ status: "to_be_renewed" })(dispatch);
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

// cost estimation card
const getAllSuppliersAnalysisDashboard = (request) => (dispatch) => {
  return nw
    .apiWithQuery("suppliersAnalysis", request)
    .get()
    .then((response) => {
      dispatch(
        assignToDashboardStore(
          "allSuppliersAnalysisDashboard",
          response.data.data
        )
      );
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

const getAllProjectsAnalysisDashboard = (request) => (dispatch) => {
  return nw
    .apiWithQuery("projectsAnalysis", request)
    .get()
    .then((response) => {
      dispatch(
        assignToDashboardStore(
          "allProjectsAnalysisDashboard",
          response.data.data
        )
      );
    })
    .catch((error) => {
      setApiError(dispatch, assignToDashboardStore, error);
    });
};

const updateAnalysisQuery = (query) => (dispatch) => {
  return dispatch(assignToDashboardStore("analysisQuery", query));
};

// Routing

// Reducers
const dashboardReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_DASHBOARD_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_DASHBOARD_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: dashboardReducer,
  creators: {
    assignToDashboardStore,
    resetDashboardStore,
    getOverviewData,
    getContractsWithQueryDashboard,
    updateContractDashboard,
    renewContractsDashboard,
    getAllSuppliersAnalysisDashboard,
    getAllProjectsAnalysisDashboard,
    updateAnalysisQuery,
  },
};
