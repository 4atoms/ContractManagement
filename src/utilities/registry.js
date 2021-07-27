// Controllers
import Login from "Pages/login";
import ContractList from "Pages/contract";

import ContractDetail from "Pages/contract/contractDetail";
import Dashboard from "Pages/dashboard";
import SupplierNew from "Pages/suppliernew";
import ConsultantNew from "Pages/consultantnew";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Dashboard: Injector(Dashboard, "Dashboard"),
  Login: Injector(Login, "Login"),
  ContractList: Injector(ContractList, "ContractList"),
  ContractDetail: Injector(ContractDetail, "ContractDetail"),
  SupplierNew: Injector(SupplierNew, "SupplierNew"),
  ConsultantNew: Injector(ConsultantNew, "ConsultantNew"),
};
