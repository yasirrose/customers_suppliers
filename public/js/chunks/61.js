(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
      required: _validations__WEBPACK_IMPORTED_MODULE_6__["required"],
      validationErrors: "",
      productName: "",
      length: "",
      width: "",
      weight: "",
      description: "",
      productType: null,
      product_type: [{
        value: null,
        text: "Select a type"
      }],
      productId: this.$route.params.id
    };
  },
  created: function created() {
    this.getProductTypes();
    this.getSingleProduct(this.productId);
  },
  methods: {
    validationForm: function validationForm() {
      var _this = this;

      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          _this.validationErrors = "";
          _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].updateProduct(_this.info = {
            name: _this.productName,
            length: _this.length,
            width: _this.width,
            weight: _this.weight,
            description: _this.description,
            type_id: _this.productType,
            id: _this.productId
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
    getProductTypes: function getProductTypes() {
      var _this2 = this;

      _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].getData('getProductTypes', function (res) {
        console.log("the getProductTypes response is ", res.data);

        for (var i = 0; i < res.data.length; i++) {
          _this2.product_type.push({
            value: res.data[i].id,
            text: res.data[i].type
          });
        }
      }, function (err) {
        console.log(err);
      });
    },
    getSingleProduct: function getSingleProduct(productId) {
      var _this3 = this;

      _api_admin__WEBPACK_IMPORTED_MODULE_7__["default"].getRow('getSingleProduct', productId, function (res) {
        console.log('the getsingle product response is', res.data);
        _this3.productName = res.data.name, _this3.length = res.data.length, _this3.width = res.data.width, _this3.weight = res.data.weight, _this3.description = res.data.description, _this3.productType = res.data.type_id;
      }, function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { title: "Update Product" } },
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
                                      name: "Product Type",
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
                                                options: _vm.product_type,
                                              },
                                              model: {
                                                value: _vm.productType,
                                                callback: function ($$v) {
                                                  _vm.productType = $$v
                                                },
                                                expression: "productType",
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
                                      name: "Product Name",
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
                                                placeholder: "Product Name",
                                              },
                                              model: {
                                                value: _vm.productName,
                                                callback: function ($$v) {
                                                  _vm.productName = $$v
                                                },
                                                expression: "productName",
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
                                    attrs: { name: "Width", rules: "required" },
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
                                                placeholder: "Product Width",
                                              },
                                              model: {
                                                value: _vm.width,
                                                callback: function ($$v) {
                                                  _vm.width = $$v
                                                },
                                                expression: "width",
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
                                      name: "Length",
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
                                                placeholder: "Product Length",
                                              },
                                              model: {
                                                value: _vm.length,
                                                callback: function ($$v) {
                                                  _vm.length = $$v
                                                },
                                                expression: "length",
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
                                      name: "Weight",
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
                                                placeholder: "Product Weight",
                                              },
                                              model: {
                                                value: _vm.weight,
                                                callback: function ($$v) {
                                                  _vm.weight = $$v
                                                },
                                                expression: "weight",
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
                                                  "Add Description...",
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

/***/ "./resources/js/src/views/manage-products/UpdateProducts.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/manage-products/UpdateProducts.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProducts.vue?vue&type=template&id=3b107e9a& */ "./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a&");
/* harmony import */ var _UpdateProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProducts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/manage-products/UpdateProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateProducts.vue?vue&type=template&id=3b107e9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/manage-products/UpdateProducts.vue?vue&type=template&id=3b107e9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProducts_vue_vue_type_template_id_3b107e9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);