// Controllers
import Home from "Pages/home";
import Consultant from "Pages/consultant"
import Login from "Pages/login";
import Contract from "Pages/contract";
import Supplier from "Pages/supplier";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Consultant: Injector(Consultant, "Consultant"),
  Login: Injector(Login, "Login"),
  Supplier: Injector(Supplier, "Supplier"),
  Contract: Injector(Contract, "Contract"),
};

