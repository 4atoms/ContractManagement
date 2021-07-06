// Controllers
import Home from "Pages/home";
import Consultant from "Pages/consultant"

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Consultant: Injector(Consultant, "Consultant"),
};