// Controllers
import Login from "Pages/Login";
import Dashboard from "Pages/dashboard";
import SupplierNew from "Pages/suppliernew";
import ConsultantNew from "Pages/consultantnew";

import Header from "Components/Header";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Header: Injector(Header, "Header"),
  Dashboard: Injector(Dashboard, "Dashboard"),
  Login: Injector(Login, "Login"),
  SupplierNew: Injector(SupplierNew, "SupplierNew"),
  ConsultantNew: Injector(ConsultantNew, "ConsultantNew"),
};
