const development = {
  dashboardOverview: "/dashboard/overview",
  supplierList: "/suppliers",
  contractList: "/contracts",
  consultantList: "/consultants",
  login: "/auth/login",
  signup: "/signup",
};

export function getAllEndpoints() {
  return Object.keys(development).reduce(function (acc, item) {
    acc[item] = development[item];
    return acc;
  }, {});
}

export function getBaseURL() {
  return "http://65.0.5.249:3000/api";
}
// https://run.mocky.io/v3/e9f7581e-9f74-4d13-ae02-b022383e56e3
