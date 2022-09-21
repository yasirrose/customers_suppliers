(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _api_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/admin */ "./resources/js/api/admin.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormSelect"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormCheckbox"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormTextarea"]
  },
  data: function data() {
    return {
      productId: null,
      orderTitle: "",
      quantity: "",
      orderType: null,
      createdFor: null,
      description: "",
      created_for: [{
        value: null,
        text: "Please select a User"
      }],
      order_type: [{
        value: null,
        text: "Please select Order Type"
      }, {
        value: "3",
        text: "Sales Order"
      }, {
        value: "2",
        text: "Purchase Order"
      }],
      all_products: [{
        value: null,
        text: "Select a product"
      }],
      validationErrors: '',
      orderId: this.$route.params.id
    };
  },
  created: function created() {
    this.getAllProducts();
    this.getSingleOrder(this.orderId);
  },
  methods: {
    validationForm: function validationForm() {
      var _this = this;

      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          _this.validationErrors = "";
          _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].updateOrder(_this.info = {
            title: _this.orderTitle,
            description: _this.description,
            quantity: _this.quantity,
            type: _this.orderType,
            //status:1,
            //created_by:user.id,
            created_for: _this.createdFor,
            product_id: _this.productId,
            id: _this.orderId
          }, function (data) {
            if (data.success) {
              _this.$toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
                props: {
                  title: "Success!",
                  text: data.message,
                  icon: "UserIcon",
                  variant: "success"
                }
              }); //router.push({ name: "manage-users" });

            } else {
              if (data.status == 422) {
                _this.validationErrors = data.message;
              } else {
                _this.$toast({
                  component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
                  props: {
                    title: "Failed",
                    text: data.message,
                    icon: "errorIcon",
                    variant: "outline-danger"
                  }
                });
              }
            }
          }, function (err) {
            console.log(err);
          });
        }
      });
    },
    getRelUsers: function getRelUsers(event) {
      var _this2 = this;

      console.log("the user type is", event);
      this.createdFor = null; //  this.created_for = null;

      this.created_for = [{
        value: null,
        text: "Please select a User"
      }];
      _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].getRelUsers(function (res) {
        console.log("the getRelUsers response is ", res.data);

        for (var i = 0; i < res.data.length; i++) {
          _this2.created_for.push({
            value: res.data[i].id,
            text: res.data[i].name
          });
        }
      }, function (err) {
        console.log(err);
      }, event);
    },
    getAllProducts: function getAllProducts() {
      var _this3 = this;

      _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].getData('getAllProducts', function (res) {
        for (var i = 0; i < res.data.length; i++) {
          _this3.all_products.push({
            value: res.data[i].id,
            text: res.data[i].name
          });
        }
      }, function (err) {
        console.log(err);
      });
    },
    getSingleOrder: function getSingleOrder(orderId) {
      var _this4 = this;

      _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].getRow('getSingleOrder', orderId, function (res) {
        _this4.orderTitle = res.data.title, _this4.description = res.data.description, _this4.productId = res.data.product_id, _this4.quantity = res.data.quantity, _this4.orderType = res.data.type, _this4.createdFor = res.data.created_for, _this4.created_for.push({
          'value': res.data.created_for,
          'text': res.data.name
        });
        console.log('the getSingleOrder response is', res.data);
      }, function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "b-card-code",
            { attrs: { title: "Update Order" } },
            [
              _vm.validationErrors
                ? _c("div", [
                    _c(
                      "ul",
                      { staticClass: "alert alert-danger" },
                      _vm._l(
                        _vm.validationErrors,
                        function (value, key, index) {
                          return _c("li", [_vm._v(_vm._s(value))])
                        }
                      ),
                      0
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "validation-observer",
                { ref: "simpleRules" },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Order Type",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-select", {
                                              attrs: {
                                                options: _vm.order_type,
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.getRelUsers($event)
                                                },
                                              },
                                              model: {
                                                value: _vm.orderType,
                                                callback: function ($$v) {
                                                  _vm.orderType = $$v
                                                },
                                                expression: "orderType",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Order For",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-select", {
                                              attrs: {
                                                options: _vm.created_for,
                                              },
                                              model: {
                                                value: _vm.createdFor,
                                                callback: function ($$v) {
                                                  _vm.createdFor = $$v
                                                },
                                                expression: "createdFor",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Order Title",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                type: "text",
                                                placeholder: "Order Title",
                                              },
                                              model: {
                                                value: _vm.orderTitle,
                                                callback: function ($$v) {
                                                  _vm.orderTitle = $$v
                                                },
                                                expression: "orderTitle",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Product",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-select", {
                                              attrs: {
                                                options: _vm.all_products,
                                              },
                                              model: {
                                                value: _vm.productId,
                                                callback: function ($$v) {
                                                  _vm.productId = $$v
                                                },
                                                expression: "productId",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Quantity",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "text",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Quantity",
                                              },
                                              model: {
                                                value: _vm.quantity,
                                                callback: function ($$v) {
                                                  _vm.quantity = $$v
                                                },
                                                expression: "quantity",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "description",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-textarea", {
                                              attrs: {
                                                id: "textarea",
                                                placeholder:
                                                  "Enter something...",
                                                rows: "2",
                                                "max-rows": "6",
                                              },
                                              model: {
                                                value: _vm.description,
                                                callback: function ($$v) {
                                                  _vm.description = $$v
                                                },
                                                expression: "description",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "12" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary", type: "submit" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.validationForm.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Submit")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/views/manage-orders/UpdateOrders.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/manage-orders/UpdateOrders.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateOrders.vue?vue&type=template&id=3099323a& */ "./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a&");
/* harmony import */ var _UpdateOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateOrders.vue?vue&type=script&lang=js& */ "./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/manage-orders/UpdateOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateOrders.vue?vue&type=template&id=3099323a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-orders/UpdateOrders.vue?vue&type=template&id=3099323a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateOrders_vue_vue_type_template_id_3099323a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);