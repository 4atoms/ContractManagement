// Controllers
import Home from "Pages/home";
import ConsultantList from "Pages/consultant"
import Login from "Pages/login";
import ContractList from "Pages/contract";
import SupplierList from "Pages/supplier";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Consultant: Injector(ConsultantList, "ConsultantList"),
  Login: Injector(Login, "Login"),
  Supplier: Injector(SupplierList, "Supplier"),
  Contract: Injector(ContractList, "ContractList"),
};

