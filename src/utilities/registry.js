// Controllers
import Home from "Pages/home";
import ConsultantList from "Pages/consultant"
import Login from "Pages/login";
import ContractList from "Pages/contract";
import SupplierList from "Pages/supplier";
import Signup from "Pages/Signup";
import ContractDetail from "Pages/ContractDetail";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  ConsultantList: Injector(ConsultantList, "ConsultantList"),
  Login: Injector(Login, "Login"),
  SupplierList: Injector(SupplierList, "SupplierList"),
  ContractList: Injector(ContractList, "ContractList"),
  ContractDetail: Injector(ContractDetail, "ContractDetail"),
  Signup: Injector(Signup, "Signup"),
};

