// Controllers
import ConsultantList from "Pages/consultant";
import Login from "Pages/login";
import ContractList from "Pages/contract";
import SupplierList from "Pages/supplier";
import ContractDetail from "Pages/contract/contractDetail";
import ConsultantDetail from "Pages/consultant/consultantDetail";
import SupplierDetail from "Pages/supplier/supplierDetail";
import Dashboard from "../pages/dashboard";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Dashboard: Injector(Dashboard, "Dashboard"),
  ConsultantList: Injector(ConsultantList, "ConsultantList"),
  Login: Injector(Login, "Login"),
  SupplierList: Injector(SupplierList, "SupplierList"),
  ContractList: Injector(ContractList, "ContractList"),
  ContractDetail: Injector(ContractDetail, "ContractDetail"),
  SupplierDetail: Injector(SupplierDetail, "SupplierDetail"),
  ConsultantDetail: Injector(ConsultantDetail, "ConsultantDetail"),
};
