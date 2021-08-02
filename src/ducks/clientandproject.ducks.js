import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "clientandproject";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  clientsList: [],
  projectsList: [],
  detailOfSupplier: [],
  id: null,
};

// ACTIONS

const ASSIGN_TO_SUPPLIER_STORE = createAction("ASSIGN_TO_SUPPLIER_STORE");
const RESET_SUPPLIER_STORE = createAction("RESET_SUPPLIER_STORE");

const assignToSupplierStore = (type, payload) => ({
  type: ASSIGN_TO_SUPPLIER_STORE,
  meta: {
    type,
    payload,
  },
});

const resetSupplierStore = () => (dispatch) => {
  dispatch({
    type: RESET_SUPPLIER_STORE,
    meta: {
      payload: null,
    },
  });
};

// METHODS
// const setId = (num) => (dispatch) => {
//   dispatch(assignToSupplierStore("id", num));
//   console.log(num);
// };

const getClientData = () => (dispatch) => {
  nw.api("clientList")
    .get()
    .then((resp) => {
      console.log(resp.data.data);
      dispatch(assignToSupplierStore("clientsList", resp.data.data));
    });
};
const getProjectData = () => (dispatch) => {
  nw.api("projectList")
    .get()
    .then((resp) => {
      console.log(resp.data.data);
      dispatch(assignToSupplierStore("projectsList", resp.data.data));
    });
};
const getDetailOfSupplier = (supplier_id) => (dispatch) => {
  nw.apiWithPath("supplierList", [supplier_id])
    .get()
    .then((resp) => {
      console.log("test", resp.data.data.point_of_contacts[0].name);
      dispatch(assignToSupplierStore("detailOfSupplier", resp.data.data));
    });
};

const addSupplier = (supplierInfo) => () => {
  nw.api("supplierList")
    .post(supplierInfo)
    .then((resp) => {
      console.log(resp.data);
    });
};
const editSupplier = (supplierInfo) => () => {
  nw.api("supplierList")
    .put(supplierInfo)
    .then((resp) => {
      console.log(resp.data);
    });
};
const deleteSupplier = (supplierInfo) => () => {
  nw.api("supplierList")
    .del(supplierInfo)
    .then((resp) => {
      console.log(resp.data);
    });
};

// Routing

// Reducers
const supplierReducer = (state = initialState, action) => {
  const localState = cloneDeep(state);

  switch (action.type) {
    case ASSIGN_TO_SUPPLIER_STORE:
      localState[action.meta.type] = action.meta.payload;
      return { ...localState };
    case RESET_SUPPLIER_STORE:
      return initialState;
    default:
      return localState;
  }
};

export default {
  namespace,
  store: initialState,
  reducer: supplierReducer,
  creators: {
    assignToSupplierStore,
    resetSupplierStore,
    getClientData,
    getProjectData,
    getDetailOfSupplier,
    addSupplier,
    editSupplier,
    deleteSupplier,
  },
};
