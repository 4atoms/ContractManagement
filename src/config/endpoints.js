const development = {
  dashboardOverview: "/dashboard/overview",
  supplierList: "/suppliers",
  contractList: "/contracts",
  consultantList: "/consultants",
  createContractWithConsultant: "/consultants/create_contract",
  login: "/auth/login",
  signup: "/signup",

  //user
  fetchCurrentUser: "/users/fetch",

  contractWithQuery: "/contracts?status=", // status will be active, renewed, to_be_renewed, upcoming, expired.
  renewContract: "consultants/renew_contract", // to renew a contract

  //chart analysis
  suppliersAnalysis: "/analysis/suppliers/?month=&year=", // for all supplier, and also for specfic supplier -> /id
  consultantAnalysis: "/analysis/consultants?month=&year=", // for specific consultant -> /id
  clientAnalysis: "/analysis/clients/path?query=&month=&year=", // fro specific client -> /id
  projectsAnalysis: "/analysis/projects?month=&year=", // for all projects
  projectList: "/projects",
  clientList: "/clients",
  suppliersChart: "/analysis/suppliers/path?month=&year=", // for specific supplier analysis
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
