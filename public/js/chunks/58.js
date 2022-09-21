(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _api_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/admin */ "./resources/js/api/admin.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"]
  },
  data: function data() {
    return {
      emailValue: '',
      old_password: '',
      passwordConfirm: '',
      required: _validations__WEBPACK_IMPORTED_MODULE_3__["required"],
      password: '',
      email: _validations__WEBPACK_IMPORTED_MODULE_3__["email"],
      confirmed: _validations__WEBPACK_IMPORTED_MODULE_3__["confirmed"],
      info: '',
      validationErrors: ''
    };
  },
  methods: {
    validationForm: function validationForm() {
      var _this = this;

      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          _api_admin__WEBPACK_IMPORTED_MODULE_4__["default"].updatePassword(_this.info = {
            "old_password": _this.old_password,
            "password": _this.password,
            "confirm_password": _this.passwordConfirm
          }, function (data) {
            if (data.success) {
              _this.$toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                props: {
                  title: 'Success!',
                  text: data.message,
                  icon: 'UserIcon',
                  variant: 'success'
                }
              }); // this.password='';
              // this.old_password='';
              // this.passwordConfirm='';

            } else {
              if (data.status == 422) {
                _this.validationErrors = data.message;
              } else {
                _this.$toast({
                  component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                  props: {
                    title: 'Failed',
                    text: data.message,
                    icon: 'errorIcon',
                    variant: 'outline-danger'
                  }
                });
              }
            }
          }, function (err) {
            console.log(err);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            { attrs: { title: "Update Password" } },
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
                                      name: "Old Password",
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
                                                type: "password",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Old Password",
                                              },
                                              model: {
                                                value: _vm.old_password,
                                                callback: function ($$v) {
                                                  _vm.old_password = $$v
                                                },
                                                expression: "old_password",
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
                                      name: "password",
                                      vid: "password",
                                      rules: "required|password",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                type: "password",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Your Password",
                                              },
                                              model: {
                                                value: _vm.password,
                                                callback: function ($$v) {
                                                  _vm.password = $$v
                                                },
                                                expression: "password",
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
                                      name: "passwordConfirm",
                                      rules: "required|confirmed:password",
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
                                                type: "password",
                                                placeholder: "Confirm Password",
                                              },
                                              model: {
                                                value: _vm.passwordConfirm,
                                                callback: function ($$v) {
                                                  _vm.passwordConfirm = $$v
                                                },
                                                expression: "passwordConfirm",
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
                                [
                                  _vm._v(
                                    "\n              Submit\n              "
                                  ),
                                ]
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

/***/ "./resources/js/src/views/user/ChangePassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/user/ChangePassword.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=28a79e96& */ "./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/user/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=28a79e96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/ChangePassword.vue?vue&type=template&id=28a79e96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_28a79e96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);