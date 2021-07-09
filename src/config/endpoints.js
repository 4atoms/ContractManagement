const development = {
  supplierList: "/supplierList",
  contractList: "/contractList",
  consultantList: "/consultantList",
};

export function getAllEndpoints() {
  return Object.keys(development).reduce(function (acc, item) {
    acc[item] = development[item];
    return acc;
  }, {});
}

export function getBaseURL() {
  return "http://localhost:3000/";
}
