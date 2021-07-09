import cloneDeep from "lodash/cloneDeep";
import { setNamespace } from "Utilities/helpers";
import Network from "Utilities/network";
const namespace = "supplier";
const createAction = setNamespace(namespace);
const nw = new Network();

// STORE
const initialState = {
  data: [
    {
      key: "5",
      companyId: "625kr",
      supplierName: "Accenture",
      contactPerson: "9999772311",
      phoneNo: "9999772300",
    },
  ],
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
const getSupplierData = (request) => {
  nw.api("supplierList")
    .get()
    .then((resp) => {
      console.log(resp.data);
      assignToSupplierStore("data", resp.data);
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
    getSupplierData,
  },
};
