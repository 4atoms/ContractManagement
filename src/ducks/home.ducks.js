import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";

const namespace = "dashboard";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  overviewData: null,
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

const getOverviewData = () => (dispatch) => {
  return nw
    .api("dashboardOverview")
    .get()
    .then((resp) => {
      console.log(resp.data.data);
      dispatch(assignToDashboardStore("overviewData", resp.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
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
  },
};
