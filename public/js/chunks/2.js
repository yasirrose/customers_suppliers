(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/api/admin.js":
/*!***********************************!*\
  !*** ./resources/js/api/admin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var admin = {
  getPermissions: function getPermissions(cb, errorCB, userLevel) {
    axios.get(window.API_URL + "admin/getPermissions/".concat(userLevel)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getAdminInfo: function getAdminInfo(cb, errorCB) {
    axios.get(window.API_URL + 'admin/getAdminInfo').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getUsers: function getUsers(cb, errorCB) {
    axios.get(window.API_URL + 'admin/getUsers').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getUserDetail: function getUserDetail(id, cb, errorCB) {
    axios.get(window.API_URL + "admin/getUserDetail/".concat(id)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getGroupDetail: function getGroupDetail(data, cb, errorCB) {
    axios.get(window.API_URL + 'admin/getGroupDetail?id=' + data.id).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  UpdateUserInfo: function UpdateUserInfo(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/UpdateUserInfo', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  createUser: function createUser(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/createUser', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  createGroup: function createGroup(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/createGroup', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateGroup: function updateGroup(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateGroup', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateAdminInfo: function updateAdminInfo(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateAdminInfo', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updatePassword: function updatePassword(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updatePassword', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateEmail: function updateEmail(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateEmail', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getAppLinks: function getAppLinks(cb, errorCB) {
    axios.get(window.API_URL + 'admin/getAppLinks').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getUserLogs: function getUserLogs(cb, errorCB) {
    axios.get(window.API_URL + 'admin/getUserLogs').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getGroups: function getGroups(cb, errorCB) {
    axios.get(window.API_URL + 'admin/getGroups').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  logout: function logout(cb, errorCB) {
    axios.post(window.API_URL + 'logout').then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  deleteRecords: function deleteRecords(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/deleteRecords', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  deleteUser: function deleteUser(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/deleteUser', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  // getMFADetail(cb, errorCB, user_id) {
  //     axios
  //         .get(window.API_URL + `admin/getMFADetail/${user_id}`)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // UpdateMFA(data, cb, errorCB) {
  //     axios
  //         .post(window.API_URL + `admin/UpdateMFA`, data)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // getUserGroups(user_id, cb, errorCB) {
  //     axios
  //         .get(window.API_URL + `admin/getUserGroups/${user_id}`)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // AddToGroup(user_id, data, cb, errorCB) {
  //     axios
  //         .post(window.API_URL + `admin/AddToGroup/${user_id}`, data)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // getGroupMembers(group_id, cb, errorCB) {
  //     axios
  //         .get(window.API_URL + `admin/getGroupMembers/${group_id}`)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // DeleteMember(group_id, data, cb, errorCB) {
  //     axios
  //         .post(window.API_URL + `admin/DeleteMember/${group_id}`, data)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // addBulkUser(data, cb, errorCB) {
  //     axios
  //         .post(window.API_URL + `admin/addBulkUser`, data)
  //         .then(resp => {
  //             if (resp.status == 200) {
  //                 cb(resp.data)
  //             }
  //         })
  //         .catch(err => {
  //             errorCB(err.response.data)
  //         })
  // },
  // for this project
  getRelUsers: function getRelUsers(cb, errorCB, userLevel) {
    axios.get(window.API_URL + "admin/getRelUsers/".concat(userLevel)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  saveOrder: function saveOrder(data, cb, errorCB) {
    axios.post(window.API_URL + "admin/saveOrder", data).then(function (resp) {
      console.log('the save order response is', resp);

      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB('err.response.data');
    });
  },
  getOrders: function getOrders(userId, userLevel, cb, errorCB) {
    axios.get(window.API_URL + "admin/getOrders/".concat(userId, "/").concat(userLevel)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getWarehouseDetail: function getWarehouseDetail(userId, cb, errorCB) {
    axios.get(window.API_URL + "admin/getWarehouseDetail/".concat(userId)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  addWarehouseDetail: function addWarehouseDetail(data, cb, errorCB) {
    axios.post(window.API_URL + "admin/addWarehouseDetail", data).then(function (resp) {
      console.log('the save order response is', resp);

      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB('err.response.data');
    });
  },
  addProductType: function addProductType(data, cb, errorCB) {
    axios.post(window.API_URL + "admin/addProductType", data).then(function (resp) {
      console.log('the save order response is', resp);

      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB('err.response.data');
    });
  },
  addProduct: function addProduct(data, cb, errorCB) {
    axios.post(window.API_URL + "admin/addProduct", data).then(function (resp) {
      console.log('the addProduct response is', resp);

      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB('err.response.data');
    });
  },
  getSingleProduct: function getSingleProduct(productId, cb, errorCB) {
    axios.get(window.API_URL + "admin/getSingleProduct/".concat(productId)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateProfileInfo: function updateProfileInfo(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateProfileInfo', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateProduct: function updateProduct(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateProduct', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateProductType: function updateProductType(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateProductType', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  UpdateWarehouse: function UpdateWarehouse(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/UpdateWarehouse', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  updateOrder: function updateOrder(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/updateOrder', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getData: function getData(url, cb, errorCB) {
    axios.get(window.API_URL + "admin/".concat(url)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  getRow: function getRow(url, id, cb, errorCB) {
    axios.get(window.API_URL + "admin/".concat(url, "/").concat(id)).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  },
  uploadFile: function uploadFile(data, cb, errorCB) {
    axios.post(window.API_URL + 'admin/uploadFile', data).then(function (resp) {
      if (resp.status == 200) {
        cb(resp.data);
      }
    })["catch"](function (err) {
      errorCB(err.response.data);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (admin);

/***/ })

}]);