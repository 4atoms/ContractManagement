// Controllers
import Home from "Pages/home";
import Consultant from "Pages/consultant"
import Login from "Pages/login";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Consultant: Injector(Consultant, "Consultant"),
  Login: Injector(Login, "Login"),
};

