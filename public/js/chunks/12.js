(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    title: {
      type: String,
      "default": null
    },
    subtitle: {
      type: String,
      "default": null
    },
    time: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    fillBorder: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _chartOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartOptions */ "./resources/js/src/@core/components/statistics-cards/chartOptions.js");


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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    },
    chartData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartOptions: {
      type: Object,
      "default": null
    }
  },
  computed: {
    chartOptionsComputed: function chartOptionsComputed() {
      if (this.chartOptions === null) {
        var options = JSON.parse(JSON.stringify(_chartOptions__WEBPACK_IMPORTED_MODULE_5__["areaChartOptions"]));
        options.theme.monochrome.color = _themeConfig__WEBPACK_IMPORTED_MODULE_4__["$themeColors"][this.color];
        return options;
      }

      return this.chartOptions;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _useInvoiceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInvoiceList */ "./resources/js/src/views/apps/invoice/invoice-list/useInvoiceList.js");
/* harmony import */ var _invoiceStoreModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invoiceStoreModule */ "./resources/js/src/views/apps/invoice/invoiceStoreModule.js");
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  setup: function setup() {
    var INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_4__["default"].hasModule(INVOICE_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_4__["default"].registerModule(INVOICE_APP_STORE_MODULE_NAME, _invoiceStoreModule__WEBPACK_IMPORTED_MODULE_6__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_4__["default"].hasModule(INVOICE_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_4__["default"].unregisterModule(INVOICE_APP_STORE_MODULE_NAME);
    });
    var statusOptions = ['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due'];

    var _useInvoicesList = Object(_useInvoiceList__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        fetchInvoices = _useInvoicesList.fetchInvoices,
        tableColumns = _useInvoicesList.tableColumns,
        perPage = _useInvoicesList.perPage,
        currentPage = _useInvoicesList.currentPage,
        totalInvoices = _useInvoicesList.totalInvoices,
        dataMeta = _useInvoicesList.dataMeta,
        perPageOptions = _useInvoicesList.perPageOptions,
        searchQuery = _useInvoicesList.searchQuery,
        sortBy = _useInvoicesList.sortBy,
        isSortDirDesc = _useInvoicesList.isSortDirDesc,
        refInvoiceListTable = _useInvoicesList.refInvoiceListTable,
        statusFilter = _useInvoicesList.statusFilter,
        refetchData = _useInvoicesList.refetchData,
        resolveInvoiceStatusVariantAndIcon = _useInvoicesList.resolveInvoiceStatusVariantAndIcon,
        resolveClientAvatarVariant = _useInvoicesList.resolveClientAvatarVariant;

    return {
      fetchInvoices: fetchInvoices,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalInvoices: totalInvoices,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refInvoiceListTable: refInvoiceListTable,
      statusFilter: statusFilter,
      refetchData: refetchData,
      statusOptions: statusOptions,
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__["avatarText"],
      resolveInvoiceStatusVariantAndIcon: resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant: resolveClientAvatarVariant
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_statistics_cards_StatisticCardWithAreaChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/statistics-cards/StatisticCardWithAreaChart.vue */ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _views_apps_invoice_invoice_list_InvoiceList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/apps/invoice/invoice-list/InvoiceList.vue */ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue");
/* harmony import */ var _AnalyticsCongratulation_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnalyticsCongratulation.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue");
/* harmony import */ var _AnalyticsAvgSessions_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnalyticsAvgSessions.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue");
/* harmony import */ var _AnalyticsSupportTracker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnalyticsSupportTracker.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue");
/* harmony import */ var _AnalyticsTimeline_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnalyticsTimeline.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue");
/* harmony import */ var _AnalyticsSalesRadarChart_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnalyticsSalesRadarChart.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue");
/* harmony import */ var _AnalyticsAppDesign_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnalyticsAppDesign.vue */ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue");
/* harmony import */ var _fake_db_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/@fake-db/db */ "./resources/js/src/@fake-db/db.js");
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    StatisticCardWithAreaChart: _core_components_statistics_cards_StatisticCardWithAreaChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AnalyticsCongratulation: _AnalyticsCongratulation_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AnalyticsAvgSessions: _AnalyticsAvgSessions_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    AnalyticsSupportTracker: _AnalyticsSupportTracker_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AnalyticsTimeline: _AnalyticsTimeline_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    AnalyticsSalesRadarChart: _AnalyticsSalesRadarChart_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    AnalyticsAppDesign: _AnalyticsAppDesign_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    InvoiceList: _views_apps_invoice_invoice_list_InvoiceList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {},
      userData: {}
    };
  },
  props: {
    user: ''
  },
  created: function created() {
    var _this = this;

    // data
    this.$http.get('/analytics/data').then(function (response) {
      _this.data = response.data;
    }); //this.setUserdata();
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BProgress"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      salesBar: {
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            },
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0
            }
          },
          states: {
            hover: {
              filter: 'none'
            }
          },
          colors: ['#ebf0f7', '#ebf0f7', _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].primary, '#ebf0f7', '#ebf0f7', '#ebf0f7'],
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
              endingShape: 'rounded'
            }
          },
          tooltip: {
            x: {
              show: false
            }
          },
          xaxis: {
            type: 'numeric'
          }
        }
      }
    };
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      statisticsRadar: {
        chartOptions: {
          chart: {
            height: 300,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 8,
              left: 1,
              top: 1,
              opacity: 0.2
            },
            toolbar: {
              show: false
            },
            offsetY: 5
          },
          stroke: {
            width: 0
          },
          dataLabels: {
            background: {
              foreColor: ['#ebe9f1']
            }
          },
          legend: {
            show: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info],
          plotOptions: {
            radar: {
              polygons: {
                strokeColors: ['#ebe9f1', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                connectorColors: 'transparent'
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            }
          },
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          markers: {
            size: 0
          },
          yaxis: {
            show: false
          },
          grid: {
            show: false,
            padding: {
              bottom: -27
            }
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      supportTrackerRadialBar: {
        chartOptions: {
          plotOptions: {
            radialBar: {
              size: 150,
              offsetY: 20,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: '65%'
              },
              track: {
                background: '#fff',
                strokeWidth: '100%'
              },
              dataLabels: {
                name: {
                  offsetY: -5,
                  color: '#5e5873',
                  fontSize: '1rem'
                },
                value: {
                  offsetY: 15,
                  color: '#5e5873',
                  fontSize: '1.714rem'
                }
              }
            }
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].danger],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            dashArray: 8
          },
          labels: ['Completed Tickets']
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
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



/* eslint-disable global-require */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-timeline[data-v-23873c70] {\n  list-style: none;\n  position: relative;\n}[dir] .app-timeline[data-v-23873c70] {\n  padding: 0;\n  margin: 0;\n}[dir=ltr] .app-timeline[data-v-23873c70] {\n  margin-left: 1rem;\n}[dir=rtl] .app-timeline[data-v-23873c70] {\n  margin-right: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Generate:\n*  Apply background color to dot\n*/\n[dir] .timeline-variant-white.timeline-item-fill-border-white[data-v-683ea3ba] {\n  border-color: #ffffff !important;\n}\n[dir] .timeline-variant-white.timeline-item-fill-border-white[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#ffffff, #fff);\n}\n[dir] .timeline-variant-white .timeline-item-point[data-v-683ea3ba] {\n  background-color: #ffffff;\n}\n[dir] .timeline-variant-white .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.timeline-variant-white .timeline-item-icon[data-v-683ea3ba] {\n  color: #ffffff;\n}\n[dir] .timeline-variant-white .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #ffffff;\n}\n[dir] .timeline-variant-black.timeline-item-fill-border-black[data-v-683ea3ba] {\n  border-color: #000000 !important;\n}\n[dir] .timeline-variant-black.timeline-item-fill-border-black[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#000000, #fff);\n}\n[dir] .timeline-variant-black .timeline-item-point[data-v-683ea3ba] {\n  background-color: #000000;\n}\n[dir] .timeline-variant-black .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.timeline-variant-black .timeline-item-icon[data-v-683ea3ba] {\n  color: #000000;\n}\n[dir] .timeline-variant-black .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #000000;\n}\n[dir] .timeline-variant-dark.timeline-item-fill-border-dark[data-v-683ea3ba] {\n  border-color: #4b4b4b !important;\n}\n[dir] .timeline-variant-dark.timeline-item-fill-border-dark[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#4b4b4b, #fff);\n}\n[dir] .timeline-variant-dark .timeline-item-point[data-v-683ea3ba] {\n  background-color: #4b4b4b;\n}\n[dir] .timeline-variant-dark .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(75, 75, 75, 0.12);\n}\n.timeline-variant-dark .timeline-item-icon[data-v-683ea3ba] {\n  color: #4b4b4b;\n}\n[dir] .timeline-variant-dark .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #4b4b4b;\n}\n[dir] .timeline-variant-light.timeline-item-fill-border-light[data-v-683ea3ba] {\n  border-color: #f6f6f6 !important;\n}\n[dir] .timeline-variant-light.timeline-item-fill-border-light[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#f6f6f6, #fff);\n}\n[dir] .timeline-variant-light .timeline-item-point[data-v-683ea3ba] {\n  background-color: #f6f6f6;\n}\n[dir] .timeline-variant-light .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(246, 246, 246, 0.12);\n}\n.timeline-variant-light .timeline-item-icon[data-v-683ea3ba] {\n  color: #f6f6f6;\n}\n[dir] .timeline-variant-light .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #f6f6f6;\n}\n[dir] .timeline-variant-primary.timeline-item-fill-border-primary[data-v-683ea3ba] {\n  border-color: #7367f0 !important;\n}\n[dir] .timeline-variant-primary.timeline-item-fill-border-primary[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#7367f0, #fff);\n}\n[dir] .timeline-variant-primary .timeline-item-point[data-v-683ea3ba] {\n  background-color: #7367f0;\n}\n[dir] .timeline-variant-primary .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.timeline-variant-primary .timeline-item-icon[data-v-683ea3ba] {\n  color: #7367f0;\n}\n[dir] .timeline-variant-primary .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #7367f0;\n}\n[dir] .timeline-variant-secondary.timeline-item-fill-border-secondary[data-v-683ea3ba] {\n  border-color: #82868b !important;\n}\n[dir] .timeline-variant-secondary.timeline-item-fill-border-secondary[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#82868b, #fff);\n}\n[dir] .timeline-variant-secondary .timeline-item-point[data-v-683ea3ba] {\n  background-color: #82868b;\n}\n[dir] .timeline-variant-secondary .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(130, 134, 139, 0.12);\n}\n.timeline-variant-secondary .timeline-item-icon[data-v-683ea3ba] {\n  color: #82868b;\n}\n[dir] .timeline-variant-secondary .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #82868b;\n}\n[dir] .timeline-variant-success.timeline-item-fill-border-success[data-v-683ea3ba] {\n  border-color: #28c76f !important;\n}\n[dir] .timeline-variant-success.timeline-item-fill-border-success[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#28c76f, #fff);\n}\n[dir] .timeline-variant-success .timeline-item-point[data-v-683ea3ba] {\n  background-color: #28c76f;\n}\n[dir] .timeline-variant-success .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(40, 199, 111, 0.12);\n}\n.timeline-variant-success .timeline-item-icon[data-v-683ea3ba] {\n  color: #28c76f;\n}\n[dir] .timeline-variant-success .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #28c76f;\n}\n[dir] .timeline-variant-info.timeline-item-fill-border-info[data-v-683ea3ba] {\n  border-color: #00cfe8 !important;\n}\n[dir] .timeline-variant-info.timeline-item-fill-border-info[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#00cfe8, #fff);\n}\n[dir] .timeline-variant-info .timeline-item-point[data-v-683ea3ba] {\n  background-color: #00cfe8;\n}\n[dir] .timeline-variant-info .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(0, 207, 232, 0.12);\n}\n.timeline-variant-info .timeline-item-icon[data-v-683ea3ba] {\n  color: #00cfe8;\n}\n[dir] .timeline-variant-info .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #00cfe8;\n}\n[dir] .timeline-variant-warning.timeline-item-fill-border-warning[data-v-683ea3ba] {\n  border-color: #ff9f43 !important;\n}\n[dir] .timeline-variant-warning.timeline-item-fill-border-warning[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#ff9f43, #fff);\n}\n[dir] .timeline-variant-warning .timeline-item-point[data-v-683ea3ba] {\n  background-color: #ff9f43;\n}\n[dir] .timeline-variant-warning .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(255, 159, 67, 0.12);\n}\n.timeline-variant-warning .timeline-item-icon[data-v-683ea3ba] {\n  color: #ff9f43;\n}\n[dir] .timeline-variant-warning .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #ff9f43;\n}\n[dir] .timeline-variant-danger.timeline-item-fill-border-danger[data-v-683ea3ba] {\n  border-color: #ea5455 !important;\n}\n[dir] .timeline-variant-danger.timeline-item-fill-border-danger[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#ea5455, #fff);\n}\n[dir] .timeline-variant-danger .timeline-item-point[data-v-683ea3ba] {\n  background-color: #ea5455;\n}\n[dir] .timeline-variant-danger .timeline-item-point[data-v-683ea3ba]:before {\n  background-color: rgba(234, 84, 85, 0.12);\n}\n.timeline-variant-danger .timeline-item-icon[data-v-683ea3ba] {\n  color: #ea5455;\n}\n[dir] .timeline-variant-danger .timeline-item-icon[data-v-683ea3ba] {\n  border: 1px solid #ea5455;\n}\n.timeline-item[data-v-683ea3ba] {\n  position: relative;\n}\n[dir=ltr] .timeline-item[data-v-683ea3ba] {\n  padding-left: 2.5rem;\n}\n[dir=rtl] .timeline-item[data-v-683ea3ba] {\n  padding-right: 2.5rem;\n}\n[dir] .timeline-item[data-v-683ea3ba]:not(:last-of-type) {\n  padding-bottom: 2rem;\n}\n[dir=ltr] .timeline-item[data-v-683ea3ba]:not(:last-of-type) {\n  border-left: 1px solid #ebe9f1;\n}\n[dir=rtl] .timeline-item[data-v-683ea3ba]:not(:last-of-type) {\n  border-right: 1px solid #ebe9f1;\n}\n.timeline-item[data-v-683ea3ba]:last-of-type:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 1px;\n  height: 100%;\n}\n[dir] .timeline-item[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#ebe9f1, #fff);\n}\n[dir=ltr] .timeline-item[data-v-683ea3ba]:last-of-type:after {\n  left: 0;\n}\n[dir=rtl] .timeline-item[data-v-683ea3ba]:last-of-type:after {\n  right: 0;\n}\n.timeline-item .timeline-item-point[data-v-683ea3ba] {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 0;\n  z-index: 1;\n}\n[dir] .timeline-item .timeline-item-point[data-v-683ea3ba] {\n  border-radius: 50%;\n}\n[dir=ltr] .timeline-item .timeline-item-point[data-v-683ea3ba] {\n  left: -6px;\n}\n[dir=rtl] .timeline-item .timeline-item-point[data-v-683ea3ba] {\n  right: -6px;\n}\n.timeline-item .timeline-item-point[data-v-683ea3ba]:before {\n  content: \"\";\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -4px;\n  bottom: 0;\n}\n[dir] .timeline-item .timeline-item-point[data-v-683ea3ba]:before {\n  border-radius: 50%;\n}\n[dir=ltr] .timeline-item .timeline-item-point[data-v-683ea3ba]:before {\n  left: -4px;\n  right: 0;\n}\n[dir=rtl] .timeline-item .timeline-item-point[data-v-683ea3ba]:before {\n  right: -4px;\n  left: 0;\n}\n.timeline-item .timeline-item-icon[data-v-683ea3ba] {\n  position: absolute;\n  top: 0;\n  width: 24px;\n  height: 24px;\n  z-index: 1;\n}\n[dir] .timeline-item .timeline-item-icon[data-v-683ea3ba] {\n  background-color: #fff;\n}\n[dir=ltr] .timeline-item .timeline-item-icon[data-v-683ea3ba] {\n  left: -12px;\n}\n[dir=rtl] .timeline-item .timeline-item-icon[data-v-683ea3ba] {\n  right: -12px;\n}\n[dir] .dark-layout .timeline-item[data-v-683ea3ba]:last-of-type:after {\n  background: linear-gradient(#3b4253, #283046);\n}\n[dir=ltr] .dark-layout .timeline-item[data-v-683ea3ba]:not(:last-of-type) {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .timeline-item[data-v-683ea3ba]:not(:last-of-type) {\n  border-right-color: #3b4253;\n}\n[dir] .dark-layout .timeline-item .timeline-item-icon[data-v-683ea3ba] {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toastification-close-icon[data-v-7834b2fa],\n.toastification-title[data-v-7834b2fa] {\n  line-height: 26px;\n}\n.toastification-title[data-v-7834b2fa] {\n  color: inherit;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".per-page-selector[data-v-e5fcc102] {\n  width: 90px;\n}\n.invoice-filter-select[data-v-e5fcc102] {\n  min-width: 190px;\n}\n.invoice-filter-select[data-v-e5fcc102]  .vs__selected-options {\n  flex-wrap: nowrap;\n}\n.invoice-filter-select[data-v-e5fcc102]  .vs__selected {\n  width: 100px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    "ul",
    _vm._g(
      _vm._b({ staticClass: "app-timeline" }, "ul", _vm.$attrs, false),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "li",
    _vm._g(
      _vm._b(
        {
          staticClass: "timeline-item",
          class: [
            "timeline-variant-" + _vm.variant,
            _vm.fillBorder ? "timeline-item-fill-border-" + _vm.variant : null,
          ],
        },
        "li",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      !_vm.icon
        ? _c("div", { staticClass: "timeline-item-point" })
        : _c(
            "div",
            {
              staticClass:
                "timeline-item-icon d-flex align-items-center justify-content-center rounded-circle",
            },
            [_c("feather-icon", { attrs: { icon: _vm.icon } })],
            1
          ),
      _vm._v(" "),
      _vm._t("default", function () {
        return [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
            },
            [
              _c("h6", { domProps: { textContent: _vm._s(_vm.title) } }),
              _vm._v(" "),
              _c("small", {
                staticClass: "timeline-item-time text-nowrap text-muted",
                domProps: { textContent: _vm._s(_vm.time) },
              }),
            ]
          ),
          _vm._v(" "),
          _c("p", {
            staticClass: "mb-0",
            domProps: { textContent: _vm._s(_vm.subtitle) },
          }),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        { staticClass: "pb-0" },
        [
          _c(
            "b-avatar",
            {
              staticClass: "mb-1",
              attrs: { variant: "light-" + _vm.color, size: "45" },
            },
            [_c("feather-icon", { attrs: { size: "21", icon: _vm.icon } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-25 font-weight-bolder" }, [
              _vm._v("\n        " + _vm._s(_vm.statistic) + "\n      "),
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-apex-charts", {
        attrs: {
          type: "area",
          height: "100",
          width: "100%",
          options: _vm.chartOptionsComputed,
          series: _vm.chartData,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" },
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-toast")
                },
              },
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "div",
        { staticClass: "m-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-start mb-1 mb-md-0",
                  attrs: { cols: "12", md: "6" },
                },
                [
                  _c("label", [_vm._v("Entries")]),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "per-page-selector d-inline-block ml-50 mr-1",
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      options: _vm.perPageOptions,
                      clearable: false,
                    },
                    model: {
                      value: _vm.perPage,
                      callback: function ($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: {
                        variant: "primary",
                        to: { name: "apps-invoice-add" },
                      },
                    },
                    [_vm._v("\n          Add Record\n        ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12", md: "6" } }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-end",
                  },
                  [
                    _c("b-form-input", {
                      staticClass: "d-inline-block mr-1",
                      attrs: { placeholder: "Search..." },
                      model: {
                        value: _vm.searchQuery,
                        callback: function ($$v) {
                          _vm.searchQuery = $$v
                        },
                        expression: "searchQuery",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-select", {
                      staticClass: "invoice-filter-select",
                      attrs: {
                        dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                        options: _vm.statusOptions,
                        placeholder: "Select Status",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "selected-option",
                          fn: function (ref) {
                            var label = ref.label
                            return [
                              _c(
                                "span",
                                {
                                  staticClass: "text-truncate overflow-hidden",
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(label) +
                                      "\n              "
                                  ),
                                ]
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.statusFilter,
                        callback: function ($$v) {
                          _vm.statusFilter = $$v
                        },
                        expression: "statusFilter",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        ref: "refInvoiceListTable",
        staticClass: "position-relative",
        attrs: {
          items: _vm.fetchInvoices,
          responsive: "",
          fields: _vm.tableColumns,
          "primary-key": "id",
          "sort-by": _vm.sortBy,
          "show-empty": "",
          "empty-text": "No matching records found",
          "sort-desc": _vm.isSortDirDesc,
        },
        on: {
          "update:sortBy": function ($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function ($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function ($event) {
            _vm.isSortDirDesc = $event
          },
          "update:sort-desc": function ($event) {
            _vm.isSortDirDesc = $event
          },
        },
        scopedSlots: _vm._u([
          {
            key: "head(invoiceStatus)",
            fn: function () {
              return [
                _c("feather-icon", {
                  staticClass: "mx-auto",
                  attrs: { icon: "TrendingUpIcon" },
                }),
              ]
            },
            proxy: true,
          },
          {
            key: "cell(id)",
            fn: function (data) {
              return [
                _c(
                  "b-link",
                  {
                    staticClass: "font-weight-bold",
                    attrs: {
                      to: {
                        name: "apps-invoice-preview",
                        params: { id: data.item.id },
                      },
                    },
                  },
                  [_vm._v("\n        #" + _vm._s(data.value) + "\n      ")]
                ),
              ]
            },
          },
          {
            key: "cell(invoiceStatus)",
            fn: function (data) {
              return [
                _c(
                  "b-avatar",
                  {
                    attrs: {
                      id: "invoice-row-" + data.item.id,
                      size: "32",
                      variant:
                        "light-" +
                        _vm.resolveInvoiceStatusVariantAndIcon(
                          data.item.invoiceStatus
                        ).variant,
                    },
                  },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: _vm.resolveInvoiceStatusVariantAndIcon(
                          data.item.invoiceStatus
                        ).icon,
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  {
                    attrs: {
                      target: "invoice-row-" + data.item.id,
                      placement: "top",
                    },
                  },
                  [
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(data.item.invoiceStatus) +
                          "\n        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n          Balance: " +
                          _vm._s(data.item.balance) +
                          "\n        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n          Due Date: " +
                          _vm._s(data.item.dueDate) +
                          "\n        "
                      ),
                    ]),
                  ]
                ),
              ]
            },
          },
          {
            key: "cell(client)",
            fn: function (data) {
              return [
                _c(
                  "b-media",
                  {
                    attrs: { "vertical-align": "center" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "aside",
                          fn: function () {
                            return [
                              _c("b-avatar", {
                                attrs: {
                                  size: "32",
                                  src: data.item.avatar,
                                  text: _vm.avatarText(data.item.client.name),
                                  variant:
                                    "light-" +
                                    _vm.resolveClientAvatarVariant(
                                      data.item.invoiceStatus
                                    ),
                                },
                              }),
                            ]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-weight-bold d-block text-nowrap" },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.client.name) +
                            "\n        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(data.item.client.companyEmail)),
                    ]),
                  ]
                ),
              ]
            },
          },
          {
            key: "cell(issuedDate)",
            fn: function (data) {
              return [
                _c("span", { staticClass: "text-nowrap" }, [
                  _vm._v("\n        " + _vm._s(data.value) + "\n      "),
                ]),
              ]
            },
          },
          {
            key: "cell(balance)",
            fn: function (data) {
              return [
                data.value === 0
                  ? [
                      _c(
                        "b-badge",
                        { attrs: { pill: "", variant: "light-success" } },
                        [_vm._v("\n          Paid\n        ")]
                      ),
                    ]
                  : [_vm._v("\n        " + _vm._s(data.value) + "\n      ")],
              ]
            },
          },
          {
            key: "cell(actions)",
            fn: function (data) {
              return [
                _c(
                  "div",
                  { staticClass: "text-nowrap" },
                  [
                    _c("feather-icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        id: "invoice-row-" + data.item.id + "-send-icon",
                        icon: "SendIcon",
                        size: "16",
                      },
                    }),
                    _vm._v(" "),
                    _c("b-tooltip", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        title: "Send Invoice",
                        target: "invoice-row-" + data.item.id + "-send-icon",
                      },
                    }),
                    _vm._v(" "),
                    _c("feather-icon", {
                      staticClass: "mx-1",
                      attrs: {
                        id: "invoice-row-" + data.item.id + "-preview-icon",
                        icon: "EyeIcon",
                        size: "16",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$router.push({
                            name: "apps-invoice-preview",
                            params: { id: data.item.id },
                          })
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("b-tooltip", {
                      attrs: {
                        title: "Preview Invoice",
                        target: "invoice-row-" + data.item.id + "-preview-icon",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        attrs: {
                          variant: "link",
                          "toggle-class": "p-0",
                          "no-caret": "",
                          right: _vm.$store.state.appConfig.isRTL,
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "button-content",
                              fn: function () {
                                return [
                                  _c("feather-icon", {
                                    staticClass: "align-middle text-body",
                                    attrs: {
                                      icon: "MoreVerticalIcon",
                                      size: "16",
                                    },
                                  }),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          [
                            _c("feather-icon", {
                              attrs: { icon: "DownloadIcon" },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Download"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              to: {
                                name: "apps-invoice-edit",
                                params: { id: data.item.id },
                              },
                            },
                          },
                          [
                            _c("feather-icon", { attrs: { icon: "EditIcon" } }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Edit"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TrashIcon" },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Delete"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          [
                            _c("feather-icon", { attrs: { icon: "CopyIcon" } }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Duplicate"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mx-2 mb-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-center justify-content-sm-start",
                  attrs: { cols: "12", sm: "6" },
                },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Showing " +
                        _vm._s(_vm.dataMeta.from) +
                        " to " +
                        _vm._s(_vm.dataMeta.to) +
                        " of " +
                        _vm._s(_vm.dataMeta.of) +
                        " entries"
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-center justify-content-sm-end",
                  attrs: { cols: "12", sm: "6" },
                },
                [
                  _c("b-pagination", {
                    staticClass: "mb-0 mt-1 mt-sm-0",
                    attrs: {
                      "total-rows": _vm.totalInvoices,
                      "per-page": _vm.perPage,
                      "first-number": "",
                      "last-number": "",
                      "prev-class": "prev-item",
                      "next-class": "next-item",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "prev-text",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronLeftIcon", size: "18" },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "next-text",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronRightIcon", size: "18" },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function ($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage",
                    },
                  }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "section",
    { attrs: { id: "dashboard-analytics" } },
    [_c("b-row", { staticClass: "match-height" })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-app-design" },
        [
          _c("b-badge", { attrs: { variant: "light-primary" } }, [
            _vm._v("\n    " + _vm._s(_vm.data.date) + "\n  "),
          ]),
          _vm._v(" "),
          _c("b-card-title", { staticClass: "mt-1 mb-75" }, [
            _vm._v("\n    " + _vm._s(_vm.data.title) + "\n  "),
          ]),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "font-small-2 mb-2" }, [
            _vm._v("\n    " + _vm._s(_vm.data.subtitle) + "\n  "),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "design-group" },
            [
              _c("h6", { staticClass: "section-label" }, [
                _vm._v("\n      Team\n    "),
              ]),
              _vm._v(" "),
              _vm._l(_vm.data.teams, function (team) {
                return _c(
                  "b-badge",
                  {
                    key: team.color,
                    staticClass: "mr-1",
                    attrs: { variant: team.color },
                  },
                  [_vm._v("\n      " + _vm._s(team.name) + "\n    ")]
                )
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "design-group" },
            [
              _c("h6", { staticClass: "section-label" }, [
                _vm._v("\n      Members\n    "),
              ]),
              _vm._v(" "),
              _vm._l(_vm.data.members, function (member, index) {
                return _c("b-avatar", {
                  key: index,
                  staticClass: "mr-1",
                  attrs: {
                    variant: member.color,
                    text: member.text,
                    src: member.img,
                    size: "34",
                  },
                })
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "design-planning-wrapper" },
            _vm._l(_vm.data.planing, function (plan) {
              return _c(
                "div",
                { key: plan.title, staticClass: "design-planning" },
                [
                  _c("p", { staticClass: "card-text mb-25" }, [
                    _vm._v("\n        " + _vm._s(plan.title) + "\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mb-0" }, [
                    _vm._v("\n        " + _vm._s(plan.subtitle) + "\n      "),
                  ]),
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 255, 255, 0.15)",
                  expression: "'rgba(255, 255, 255, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "primary", block: "" },
            },
            [_vm._v("\n    Join Team\n  ")]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        [
          _c(
            "b-row",
            { staticClass: "pb-50" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex justify-content-between flex-column mt-1 mt-sm-0",
                  attrs: { sm: "6", "order-sm": "1", order: "2" },
                },
                [
                  _c(
                    "div",
                    [
                      _c("h2", { staticClass: "font-weight-bolder mb-25" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.kFormatter(_vm.data.sessions)) +
                            "\n        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-card-text",
                        { staticClass: "font-weight-bold mb-2" },
                        [_vm._v("\n          Avg Sessions\n        ")]
                      ),
                      _vm._v(" "),
                      _c("h5", { staticClass: "font-medium-2" }, [
                        _c("span", { staticClass: "text-success mr-50" }, [
                          _vm._v(_vm._s(_vm.data.growth)),
                        ]),
                        _vm._v(" "),
                        _c("span", [_vm._v("vs last 7 days")]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "shadow",
                      attrs: { variant: "primary" },
                    },
                    [
                      _c("span", [_vm._v("View Details ")]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        attrs: { icon: "ChevronsRightIcon" },
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
                {
                  staticClass:
                    "d-flex justify-content-between flex-column text-right",
                  attrs: { sm: "6", cols: "12", "order-sm": "2", order: "1" },
                },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "chart-dropdown",
                          attrs: {
                            text: "Last 7 Days",
                            variant: "transparent",
                            left: "",
                            "no-caret": "",
                            size: "sm",
                          },
                        },
                        _vm._l(_vm.data.lastDays, function (day) {
                          return _c("b-dropdown-item", { key: day }, [
                            _vm._v(
                              "\n            " + _vm._s(day) + "\n          "
                            ),
                          ])
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "bar",
                      height: "200",
                      options: _vm.salesBar.chartOptions,
                      series: _vm.data.salesBar.series,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "avg-sessions pt-50" },
            [
              _c(
                "b-col",
                { staticClass: "mb-2", attrs: { cols: "6" } },
                [
                  _c("b-card-text", { staticClass: "mb-50" }, [
                    _vm._v(
                      "\n        Goal: $" + _vm._s(_vm.data.goal) + "\n      "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-progress", {
                    attrs: { value: "50", max: "100", height: "6px" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mb-2", attrs: { cols: "6" } },
                [
                  _c("b-card-text", { staticClass: "mb-50" }, [
                    _vm._v(
                      "\n        Users: " +
                        _vm._s(_vm.kFormatter(_vm.data.users)) +
                        "\n      "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-progress", {
                    attrs: {
                      value: "60",
                      max: "100",
                      height: "6px",
                      variant: "warning",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "6" } },
                [
                  _c("b-card-text", { staticClass: "mb-50" }, [
                    _vm._v(
                      "\n        Retention: " +
                        _vm._s(_vm.data.retention) +
                        "%\n      "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mt-25",
                    attrs: {
                      value: "70",
                      max: "100",
                      height: "6px",
                      variant: "danger",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "6" } },
                [
                  _c("b-card-text", { staticClass: "mb-50" }, [
                    _vm._v(
                      "\n        Duration: " +
                        _vm._s(_vm.data.duration) +
                        "yr\n      "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-progress", {
                    staticClass: "mt-25",
                    attrs: {
                      value: "90",
                      max: "100",
                      variant: "success",
                      height: "6px",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        {
          staticClass: "card card-congratulations",
          attrs: { "text-variant": "center" },
        },
        [
          _c("b-img", {
            staticClass: "congratulations-img-left",
            attrs: { src: __webpack_require__(/*! @/assets/images/elements/decore-left.png */ "./resources/js/src/assets/images/elements/decore-left.png") },
          }),
          _vm._v(" "),
          _c("b-img", {
            staticClass: "congratulations-img-right",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/elements/decore-right.png */ "./resources/js/src/assets/images/elements/decore-right.png"),
            },
          }),
          _vm._v(" "),
          _c(
            "b-avatar",
            {
              staticClass: "shadow mb-2",
              attrs: { variant: "primary", size: "70" },
            },
            [_c("feather-icon", { attrs: { size: "28", icon: "AwardIcon" } })],
            1
          ),
          _vm._v(" "),
          _c("h1", { staticClass: "mb-1 mt-50 text-white" }, [
            _vm._v("\n    Congratulations " + _vm._s(_vm.data.name) + ",\n  "),
          ]),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "m-auto w-75" }, [
            _vm._v("\n    You have done "),
            _c("strong", [_vm._v(_vm._s(_vm.data.saleToday) + "%")]),
            _vm._v(
              " more sales today. Check your new badge in your profile.\n  "
            ),
          ]),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            { staticClass: "align-items-baseline" },
            [
              _c(
                "div",
                [
                  _c("b-card-title", [_vm._v("Sales")]),
                  _vm._v(" "),
                  _c("b-card-text", { staticClass: "mb-0" }, [
                    _vm._v("\n        Last 6 months\n      "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "chart-dropdown",
                  attrs: {
                    variant: "link",
                    "no-caret": "",
                    right: "",
                    "toggle-class": "p-0",
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "button-content",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              staticClass: "text-body cursor-pointer",
                              attrs: { icon: "MoreVerticalIcon", size: "18" },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    592634808
                  ),
                },
                [
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last 28 Days\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last Year\n      "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "div",
                { staticClass: "d-inline-flex align-items-center mr-2" },
                [
                  _c("feather-icon", {
                    staticClass: "text-primary mr-50",
                    attrs: { icon: "CircleIcon" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Sales")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-inline-flex align-items-center" },
                [
                  _c("feather-icon", {
                    staticClass: "text-info mr-50",
                    attrs: { icon: "CircleIcon" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Visits")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("vue-apex-charts", {
                attrs: {
                  type: "radar",
                  height: "275",
                  options: _vm.statisticsRadar.chartOptions,
                  series: _vm.data.series,
                },
              }),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            { staticClass: "pb-0" },
            [
              _c("b-card-title", [_vm._v(_vm._s(_vm.data.title))]),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "chart-dropdown",
                  attrs: {
                    "no-caret": "",
                    right: "",
                    text: "Last 7 Days",
                    variant: "transparent",
                    "toggle-class": "p-50",
                    size: "sm",
                  },
                },
                _vm._l(_vm.data.lastDays, function (day) {
                  return _c("b-dropdown-item", { key: day }, [
                    _vm._v("\n        " + _vm._s(day) + "\n      "),
                  ])
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "d-flex flex-column flex-wrap text-center",
                      attrs: { sm: "2" },
                    },
                    [
                      _c(
                        "h1",
                        {
                          staticClass:
                            "font-large-2 font-weight-bolder mt-2 mb-0",
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.data.totalTicket) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("Tickets")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "d-flex justify-content-center",
                      attrs: { sm: "10" },
                    },
                    [
                      _c("vue-apex-charts", {
                        attrs: {
                          type: "radialBar",
                          height: "270",
                          options: _vm.supportTrackerRadialBar.chartOptions,
                          series: _vm.data.supportTrackerRadialBar.series,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex justify-content-between" }, [
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c("b-card-text", { staticClass: "mb-50" }, [
                      _vm._v("\n          New Tickets\n        "),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-large-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.data.newTicket))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c("b-card-text", { staticClass: "mb-50" }, [
                      _vm._v("\n          Open Tickets\n        "),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-large-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.data.openTicket))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c("b-card-text", { staticClass: "mb-50" }, [
                      _vm._v("\n          Response Time\n        "),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-large-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.data.responseTime) + "d")]
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", { staticClass: "ml-25" }, [
                _vm._v("\n      User Timeline\n    "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "app-timeline",
                [
                  _c(
                    "app-timeline-item",
                    { attrs: { variant: "primary" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1",
                        },
                        [
                          _c("h6", [_vm._v(_vm._s(_vm.data.step1.title))]),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass:
                                "timeline-item-time text-nowrap text-muted ml-1",
                            },
                            [_vm._v(_vm._s(_vm.data.step1.duration))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.data.step1.subtitle))]),
                      _vm._v(" "),
                      _c(
                        "b-media",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-media-aside",
                            { staticClass: "mr-1" },
                            [
                              _c("b-img", {
                                attrs: {
                                  src: _vm.data.step1.img,
                                  height: "23",
                                  alt: _vm.data.step1.fileName,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-media-body", { staticClass: "my-auto" }, [
                            _c("h6", { staticClass: "media-body mb-0" }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.data.step1.fileName) +
                                  "\n            "
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "app-timeline-item",
                    { attrs: { variant: "warning" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1",
                        },
                        [
                          _c("h6", [_vm._v(_vm._s(_vm.data.step2.title))]),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass:
                                "timeline-item-time text-nowrap text-muted ml-1",
                            },
                            [_vm._v(_vm._s(_vm.data.step2.duration))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.data.step2.subtitle))]),
                      _vm._v(" "),
                      _c(
                        "b-media",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-media-aside",
                            { staticClass: "mr-50" },
                            [
                              _c("b-avatar", {
                                attrs: {
                                  src: _vm.data.step2.avatar,
                                  size: "38",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-media-body", { staticClass: "my-auto" }, [
                            _c("h6", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.data.step2.avatarName) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.data.step2.occupation) +
                                  "\n            "
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "app-timeline-item",
                    { attrs: { variant: "info" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1",
                        },
                        [
                          _c("h6", [_vm._v(_vm._s(_vm.data.step3.title))]),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass:
                                "timeline-item-time text-nowrap text-muted ml-1",
                            },
                            [_vm._v(_vm._s(_vm.data.step3.duration))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.data.step3.subtitle))]),
                      _vm._v(" "),
                      _c(
                        "b-avatar-group",
                        { attrs: { size: "35px" } },
                        _vm._l(_vm.data.step3.avatars, function (avatar) {
                          return _c("b-avatar", {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover.top",
                                value: "Tooltip!",
                                expression: "'Tooltip!'",
                                modifiers: { hover: true, top: true },
                              },
                            ],
                            key: avatar.userImg,
                            staticClass: "pull-up",
                            attrs: { src: avatar.userImg },
                          })
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("app-timeline-item", {
                    attrs: {
                      title: _vm.data.step4.title,
                      subtitle: _vm.data.step4.subtitle,
                      time: _vm.data.step4.duration,
                      variant: "danger",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimeline.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTimeline.vue?vue&type=template&id=23873c70&scoped=true& */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true&");
/* harmony import */ var _AppTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTimeline.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23873c70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-timeline/AppTimeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=style&index=0&id=23873c70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_style_index_0_id_23873c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimeline.vue?vue&type=template&id=23873c70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimeline.vue?vue&type=template&id=23873c70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimeline_vue_vue_type_template_id_23873c70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true& */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true&");
/* harmony import */ var _AppTimelineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTimelineItem.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppTimelineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "683ea3ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-timeline/AppTimelineItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimelineItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=style&index=0&id=683ea3ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_style_index_0_id_683ea3ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue?vue&type=template&id=683ea3ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTimelineItem_vue_vue_type_template_id_683ea3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e&");
/* harmony import */ var _StatisticCardWithAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticCardWithAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticCardWithAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardWithAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardWithAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardWithAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardWithAreaChart.vue?vue&type=template&id=6a664f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardWithAreaChart_vue_vue_type_template_id_6a664f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/chartOptions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/chartOptions.js ***!
  \****************************************************************************/
/*! exports provided: areaChartOptions, lineChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartOptions", function() { return areaChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptions", function() { return lineChartOptions; });
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

var areaChartOptions = {
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  chart: {
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2.5
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 80, 100]
    }
  },
  xaxis: {
    type: 'numeric',
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [{
    y: 0,
    offsetX: 0,
    offsetY: 0,
    padding: {
      left: 0,
      right: 0
    }
  }],
  tooltip: {
    x: {
      show: false
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      color: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].primary,
      shadeTo: 'light',
      shadeIntensity: 0.65
    }
  }
};
var lineChartOptions = {
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  chart: {
    type: 'line',
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 4,
      opacity: 0.1
    },
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  xaxis: {
    type: 'numeric'
  },
  colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].primary],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#A9A2F6'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  },
  markers: {
    size: 0,
    hover: {
      size: 5
    }
  },
  tooltip: {
    x: {
      show: false
    }
  }
};

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834b2fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/utils/filter.js":
/*!************************************************!*\
  !*** ./resources/js/src/@core/utils/filter.js ***!
  \************************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/utils/utils.js");











var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/calendar.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/calendar.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");











var date = new Date();
var nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // prettier-ignore

var nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1); // prettier-ignore

var prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);
var data = {
  events: [{
    id: 1,
    url: '',
    title: 'Design Review',
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 2,
    url: '',
    title: 'Meeting With Client',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 3,
    url: '',
    title: 'Family Trip',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: 'Holiday'
    }
  }, {
    id: 4,
    url: '',
    title: "Doctor's Appointment",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }, {
    id: 5,
    url: '',
    title: 'Dart Game?',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'ETC'
    }
  }, {
    id: 6,
    url: '',
    title: 'Meditation',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }, {
    id: 7,
    url: '',
    title: 'Dinner',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Family'
    }
  }, {
    id: 8,
    url: '',
    title: 'Product Review',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 9,
    url: '',
    title: 'Monthly Meeting',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 10,
    url: '',
    title: 'Monthly Checkup',
    start: prevMonth,
    end: prevMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }]
}; // ------------------------------------------------
// GET: Return calendar events
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/calendar/events').reply(function (config) {
  // Get requested calendars as Array
  var calendars = config.params.calendars.split(',');
  return [200, data.events.filter(function (event) {
    return calendars.includes(event.extendedProps.calendar);
  })];
}); // ------------------------------------------------
// POST: Add new event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onPost('/apps/calendar/events').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      event = _JSON$parse.event;

  var length = data.events.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.events[length - 1].id;
  }

  event.id = lastIndex + 1;
  data.events.push(event);
  return [201, {
    event: event
  }];
}); // ------------------------------------------------
// POST: Update Event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onPost(/\/apps\/calendar\/events\/\d+/).reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      eventData = _JSON$parse2.event; // Convert Id to number


  eventData.id = Number(eventData.id);
  var event = data.events.find(function (e) {
    return e.id === Number(eventData.id);
  });
  Object.assign(event, eventData);
  return [200, {
    event: event
  }];
}); // ------------------------------------------------
// DELETE: Remove Event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onDelete(/\/apps\/calendar\/events\/\d+/).reply(function (config) {
  // Get event id from URL
  var eventId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  eventId = Number(eventId);
  var eventIndex = data.events.findIndex(function (e) {
    return e.id === eventId;
  });
  data.events.splice(eventIndex, 1);
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/chat.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/chat.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");





var previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);
/* eslint-disable global-require */

var data = {
  profileUser: {
    id: 11,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png"),
    fullName: 'John Doe',
    role: 'admin',
    about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [{
    id: 1,
    fullName: 'Felecia Rower',
    role: 'Frontend Developer',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png"),
    status: 'offline'
  }, {
    id: 2,
    fullName: 'Adalberto Granzin',
    role: 'UI/UX Designer',
    about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png"),
    status: 'busy'
  }, {
    id: 3,
    fullName: 'Joaquina Weisenborn',
    role: 'Town planner',
    about: 'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png"),
    status: 'busy'
  }, {
    id: 4,
    fullName: 'Verla Morgano',
    role: 'Data scientist',
    about: 'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png"),
    status: 'online'
  }, {
    id: 5,
    fullName: 'Margot Henschke',
    role: 'Dietitian',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png"),
    status: 'busy'
  }, {
    id: 6,
    fullName: 'Sal Piggee',
    role: 'Marketing executive',
    about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png"),
    status: 'online'
  }, {
    id: 7,
    fullName: 'Miguel Guelff',
    role: 'Special educational needs teacher',
    about: 'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png"),
    status: 'online'
  }, {
    id: 8,
    fullName: 'Mauro Elenbaas',
    role: 'Advertising copywriter',
    about: 'Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png"),
    status: 'away'
  }, {
    id: 9,
    fullName: 'Bridgett Omohundro',
    role: 'Designer, television/film set',
    about: 'Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png"),
    status: 'offline'
  }, {
    id: 10,
    fullName: 'Zenia Jacobs',
    role: 'Building surveyor',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png"),
    status: 'away'
  }],
  chats: [{
    id: 1,
    userId: 2,
    unseenMsgs: 0,
    chat: [{
      message: 'Hi',
      time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Hello. How can I help You?',
      time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'Can I get details of my last transaction I made last month?',
      time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'We need to check if we can provide you such information.',
      time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'I will inform you as I get update on this.',
      time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'If it takes long you can mail me at my mail address.',
      time: dayBeforePreviousDay,
      senderId: 11
    }]
  }, {
    id: 2,
    userId: 1,
    unseenMsgs: 1,
    chat: [{
      message: "How can we help? We're here for you!",
      time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
      time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'It should be Bootstrap 4 compatible.',
      time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'Absolutely!',
      time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Modern admin is the responsive bootstrap 4 admin template.!',
      time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Looks clean and fresh UI.',
      time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: "It's perfect for my next project.",
      time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'How can I purchase it?',
      time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'Thanks, from ThemeForest.',
      time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'I will purchase it for sure. 👍',
      time: previousDay,
      senderId: 1
    }]
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet('/apps/chat/chats-and-contacts').reply(function () {
  var chatsContacts = data.chats.map(function (chat) {
    var contact = data.contacts.find(function (c) {
      return c.id === chat.userId;
    });
    contact.chat = {
      id: chat.id,
      unseenMsgs: chat.unseenMsgs,
      lastMessage: chat.chat[chat.chat.length - 1]
    };
    return contact;
  }).reverse();
  var profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  };
  return [200, {
    chatsContacts: chatsContacts,
    contacts: data.contacts,
    profileUser: profileUserData
  }];
}); // ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet('/apps/chat/users/profile-user').reply(function () {
  return [200, data.profileUser];
}); // ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet(/\/apps\/chat\/chats\/\d+/).reply(function (config) {
  // Get event id from URL
  var userId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  userId = Number(userId);
  var chat = data.chats.find(function (c) {
    return c.userId === userId;
  });
  if (chat) chat.unseenMsgs = 0;
  return [200, {
    chat: chat,
    contact: data.contacts.find(function (c) {
      return c.id === userId;
    })
  }];
}); // ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onPost(/\/apps\/chat\/chats\/\d+/).reply(function (config) {
  // Get user id from URL
  var contactId = Number(config.url.substring(config.url.lastIndexOf('/') + 1)); // Get event from post data

  var _JSON$parse = JSON.parse(config.data),
      message = _JSON$parse.message,
      senderId = _JSON$parse.senderId;

  var activeChat = data.chats.find(function (chat) {
    return chat.userId === contactId;
  });
  var newMessageData = {
    message: message,
    time: new Date(),
    senderId: senderId
  }; // If there's new chat for user create one

  var isNewChat = false;

  if (activeChat === undefined) {
    isNewChat = true;
    var length = data.chats.length;
    var lastId = data.chats[length - 1].id;
    data.chats.push({
      id: lastId + 1,
      userId: contactId,
      unseenMsgs: 0,
      chat: []
    });
    activeChat = data.chats[data.chats.length - 1];
  }

  activeChat.chat.push(newMessageData);
  var response = {
    newMessageData: newMessageData
  };
  if (isNewChat) response.chat = activeChat;
  return [201, response];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/eCommerce.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/eCommerce.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");













 // eslint-disable-next-line object-curly-newline


var nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var nextWeek = new Date(nextDay.getTime() + 7 * 24 * 60 * 60 * 1000);
/* eslint-disable global-require */

var data = {
  products: [{
    id: 1,
    name: 'VicTsing Wireless Mouse,',
    slug: 'vic-tsing-wireless-mouse-1',
    description: 'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
    brand: 'VicTsing',
    price: 10.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/27.png */ "./resources/js/src/assets/images/pages/eCommerce/27.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 2,
    name: 'Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses',
    slug: 'bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2',
    description: 'Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen',
    brand: 'Bose',
    price: 249.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/26.png */ "./resources/js/src/assets/images/pages/eCommerce/26.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 3,
    name: 'Willful Smart Watch for Men Women 2020,',
    slug: 'willful-smart-watch-for-men-women-2020-3',
    description: 'Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.',
    brand: 'Willful',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/25.png */ "./resources/js/src/assets/images/pages/eCommerce/25.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 4,
    name: 'Ronyes Unisex College Bag Bookbags for Women',
    slug: 'ronyes-unisex-college-bag-bookbags-for-women-4',
    description: 'Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging',
    brand: 'Ronyes',
    price: 23.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/24.png */ "./resources/js/src/assets/images/pages/eCommerce/24.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 5,
    name: 'Toshiba Canvio Advance 2TB Portable External Hard Drive',
    slug: 'toshiba-canvio-advance-2-tb-portable-external-hard-drive-5',
    description: 'Up to 3TB of storage capacity to store your growing files and content',
    brand: 'Toshiba',
    price: 69.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/23.png */ "./resources/js/src/assets/images/pages/eCommerce/23.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 6,
    name: 'Tile Pro - High Performance Bluetooth Tracker',
    slug: 'tile-pro-high-performance-bluetooth-tracker-6',
    description: 'FIND KEYS, BAGS & MORE -- Pro is our high-performance finder ideal for keys, backpacks, luggage or any other items you want to keep track of. The easy-to-use finder and free app work with iOS and Android.',
    brand: 'Tile',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/22.png */ "./resources/js/src/assets/images/pages/eCommerce/22.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 7,
    name: 'Bugani M90 Portable Bluetooth Speaker',
    slug: 'bugani-m90-portable-bluetooth-speaker-7',
    description: 'Bluetooth Speakers-The M90 Bluetooth speaker uses the latest Bluetooth 5.0 technology and the latest Bluetooth ATS chip, Connecting over Bluetooth in seconds to iPhone, iPad, Smart-phones, Tablets, Windows, and other Bluetooth devices.',
    brand: 'Bugani',
    price: 56.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/21.png */ "./resources/js/src/assets/images/pages/eCommerce/21.png"),
    hasFreeShipping: false,
    rating: 3
  }, {
    id: 8,
    name: 'PlayStation 4 Console',
    slug: 'play-station-4-console-8',
    description: 'All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.',
    brand: 'Sony',
    price: 339.95,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/20.png */ "./resources/js/src/assets/images/pages/eCommerce/20.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 9,
    name: 'Giotto 32oz Leakproof BPA Free Drinking Water',
    slug: 'giotto-32oz-leakproof-bpa-free-drinking-water-9',
    description: 'With unique inspirational quote and time markers on it,this water bottle is great for measuring your daily intake of water,reminding you stay hydrated and drink enough water throughout the day.A must have for any fitness goals including weight loss,appetite control and overall health.',
    brand: '3M',
    price: 16.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/19.png */ "./resources/js/src/assets/images/pages/eCommerce/19.png"),
    hasFreeShipping: true,
    rating: 4
  }, {
    id: 10,
    name: 'Oculus Quest All-in-one VR',
    slug: 'oculus-quest-all-in-one-vr-10',
    description: 'All-in-one VR: No PC. No wires. No limits. Oculus quest is an all-in-one gaming system built for virtual reality. Now you can play almost anywhere with just a VR headset and controllers. Oculus touch controllers: arm yourself with the award-winning Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game',
    brand: 'Oculus',
    price: 645.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/18.png */ "./resources/js/src/assets/images/pages/eCommerce/18.png"),
    hasFreeShipping: false,
    rating: 1
  }, {
    id: 11,
    name: 'Handbags for Women Large Designer bag',
    slug: 'handbags-for-women-large-designer-bag-11',
    description: 'Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business',
    brand: 'Hobo',
    price: 39.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/17.png */ "./resources/js/src/assets/images/pages/eCommerce/17.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 12,
    name: 'Adidas Mens Tech Response Shoes',
    slug: 'adidas-mens-tech-response-shoes-12',
    description: 'Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.',
    brand: 'Adidas',
    price: 54.59,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/16.png */ "./resources/js/src/assets/images/pages/eCommerce/16.png"),
    hasFreeShipping: false,
    rating: 5
  }, {
    id: 13,
    name: 'Laptop Bag',
    slug: 'laptop-bag-13',
    description: 'TSA FRIENDLY- A separate DIGI SMART compartment can hold 15.6 inch Laptop as well as 15 inch, 14 inch Macbook, 12.9 inch iPad, and tech accessories like charger for quick TSA checkpoint when traveling',
    brand: 'TAS',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/15.png */ "./resources/js/src/assets/images/pages/eCommerce/15.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 14,
    name: 'Wireless Charger 5W Max',
    slug: 'wireless-charger-5-w-max-14',
    description: 'Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.',
    brand: '3M',
    price: 10.83,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/14.png */ "./resources/js/src/assets/images/pages/eCommerce/14.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 15,
    name: 'Vankyo leisure 3 mini projector',
    slug: '3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15',
    description: 'SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.',
    brand: 'Vankyo Store',
    price: 99.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/13.png */ "./resources/js/src/assets/images/pages/eCommerce/13.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 16,
    name: 'New Apple iPad Pro',
    slug: '3-m-hoover-y-z-pet-micro-allergen-vacuum-bag-for-select-hoover-vacuums-3-pack-16',
    description: 'Up to 10 hours of surﬁng the web on Wi‑Fi, watching video, or listening to music. Up to 9 hours of surﬁng the web using cellular data network, Compatible with Smart Keyboard Folio and Bluetooth keyboards',
    brand: 'Apple',
    price: 799.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/12.png */ "./resources/js/src/assets/images/pages/eCommerce/12.png"),
    hasFreeShipping: false,
    rating: 3
  }, {
    id: 17,
    name: 'Nike Air Max',
    slug: '72-9301-speaker-wire-harness-adapter-for-most-plymouth-dodge-and-mitsubishi-vehicles-multi-17',
    description: 'With a bold application of colorblocking inspired by modern art styles, the Nike Air Max 270 React sneaker is constructed with layers of lightweight material to achieve its artful look and comfortable feel.',
    brand: 'Nike',
    price: 81.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/11.png */ "./resources/js/src/assets/images/pages/eCommerce/11.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 18,
    name: 'Logitech K380 Wireless Keyboard',
    slug: 'acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18',
    description: 'Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.',
    brand: 'Logitech',
    price: 81.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/10.png */ "./resources/js/src/assets/images/pages/eCommerce/10.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 19,
    name: 'OnePlus 7 Pro ',
    slug: 'one-plus-7-pro-19',
    brand: 'Philips',
    price: 14.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/9.png */ "./resources/js/src/assets/images/pages/eCommerce/9.png"),
    hasFreeShipping: false,
    rating: 4,
    description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but\u2019s it\u2019s also very heavy. The Nebula Blue variant looks slick but it\u2019s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch \u2018Fluid AMOLED\u2019 display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
  }, {
    id: 20,
    name: 'Sony 4K Ultra HD LED TV ',
    slug: 'sony-4-k-ultra-hd-led-tv-20',
    brand: 'Apple',
    price: 7999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/8.png */ "./resources/js/src/assets/images/pages/eCommerce/8.png"),
    hasFreeShipping: false,
    rating: 5,
    description: "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality\n    and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI.\n    You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
  }, {
    id: 21,
    name: 'Google - Google Home - White/Slate fabric',
    slug: 'google-google-home-white-slate-fabric-21',
    brand: 'Google',
    price: 129.29,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/7.png */ "./resources/js/src/assets/images/pages/eCommerce/7.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use\n    voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with\n    Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest."
  }, {
    id: 22,
    name: 'Switch Pro Controller',
    slug: 'switch-pro-controller-22',
    brand: 'Sharp',
    price: 429.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/6.png */ "./resources/js/src/assets/images/pages/eCommerce/6.png"),
    hasFreeShipping: false,
    rating: 3,
    description: "The Nintendo Switch Pro Controller is one of the priciest \"baseline\" controllers in the current console\n    generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features\n    impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an\n    adapter to use it with your PC."
  }, {
    id: 23,
    name: 'Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver',
    slug: 'apple-mac-book-air-latest-model-13-3-display-silver-23',
    brand: 'Apple',
    price: 999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/5.png */ "./resources/js/src/assets/images/pages/eCommerce/5.png"),
    hasFreeShipping: false,
    rating: 4,
    description: "MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a\n    fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin,\n    light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there,\n    better."
  }, {
    id: 24,
    name: 'OneOdio A71 Wired Headphones',
    slug: 'one-odio-a71-wired-headphones-24',
    brand: 'OneOdio',
    price: 49.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/4.png */ "./resources/js/src/assets/images/pages/eCommerce/4.png"),
    hasFreeShipping: true,
    rating: 3,
    description: "Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business,\n    podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice\n    activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device\n    turns any home into a smart device on a smartphone or tablet."
  }, {
    id: 25,
    name: 'Apple iMac 27-inch',
    slug: 'apple-i-mac-27-inch-25',
    brand: 'Apple',
    price: 999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/3.png */ "./resources/js/src/assets/images/pages/eCommerce/3.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "The all-in-one for all. If you can dream it, you can do it on iMac. It\u2019s beautifully & incredibly intuitive and\n    packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the\n    experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video\n    capabilities, and an even more stunning Retina 5K display. It\u2019s the desktop that does it all \u2014 better and faster\n    than ever."
  }, {
    id: 26,
    name: 'Apple iPhone 11 (64GB, Black)',
    slug: 'apple-i-phone-11-64-gb-black-26',
    brand: 'Apple',
    price: 669.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/2.png */ "./resources/js/src/assets/images/pages/eCommerce/2.png"),
    hasFreeShipping: true,
    rating: 5,
    description: "The Apple iPhone 11 is a great smartphone, which was loaded with a lot of quality features. It comes with a\n    waterproof and dustproof body which is the key attraction of the device. The excellent set of cameras offer\n    excellent images as well as capable of recording crisp videos. However, expandable storage and a fingerprint\n    scanner would have made it a perfect option to go for around this price range."
  }, {
    id: 27,
    name: 'Apple Watch Series 5',
    slug: 'apple-watch-series-5-27',
    brand: 'Apple',
    price: 339.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/1.png */ "./resources/js/src/assets/images/pages/eCommerce/1.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "On Retina display that never sleeps, so it\u2019s easy to see the time and other important information, without\n    raising or tapping the display. New location features, from a built-in compass to current elevation, help users\n    better navigate their day, while international emergency calling1 allows customers to call emergency services\n    directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available\n    in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
  }],
  userWishlist: [{
    id: 1,
    productId: 26
  }, {
    id: 2,
    productId: 23
  }, {
    id: 3,
    productId: 11
  }, {
    id: 4,
    productId: 10
  }, {
    id: 5,
    productId: 5
  }, {
    id: 6,
    productId: 8
  }, {
    id: 7,
    productId: 9
  }, {
    id: 8,
    productId: 13
  }, {
    id: 9,
    productId: 17
  }],
  userCart: [{
    id: 1,
    productId: 27,
    qty: 1
  }, {
    id: 2,
    productId: 21,
    qty: 1
  }, {
    id: 3,
    productId: 26,
    qty: 1
  }, {
    id: 4,
    productId: 25,
    qty: 1
  }, {
    id: 5,
    productId: 23,
    qty: 1
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/products').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'featured' : _config$params$sortBy,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 9 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page;
  var queryLowered = q.toLowerCase();
  var filteredData = data.products.filter(function (product) {
    return product.name.toLowerCase().includes(queryLowered);
  });
  var sortDesc = false;

  var sortByKey = function () {
    if (sortBy === 'price-desc') {
      sortDesc = true;
      return 'price';
    }

    if (sortBy === 'price-asc') {
      return 'price';
    }

    sortDesc = true;
    return 'id';
  }();

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["sortCompare"])(sortByKey));
  if (sortDesc) sortedData.reverse();
  var paginatedData = JSON.parse(JSON.stringify(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["paginateArray"])(sortedData, perPage, page)));
  paginatedData.forEach(function (product) {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    /* eslint-enable */
  });
  return [200, {
    products: paginatedData,
    total: filteredData.length,
    userWishlist: data.userWishlist,
    userCart: data.userCart
  }];
}); // ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet(/\/apps\/ecommerce\/products\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.products.findIndex(function (p) {
    return p.id === productId;
  });
  var product = data.products[productIndex];

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1; // * Add Dummy data for details page

    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info'];
    return [200, {
      product: product
    }];
  }

  return [404];
}); // ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/wishlist').reply(function () {
  var products = data.userWishlist.map(function (wishlistProduct) {
    var product = data.products.find(function (p) {
      return p.id === wishlistProduct.productId;
    });
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === wishlistProduct.productId;
    }) > -1;
    return product;
  });
  return [200, {
    products: products
  }];
}); // ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/cart').reply(function () {
  var products = data.userCart.map(function (cartProduct) {
    var product = data.products.find(function (p) {
      return p.id === cartProduct.productId;
    }); // Other data

    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === cartProduct.productId;
    }) > -1;
    product.qty = cartProduct.qty;
    product.shippingDate = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["randomDate"])(nextDay, nextWeek);
    product.offers = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["getRandomInt"])(1, 4);
    product.discountPercentage = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["getRandomInt"])(3, 20);
    return product;
  });
  return [200, {
    products: products
  }];
}); // ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onPost('/apps/ecommerce/cart').reply(function (config) {
  // Get product from post data
  var _JSON$parse = JSON.parse(config.data),
      productId = _JSON$parse.productId;

  var length = data.userCart.length;
  var lastId = 0;
  if (length) lastId = data.userCart[length - 1].i;
  data.userCart.push({
    id: lastId + 1,
    productId: productId,
    qty: 1
  });
  return [201];
}); // ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.userCart.findIndex(function (i) {
    return i.productId === productId;
  });
  if (productIndex > -1) data.userCart.splice(productIndex, 1);
  return [200];
}); // ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onPost('/apps/ecommerce/wishlist').reply(function (config) {
  // Get product from post data
  var _JSON$parse2 = JSON.parse(config.data),
      productId = _JSON$parse2.productId;

  var length = data.userWishlist.length;
  var lastId = 0;
  if (length) lastId = data.userWishlist[length - 1].i;
  data.userWishlist.push({
    id: lastId + 1,
    productId: productId
  });
  return [201];
}); // ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.userWishlist.findIndex(function (i) {
    return i.productId === productId;
  });
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1);
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/email.js":
/*!******************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/email.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");








/* eslint-disable global-require */

var data = {
  emails: [{
    id: 1,
    from: {
      email: 'tommys@mail.com',
      name: 'Tommy Sicilia',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Theme Update',
    cc: [],
    bcc: [],
    message: '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
    attachments: [{
      fileName: 'log.txt',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/txt.png */ "./resources/js/src/assets/images/icons/txt.png"),
      url: '',
      size: '5mb'
    }, {
      fileName: 'performance.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '10mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 2,
    from: {
      email: 'tressag@mail.com',
      name: 'Tressa Gass',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Company Report',
    cc: ['vrushankbrahmshatriya@mail.com'],
    bcc: ['menka@mail.com'],
    message: ' <p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Tressa Gass</p>',
    attachments: [],
    isStarred: true,
    labels: ['company', 'private'],
    time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 3,
    from: {
      email: 'hettiem@mail.com',
      name: 'Hettie Mcerlean',
      avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }, {
      name: 'Pixinvent',
      email: 'hello@pixinvent.net'
    }],
    subject: 'Order Delivered',
    cc: [],
    bcc: [],
    message: '<p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Hettie Mcerlean</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 4,
    from: {
      email: 'louettae@mail.com',
      name: 'Louetta Esses',
      avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Waterfall Model Update',
    cc: [],
    bcc: [],
    message: '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
    attachments: [{
      fileName: 'report.doc',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      url: '',
      size: '32mb'
    }],
    isStarred: false,
    labels: ['important'],
    time: 'Mon Dec 11 2018 09:04:10 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 5,
    from: {
      email: 'bposvner0@zdnet.com',
      name: 'Bobbie Posvner',
      avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@dot.gov'
    }],
    subject: 'Re-contextualized zero administration toolset',
    cc: [],
    bcc: [],
    message: '<p>Hello John,</p><p>Epiboly henbill hemichorea composedness resequent hearthpenny racialization freeboard Reboulia Albuginaceae Violales Trisagion resinlike plumlet insalubrious Urocoptis Orthoceratidae ogmic plateaux reinsist preconsumption rattener venipuncture Rhadamanthine</p><p>perversely corpusculated theophoric uncemented weiring myolipoma gudesire dramatics trichomaphyte adventitious video polychaete glossorrhaphy bestially zoospore nonnotional sawbones unprejudiciable wali collaborative coppled shammish manless predisorder</p>',
    attachments: [],
    isStarred: true,
    labels: ['private'],
    time: 'Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 6,
    from: {
      email: 'rgilder1@illinois.edu',
      name: 'Rebecca Gilder',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@google.co.uk'
    }],
    subject: 'Integrated bi-directional help-desk',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>irretraceably indestructibility sisi fiddle pyretic Gerbera vocable hoped Chartreux thinglet whister fetiferous Guhayna overloud yuca suggestibly atmiatrics serioludicrous prehaustorium androgenic betulin chiropterite sprittail atrochal</p><p>stopper acinaceous bandcutter unprostituted undependableness Saffarid parasympathetic dishonorer embryogeny overscrupulous deicidal Tapuya roupily devotee alfet sophiologic hydrobromide onlook preverb Dottore primitial frostlike overbig Monocyclica</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: true
  }, {
    id: 7,
    from: {
      email: 'swilby2@yandex.ru',
      name: 'Shawn Wilby',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@altervista.org'
    }],
    subject: 'Devolved regional product',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>scalpellum unisometrical emend esotrope gether separatical passionwise cringe flawful annotinous jiboa thrombotic essoinment successional backrope oligohemia gitaligenin formulaic bradycinesia paralgesic eumycetic receptoral eyrie yearly</p><p>atomistical semischolastic clour discardment pseudelytron cheson path Bennet Herat pinchem Tho extravagantly shaking procidence flocker amidoketone gyric Moi petrolific clink immunization estrepement spalder poitrail</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Fri Dec 14 2018 04:49:23 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: true
  }, {
    id: 8,
    from: {
      email: 'wmannering3@mozilla.org',
      name: 'Waldemar Mannering',
      avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@sciencedaily.com'
    }],
    subject: 'Quality-focused methodical flexibility',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugatae</p><p>noumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk undreaded unadmired podometer</p>',
    attachments: [],
    isStarred: false,
    labels: ['private'],
    time: 'Tue Dec 15 2018 11:02:28 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 9,
    from: {
      email: 'hfrostdyke4@scientificamerican.com',
      name: 'Heath Frostdyke',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@weibo.com'
    }],
    subject: 'Secured optimal algorithm',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>prefertility volumetrical subdivision Alpinist hypostomous foreyard lede knuckling Agade viking protometallic unsting palaeobiologist trierarchic bigheartedness Slartibartfast tabitude popadam idioplasm fabulous arsenite cingle backhandedness denizenship</p><p>argo trickish dependingly unhouseled aegeriid ophthalmophlebotomy crazy freedwoman unspinsterlike clinical epistemologically hermodactyl humbugger misogynist plunder Sabbathly tabule feckless cerite porringer benumb duograph propatagian pressman</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 01 2018 18:31:19 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: false
  }, {
    id: 10,
    from: {
      email: 'pjentzsch5@tamu.edu',
      name: 'Paulita Jentzsch',
      avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@skype.com'
    }],
    subject: 'Profound user-facing frame',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>unstintedly septifarious prevalid implicative esere Kedarite Nekkar encampment Issedones Saururus Turkize Tshi misengrave lamnid benzamine rigidulous octonion hydrophilous coxalgic nasturtium epileptogenic biporose undenominationalism widu</p><p>melioration pager infiltrate plouky tribesmanship transudate heinous exhibitionistic klendusic lienocele tractate unemotioned castigate selenate appealable Palladianism chloracetate penna moellon detector halcyon amidofluorid damascene hollaite</p>',
    attachments: [{
      fileName: 'UtNulla.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '1mb'
    }],
    isStarred: true,
    labels: ['important'],
    time: 'Tue Jan 03 2018 08:05:33 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: false
  }, {
    id: 11,
    from: {
      email: 'lminghetti6@yale.edu',
      name: 'Lowell Minghetti',
      avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@fda.gov'
    }],
    subject: 'Reactive full-range encryption',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>Jaime stadimeter reshearer adfix exaristate herby chrysomonad ostentous Abrahamic Marsipobranchii skil linguodental relaster restbalk enhorror glycerizine foremelt difficultness Ostreidae Euphues panduriform howler Finmark primordality</p><p>semicurvilinear skeet sociogenetic dicephalism ghalva ethnicon katagenesis tasklike triachenium abuser henbane strubbly streetway Ramaism besetting saccos enzymically wickiup inopulent poetship Miranda hemianesthesia sphericle oariopathy</p>',
    attachments: [{
      fileName: 'ElementumLigula.js',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/js.png */ "./resources/js/src/assets/images/icons/js.png"),
      url: '',
      size: '29mb'
    }],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 03 2018 01:05:20 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: true
  }, {
    id: 12,
    from: {
      email: 'efinessy7@sbwire.com',
      name: 'Eugenie Finessy',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@odnoklassniki.ru'
    }],
    subject: 'Polarised holistic protocol',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>nonmotile generale punctated humanify escharine unlatch alrighty unshepherding standstill upcrane unilobular prefrontal primate fluviatic premundane tritocone compaternity dolina phonautographic cobby corse neurohypnotic cyrtopia wreathy</p><p>slanderousness Lemosi myxochondroma haemogram electrothermostat piperonyl spital reappeal pyopneumothorax Yunca eyoty forecourse extensive kickout germanization vigilant Criophoros muss aortostenosis Berchta phonophotoscopic precorrespondence rigidist castling</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Tue Jan 04 2018 21:26:54 GMT+0000 (GMT)',
    replies: [],
    folder: 'sent',
    isRead: true
  }, {
    id: 13,
    from: {
      email: 'tmckeurton8@163.com',
      name: 'Tadio McKeurton',
      avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@nifty.com'
    }],
    subject: 'Down-sized transitional intranet',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>calcimine gramineal nonfreezable interradial setula undertakable Abranchiata ultrasystematic spectroelectric Astarte Abraham bedsite enantiopathia exlex precoincident thiocarbamic mesenteriform daturism thioantimoniate tripudiate unsultry predynastic benzidino doxasticon</p><p>overstale confessory glossed jane smoodger modernization Dehkan progymnospermic gangliectomy volumenometry Paulinistically tippy Gelfomino hive preredemption coccygine horrendous unintrusted plainer interrelatedly tearer arrojadite incircumspectly yokemating</p>',
    attachments: [],
    isStarred: false,
    labels: ['important'],
    time: 'Tue Jan 05 2018 19:00:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: true
  }, {
    id: 14,
    from: {
      email: 'ebegg9@wikia.com',
      name: 'Eb Begg',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@51.la'
    }],
    subject: 'Organized value-added model',
    cc: [],
    bcc: [],
    message: '<p>Hello Sir, </p><p>Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardation</p><p>allocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimical oligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie larigo sociometry align</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 06 2018 23:12:13 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 15,
    from: {
      email: 'mspata@sina.com.cn',
      name: 'Modestine Spat',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@oracle.com'
    }],
    subject: 'Profound systemic alliance 🎉 🎊',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescent</p><p>cinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing crea venesector Cirrostomi</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 07 2018 12:25:03 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 16,
    from: {
      email: 'cprandob@rambler.ru',
      name: 'Chase Prando',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@vistaprint.com'
    }],
    subject: 'Centralized intermediate instruction set',
    cc: [],
    bcc: [],
    message: '<p>Respected Sir, </p><p>drainman merman pleurosteal slatted serenader Tantalus slodder cachalot guerdon flannelflower digestibility priggish loa monocarbide endive rented kelep pangamous gummata siris stockproof butlerism polycrystalline begetter</p><p>rack unpaining beglue astucious yardstick laniflorous tetrachloride avidious Biblicistic clival myosinogen antilobium unamiability unperforate Elaphurus wrapping deformity revocative kovil unwainscoted councilmanic saccharobiose federalize procellous</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 08 2018 00:36:40 GMT+0000 (GMT)',
    replies: [],
    folder: 'sent',
    isRead: true
  }, {
    id: 17,
    from: {
      email: 'nbartlesc@merriam-webster.com',
      name: 'Normand Bartles',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@si.edu'
    }],
    subject: 'Re-contextualized leading edge projection',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>orpine anidiomatic protoreptilian lacklusterness macromastia obstetricate Phaneroglossa tripleness laxatively hypophloeous ocellate sinoauricular porch lignitic miche strinkle hyperthyreosis tugui Alascan unrailroaded Cypriote vesuvian gradative hardener</p><p>forthink Locarno wattlework Nordicist formoxime demipriest medrick Lomentaria lucible Canossa Manatus anaplasty Spirochaete bonus overgown Amurru Skupshtina opisthorchiasis preworthy Brodie shortchange Nikko Gaviae crosscut</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Tue Jan 09 2018 22:06:50 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 18,
    from: {
      email: 'rgennd@dedecms.com',
      name: 'Robin Genn',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@about.com'
    }],
    subject: 'Team-oriented system-worthy intranet',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>balsamation teachableness enarthrodia dentilation superguarantee Yuapin schedulize antarctically biocoenotic unspottedly stinter admonitorily uncollatedness umquhile grayhead dephase stopgap evenglow photogenically desmacyte rink osiered specking ratwa</p><p>hospitize epithymetical montage rhapsodical Ninja superdramatist westerner clubionid haustellate Saltator rodding ophthalmomalacia concupiscibleness tingle hyperuresis Trigoniidae rearousal sanctimonial Munychia counterpaned exhibitable communer triadism Janiform</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 10 2018 01:51:24 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 19,
    from: {
      email: 'eramelote@webeden.co.uk',
      name: 'Emmalynn Ramelot',
      avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@tinypic.com'
    }],
    subject: 'Phased eco-centric architecture',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>hightoby Maja vindicatorship unglobe poduran bronchodilatation uncontorted underwarden cyclometric orgiacs tigerhearted upscale curatize Scylliorhinidae slick unisolated nanocephalous cuirassier heartwise Venusian titanitic requirement antirestoration toluido</p><p>Trematosaurus procreant ethos pessimistic antiselene pisk Amphipneusta anconad Corchorus unswabbed sizable Balanites sardonical shovelbill trammeler carpetwork rhexis remade myelinated right bounteous unsin retroduction Montanist</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 11 2018 14:25:46 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: false
  }, {
    id: 20,
    from: {
      email: 'pcuzenf@mediafire.com',
      name: 'Penni Cuzen',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@google.es'
    }],
    subject: 'Future-proofed motivating support',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>yonder secessionalist astringer Ovangangela overcumber supracaecal scutulate Aglaonema Pakawan citril unsubducted cavernal multivalve ladify Cichorium supplication flexion cricothyroidean picaro locally etiogenic timeously scalpeen sapropel</p><p>agglutinative hyperideation Flamandize antipragmatic wincer brachyphalangia forenotion Angloman ornamentation merch revulsed windingly tristate orgic sateless orseilline Anchietea pilferer aroid counselor forevermore kulmet maladventure haruspice</p>',
    attachments: [{
      fileName: 'Augue.js',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/js.png */ "./resources/js/src/assets/images/icons/js.png"),
      url: '',
      size: '4mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: 'Tue Jan 12 2018 04:16:10 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: false
  }, {
    id: 21,
    from: {
      email: 'abaldersong@utexas.edu',
      name: 'Ardis Balderson',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@ow.ly'
    }],
    subject: 'Focused impactful open system 📷 😃',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto Chelonia</p><p>Freudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose</p>',
    attachments: [],
    isStarred: true,
    labels: ['company'],
    time: new Date(new Date().getTime() - 7 * 60 * 60 * 1000),
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 22,
    from: {
      email: 'dmallallh@ask.com',
      name: 'Dagmar Mallall',
      avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@furl.net'
    }],
    subject: 'Function-based local productivity 💻',
    cc: [],
    bcc: [],
    message: '<p>Dear Consumer, </p><p>gibbed preconceptual passionwort Goanese confluence ungnaw aubepine coadjacency Romipetal isochronic convener overinsistently psammophyte colpenchyma unlogic instinctivist motorcab wellhole receptacle sinistrocular avifaunal decagram paramountness samhita</p><p>sphincterismus Aunjetitz vagabondage parallelotropism unreceipted io wheretoever semivolcanic Chlamydomonadidae spittlestaff spermatogenic Sephardi berrigan lowly grotesquerie Pentameridae unsuccessive archlexicographer Stephanian reimpatriate untossed beth ventriloquial dedicational</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: new Date(new Date().getTime() - 5 * 20 * 60 * 1000),
    replies: [],
    folder: 'draft',
    isRead: false
  }, {
    id: 23,
    from: {
      email: 'nmacgaughyi@aol.com',
      name: 'Nada MacGaughy',
      avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@cnet.com'
    }],
    subject: 'Compatible object-oriented policy ',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>miraculous pirijiri meekheartedness superoxygenation Elric paries epideictical Prajapati reassign stridlins spoach overreadily abusion sailmaking illiterately septangularness retinene Hler exceptionary ferberite possessionalist piperide Oschophoria beau</p><p>abnormalize yearnfulness Janiculum sixhaend abstemiousness uterogestation orchestrina gallotannin muckment melanoblast supercivilization inclusionist electroosmotically immatchable stomatoplastic satinity hydrogen unexorable quinamidine milksopism fascinating ratsbane endocline Zolaist</p>',
    attachments: [{
      fileName: 'Leo.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '33mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
    replies: [],
    folder: 'trash',
    isRead: false
  }, {
    id: 24,
    from: {
      email: 'douldcottj@yellowpages.com',
      name: 'Dalila Ouldcott',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@github.io'
    }],
    subject: 'User-friendly value-added application 😊',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>wellish laminable ineunt popshop catalyte prismatize campimetrical lentisk excluding portlet coccinellid impestation Bangash Lollardist perameloid procerebrum presume cashmerette washbasin nainsook Odontolcae Alea holcodont welted</p><p>cibarious terrifical uploop naphthaleneacetic containable nonsailor Zwinglian blighty benchful guar porch fallectomy building coinvolve eidolism warmth unclericalize seismographic recongeal ethanethial clog regicidal regainment legific</p>',
    attachments: [{
      fileName: 'example.doc',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      url: '',
      size: '21mb'
    }],
    isStarred: false,
    labels: ['personal'],
    time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
    replies: [{
      id: 25,
      from: {
        email: 'johndoe@mail.com',
        name: 'John Doe',
        avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
      },
      to: [{
        name: 'me',
        email: 'hettiem@mail.com'
      }],
      subject: '🎯 Focused impactful open system',
      cc: [],
      bcc: [],
      message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
      attachments: [],
      isStarred: false,
      labels: [],
      time: 'Mon Dec 10 2018 10:56:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false
    }, {
      id: 26,
      from: {
        email: 'hettiem@mail.com',
        name: 'Hettie Mcerlean',
        avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
      },
      to: [{
        name: 'me',
        email: 'johndoe@mail.com'
      }],
      subject: 'Profound systemic alliance 🎉 🎊',
      cc: [],
      bcc: [],
      message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
      attachments: [],
      isStarred: false,
      labels: [],
      time: 'Mon Dec 10 2018 11:25:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false
    }],
    folder: 'inbox',
    isRead: true
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/email/emails').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$folder = _config$params.folder,
      folder = _config$params$folder === void 0 ? 'inbox' : _config$params$folder,
      label = _config$params.label;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();

  function isInFolder(email) {
    if (folder === 'trash') return email.folder === 'trash';
    if (folder === 'starred') return email.isStarred && email.folder !== 'trash';
    return email.folder === (folder || email.folder) && email.folder !== 'trash'; // email.folder === (folder || email.folder)
    // if (filter === 'important') return task.isImportant && !task.isDeleted
    // if (filter === 'completed') return task.isCompleted && !task.isDeleted
    // if (filter === 'deleted') return task.isDeleted
    // return !task.isDeleted
  }

  var filteredData = data.emails.filter(function (email) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      email.subject.toLowerCase().includes(queryLowered) && isInFolder(email) && (label ? email.labels.includes(label) : true)
    );
  });
  /* eslint-enable  */
  // ------------------------------------------------
  // Email Meta
  // ------------------------------------------------

  var emailsMeta = {
    inbox: data.emails.filter(function (email) {
      return !email.isDeleted && !email.isRead && email.folder === 'inbox';
    }).length,
    draft: data.emails.filter(function (email) {
      return email.folder === 'draft';
    }).length,
    spam: data.emails.filter(function (email) {
      return !email.isDeleted && !email.isRead && email.folder === 'spam';
    }).length
  };
  return [200, {
    emails: filteredData.reverse(),
    emailsMeta: emailsMeta
  }];
}); // ------------------------------------------------
// POST: Update Email
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/email/update-emails').reply(function (config) {
  var _JSON$parse = JSON.parse(config.data),
      emailIds = _JSON$parse.emailIds,
      dataToUpdate = _JSON$parse.dataToUpdate;

  function updateMailData(email) {
    Object.assign(email, dataToUpdate);
  }

  data.emails.forEach(function (email) {
    if (emailIds.includes(email.id)) updateMailData(email);
  });
  return [200];
}); // ------------------------------------------------
// POST: Update Emails Label
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/email/update-emails-label').reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      emailIds = _JSON$parse2.emailIds,
      label = _JSON$parse2.label;

  function updateMailLabels(email) {
    var labelIndex = email.labels.indexOf(label);
    if (labelIndex === -1) email.labels.push(label);else email.labels.splice(labelIndex, 1);
  }

  data.emails.forEach(function (email) {
    if (emailIds.includes(email.id)) updateMailLabels(email);
  });
  return [200];
}); // ------------------------------------------------
// GET: Paginate Existing Email
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/email/paginate-email').reply(function (config) {
  var _config$params2 = config.params,
      dir = _config$params2.dir,
      emailId = _config$params2.emailId;
  var currentEmailIndex = data.emails.findIndex(function (e) {
    return e.id === emailId;
  });
  var newEmailIndex = dir === 'previous' ? currentEmailIndex - 1 : currentEmailIndex + 1;
  var newEmail = data.emails[newEmailIndex];
  return newEmail ? [200, newEmail] : [404];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/invoice.js":
/*!********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/invoice.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");












/* eslint-disable global-require */

var data = {
  invoices: [{
    id: 4987,
    issuedDate: '13 Dec 2019',
    client: {
      address: '7777 Mendez Plains',
      company: 'Hall-Robbins PLC',
      companyEmail: 'don85@johnson.com',
      country: 'USA',
      contact: '(616) 865-4180',
      name: 'Jordan Stevenson'
    },
    service: 'Software Development',
    total: 3428,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$724',
    dueDate: '23 Apr 2019'
  }, {
    id: 4988,
    issuedDate: '17 Jul 2019',
    client: {
      address: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      companyEmail: 'brenda49@taylor.info',
      country: 'Haiti',
      contact: '(226) 204-8287',
      name: 'Stephanie Burns'
    },
    service: 'UI/UX Design & Development',
    total: 5219,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '15 Dec 2019'
  }, {
    id: 4989,
    issuedDate: '19 Oct 2019',
    client: {
      address: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      companyEmail: 'smithtiffany@powers.com',
      country: 'Denmark',
      contact: '(955) 676-1076',
      name: 'Tony Herrera'
    },
    service: 'Unlimited Extended License',
    total: 3719,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '03 Nov 2019'
  }, {
    id: 4990,
    issuedDate: '06 Mar 2020',
    client: {
      address: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      companyEmail: 'mejiageorge@lee-perez.com',
      country: 'Cambodia',
      contact: '(832) 323-6914',
      name: 'Kevin Patton'
    },
    service: 'Software Development',
    total: 4749,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '11 Feb 2020'
  }, {
    id: 4991,
    issuedDate: '08 Feb 2020',
    client: {
      address: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      companyEmail: 'brandon07@pierce.com',
      country: 'Martinique',
      contact: '(970) 982-3353',
      name: 'Mrs. Julie Donovan MD'
    },
    service: 'UI/UX Design & Development',
    total: 4056,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Draft',
    balance: '$815',
    dueDate: '30 Jun 2019'
  }, {
    id: 4992,
    issuedDate: '26 Aug 2019',
    client: {
      address: '661 Perez Run Apt. 778',
      company: 'Burnett-Young PLC',
      companyEmail: 'guerrerobrandy@beasley-harper.com',
      country: 'Botswana',
      contact: '(511) 938-9617',
      name: 'Amanda Phillips'
    },
    service: 'UI/UX Design & Development',
    total: 2771,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '24 Jun 2019'
  }, {
    id: 4993,
    issuedDate: '17 Sep 2019',
    client: {
      address: '074 Long Union',
      company: 'Wilson-Lee LLC',
      companyEmail: 'williamshenry@moon-smith.com',
      country: 'Montserrat',
      contact: '(504) 859-2893',
      name: 'Christina Collier'
    },
    service: 'UI/UX Design & Development',
    total: 2713,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: '$407',
    dueDate: '22 Nov 2019'
  }, {
    id: 4994,
    issuedDate: '11 Feb 2020',
    client: {
      address: '5225 Ford Cape Apt. 840',
      company: 'Schwartz, Henry and Rhodes Group',
      companyEmail: 'margaretharvey@russell-murray.com',
      country: 'Oman',
      contact: '(758) 403-7718',
      name: 'David Flores'
    },
    service: 'Template Customization',
    total: 4309,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: '-$205',
    dueDate: '10 Feb 2020'
  }, {
    id: 4995,
    issuedDate: '26 Jan 2020',
    client: {
      address: '23717 James Club Suite 277',
      company: 'Henderson-Holder PLC',
      companyEmail: 'dianarodriguez@villegas.com',
      country: 'Cambodia',
      contact: '(292) 873-8254',
      name: 'Valerie Perez'
    },
    service: 'Software Development',
    total: 3367,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '24 Dec 2019'
  }, {
    id: 4996,
    issuedDate: '15 Jan 2020',
    client: {
      address: '4528 Myers Gateway',
      company: 'Page-Wise PLC',
      companyEmail: 'bwilson@norris-brock.com',
      country: 'Guam',
      contact: '(956) 803-2008',
      name: 'Susan Dickerson'
    },
    service: 'Software Development',
    total: 4776,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$305',
    dueDate: '02 Jun 2019'
  }, {
    id: 4997,
    issuedDate: '27 Sep 2019',
    client: {
      address: '4234 Mills Club Suite 107',
      company: 'Turner PLC Inc',
      companyEmail: 'markcampbell@bell.info',
      country: 'United States Virgin Islands',
      contact: '(716) 962-8635',
      name: 'Kelly Smith'
    },
    service: 'Unlimited Extended License',
    total: 3789,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '$666',
    dueDate: '18 Mar 2020'
  }, {
    id: 4998,
    issuedDate: '31 Jul 2019',
    client: {
      address: '476 Keith Meadow',
      company: 'Levine-Dorsey PLC',
      companyEmail: 'mary61@rosario.com',
      country: 'Syrian Arab Republic',
      contact: '(523) 449-0782',
      name: 'Jamie Jones'
    },
    service: 'Unlimited Extended License',
    total: 5200,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '17 Jan 2020'
  }, {
    id: 4999,
    issuedDate: '14 Feb 2020',
    client: {
      address: '56381 Ashley Village Apt. 332',
      company: 'Hall, Thompson and Ramirez LLC',
      companyEmail: 'sean22@cook.com',
      country: 'Ukraine',
      contact: '(583) 470-8356',
      name: 'Ruben Garcia'
    },
    service: 'Software Development',
    total: 4558,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '01 Oct 2019'
  }, {
    id: 5000,
    issuedDate: '21 May 2019',
    client: {
      address: '6946 Gregory Plaza Apt. 310',
      company: 'Lambert-Thomas Group',
      companyEmail: 'mccoymatthew@lopez-jenkins.net',
      country: 'Vanuatu',
      contact: '(366) 906-6467',
      name: 'Ryan Meyer'
    },
    service: 'Template Customization',
    total: 3503,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '22 May 2019'
  }, {
    id: 5001,
    issuedDate: '30 Jun 2019',
    client: {
      address: '64351 Andrew Lights',
      company: 'Gregory-Haynes PLC',
      companyEmail: 'novakshannon@mccarty-murillo.com',
      country: 'Romania',
      contact: '(320) 616-3915',
      name: 'Valerie Valdez'
    },
    service: 'Unlimited Extended License',
    total: 5285,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$202',
    dueDate: '02 Aug 2019'
  }, {
    id: 5002,
    issuedDate: '21 Jun 2019',
    client: {
      address: '5702 Sarah Heights',
      company: 'Wright-Schmidt LLC',
      companyEmail: 'smithrachel@davis-rose.net',
      country: 'Costa Rica',
      contact: '(435) 899-1963',
      name: 'Melissa Wheeler'
    },
    service: 'UI/UX Design & Development',
    total: 3668,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$731',
    dueDate: '15 Dec 2019'
  }, {
    id: 5003,
    issuedDate: '30 Dec 2019',
    client: {
      address: '668 Robert Flats',
      company: 'Russell-Abbott Ltd',
      companyEmail: 'scott96@mejia.net',
      country: 'Congo',
      contact: '(254) 399-4728',
      name: 'Alan Jimenez'
    },
    service: 'Unlimited Extended License',
    total: 4372,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: '-$344',
    dueDate: '17 Sep 2019'
  }, {
    id: 5004,
    issuedDate: '27 May 2019',
    client: {
      address: '55642 Chang Extensions Suite 373',
      company: 'Williams LLC Inc',
      companyEmail: 'cramirez@ross-bass.biz',
      country: 'Saint Pierre and Miquelon',
      contact: '(648) 500-4338',
      name: 'Jennifer Morris'
    },
    service: 'Template Customization',
    total: 3198,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$253',
    dueDate: '16 Aug 2019'
  }, {
    id: 5005,
    issuedDate: '30 Jul 2019',
    client: {
      address: '56694 Eric Orchard',
      company: 'Hudson, Bell and Phillips PLC',
      companyEmail: 'arielberg@wolfe-smith.com',
      country: 'Uruguay',
      contact: '(896) 544-3796',
      name: 'Timothy Stevenson'
    },
    service: 'Unlimited Extended License',
    total: 5293,
    avatar: '',
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '01 Aug 2019'
  }, {
    id: 5006,
    issuedDate: '10 Jun 2019',
    client: {
      address: '3727 Emma Island Suite 879',
      company: 'Berry, Gonzalez and Heath Inc',
      companyEmail: 'yrobinson@nichols.com',
      country: 'Israel',
      contact: '(236) 784-5142',
      name: 'Erik Hayden'
    },
    service: 'Template Customization',
    total: 5612,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$883',
    dueDate: '12 Apr 2019'
  }, {
    id: 5007,
    issuedDate: '01 Feb 2020',
    client: {
      address: '953 Miller Common Suite 580',
      company: 'Martinez, Fuller and Chavez and Sons',
      companyEmail: 'tatejennifer@allen.net',
      country: 'Cook Islands',
      contact: '(436) 717-2419',
      name: 'Katherine Kennedy'
    },
    service: 'Software Development',
    total: 2230,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '19 Nov 2019'
  }, {
    id: 5008,
    issuedDate: '22 Mar 2020',
    client: {
      address: '808 Sullivan Street Apt. 135',
      company: 'Wilson and Sons LLC',
      companyEmail: 'gdurham@lee.com',
      country: 'Nepal',
      contact: '(489) 946-3041',
      name: 'Monica Fuller'
    },
    service: 'Unlimited Extended License',
    total: 2032,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8-small.png */ "./resources/js/src/assets/images/avatars/8-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '30 Nov 2019'
  }, {
    id: 5009,
    issuedDate: '30 Nov 2019',
    client: {
      address: '25135 Christopher Creek',
      company: 'Hawkins, Johnston and Mcguire PLC',
      companyEmail: 'jenny96@lawrence-thompson.com',
      country: 'Kiribati',
      contact: '(274) 246-3725',
      name: 'Stacey Carter'
    },
    service: 'UI/UX Design & Development',
    total: 3128,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '10 Sep 2019'
  }, {
    id: 5010,
    issuedDate: '06 Jan 2020',
    client: {
      address: '81285 Rebecca Estates Suite 046',
      company: 'Huynh-Mills and Sons',
      companyEmail: 'jgutierrez@jackson.com',
      country: 'Swaziland',
      contact: '(258) 211-5970',
      name: 'Chad Davis'
    },
    service: 'Software Development',
    total: 2060,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '08 Dec 2019'
  }, {
    id: 5011,
    issuedDate: '01 Jun 2019',
    client: {
      address: '3102 Briggs Dale Suite 118',
      company: 'Jones-Cooley and Sons',
      companyEmail: 'hunter14@jones.com',
      country: 'Congo',
      contact: '(593) 965-4100',
      name: 'Chris Reyes'
    },
    service: 'UI/UX Design & Development',
    total: 4077,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Feb 2020'
  }, {
    id: 5012,
    issuedDate: '30 Oct 2019',
    client: {
      address: '811 Jill Skyway',
      company: 'Jones PLC Ltd',
      companyEmail: 'pricetodd@johnson-jenkins.com',
      country: 'Brazil',
      contact: '(585) 829-2603',
      name: 'Laurie Summers'
    },
    service: 'Template Customization',
    total: 2872,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '18 Oct 2019'
  }, {
    id: 5013,
    issuedDate: '05 Feb 2020',
    client: {
      address: '2223 Brandon Inlet Suite 597',
      company: 'Jordan, Gomez and Ross Group',
      companyEmail: 'perrydavid@chapman-rogers.com',
      country: 'Congo',
      contact: '(527) 351-5517',
      name: 'Lindsay Wilson'
    },
    service: 'Software Development',
    total: 3740,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Nov 2019'
  }, {
    id: 5014,
    issuedDate: '01 Dec 2019',
    client: {
      address: '08724 Barry Causeway',
      company: 'Gonzalez, Moody and Glover LLC',
      companyEmail: 'leahgriffin@carpenter.com',
      country: 'Equatorial Guinea',
      contact: '(628) 903-0132',
      name: 'Jenna Castro'
    },
    service: 'Unlimited Extended License',
    total: 3623,
    avatar: '',
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '23 Sep 2019'
  }, {
    id: 5015,
    issuedDate: '16 Apr 2019',
    client: {
      address: '073 Holt Ramp Apt. 755',
      company: 'Ashley-Pacheco Ltd',
      companyEmail: 'esparzadaniel@allen.com',
      country: 'Seychelles',
      contact: '(847) 396-9904',
      name: 'Wendy Weber'
    },
    service: 'Software Development',
    total: 2477,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Apr 2019'
  }, {
    id: 5016,
    issuedDate: '24 Jan 2020',
    client: {
      address: '984 Sherry Trail Apt. 953',
      company: 'Berry PLC Group',
      companyEmail: 'todd34@owens-morgan.com',
      country: 'Ireland',
      contact: '(852) 249-4539',
      name: 'April Yates'
    },
    service: 'Unlimited Extended License',
    total: 3904,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$951',
    dueDate: '30 Sep 2019'
  }, {
    id: 5017,
    issuedDate: '24 Feb 2020',
    client: {
      address: '093 Jonathan Camp Suite 953',
      company: 'Allen Group Ltd',
      companyEmail: 'roydavid@bailey.com',
      country: 'Netherlands',
      contact: '(917) 984-2232',
      name: 'Daniel Marshall PhD'
    },
    service: 'UI/UX Design & Development',
    total: 3102,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$153',
    dueDate: '25 Aug 2019'
  }, {
    id: 5018,
    issuedDate: '29 Feb 2020',
    client: {
      address: '4735 Kristie Islands Apt. 259',
      company: 'Chapman-Schneider LLC',
      companyEmail: 'baldwinjoel@washington.com',
      country: 'Cocos (Keeling) Islands',
      contact: '(670) 409-3703',
      name: 'Randy Rich'
    },
    service: 'UI/UX Design & Development',
    total: 2483,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '10 Jul 2019'
  }, {
    id: 5019,
    issuedDate: '07 Aug 2019',
    client: {
      address: '92218 Andrew Radial',
      company: 'Mcclure, Hernandez and Simon Ltd',
      companyEmail: 'psmith@morris.info',
      country: 'Macao',
      contact: '(646) 263-0257',
      name: 'Mrs. Jodi Chapman'
    },
    service: 'Unlimited Extended License',
    total: 2825,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8-small.png */ "./resources/js/src/assets/images/avatars/8-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$459',
    dueDate: '14 Oct 2019'
  }, {
    id: 5020,
    issuedDate: '10 May 2019',
    client: {
      address: '2342 Michelle Valley',
      company: 'Hamilton PLC and Sons',
      companyEmail: 'lori06@morse.com',
      country: 'Somalia',
      contact: '(751) 213-4288',
      name: 'Steven Myers'
    },
    service: 'Unlimited Extended License',
    total: 2029,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '28 Mar 2019'
  }, {
    id: 5021,
    issuedDate: '02 Apr 2019',
    client: {
      address: '16039 Brittany Terrace Apt. 128',
      company: 'Silva-Reeves LLC',
      companyEmail: 'zpearson@miller.com',
      country: 'Slovakia (Slovak Republic)',
      contact: '(655) 649-7872',
      name: 'Charles Alexander'
    },
    service: 'Software Development',
    total: 3208,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '06 Sep 2019'
  }, {
    id: 5022,
    issuedDate: '02 May 2019',
    client: {
      address: '37856 Olsen Lakes Apt. 852',
      company: 'Solis LLC Ltd',
      companyEmail: 'strongpenny@young.net',
      country: 'Brazil',
      contact: '(402) 935-0735',
      name: 'Elizabeth Jones'
    },
    service: 'Software Development',
    total: 3077,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '09 May 2019'
  }, {
    id: 5023,
    issuedDate: '23 Mar 2020',
    client: {
      address: '11489 Griffin Plaza Apt. 927',
      company: 'Munoz-Peters and Sons',
      companyEmail: 'carrietorres@acosta.com',
      country: 'Argentina',
      contact: '(915) 448-6271',
      name: 'Heidi Walton'
    },
    service: 'Software Development',
    total: 5578,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '23 Jul 2019'
  }, {
    id: 5024,
    issuedDate: '28 Sep 2019',
    client: {
      address: '276 Michael Gardens Apt. 004',
      company: 'Shea, Velez and Garcia LLC',
      companyEmail: 'zjohnson@nichols-powers.com',
      country: 'Philippines',
      contact: '(817) 700-2984',
      name: 'Christopher Allen'
    },
    service: 'Software Development',
    total: 2787,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '25 Sep 2019'
  }, {
    id: 5025,
    issuedDate: '21 Feb 2020',
    client: {
      address: '633 Bell Well Apt. 057',
      company: 'Adams, Simmons and Brown Group',
      companyEmail: 'kayla09@thomas.com',
      country: 'Martinique',
      contact: '(266) 611-9482',
      name: 'Joseph Oliver'
    },
    service: 'UI/UX Design & Development',
    total: 5591,
    avatar: '',
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '07 Jun 2019'
  }, {
    id: 5026,
    issuedDate: '24 May 2019',
    client: {
      address: '1068 Lopez Fall',
      company: 'Williams-Lawrence and Sons',
      companyEmail: 'melvindavis@allen.info',
      country: 'Mexico',
      contact: '(739) 745-9728',
      name: 'Megan Roberts'
    },
    service: 'Template Customization',
    total: 2783,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5027,
    issuedDate: '13 Jan 2020',
    client: {
      address: '86691 Mackenzie Light Suite 568',
      company: 'Deleon Inc LLC',
      companyEmail: 'gjordan@fernandez-coleman.com',
      country: 'Costa Rica',
      contact: '(682) 804-6506',
      name: 'Mary Garcia'
    },
    service: 'Template Customization',
    total: 2719,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '04 Feb 2020'
  }, {
    id: 5028,
    issuedDate: '18 May 2019',
    client: {
      address: '86580 Sarah Bridge',
      company: 'Farmer, Johnson and Anderson Group',
      companyEmail: 'robertscott@garcia.com',
      country: 'Cameroon',
      contact: '(775) 366-0411',
      name: 'Crystal Mays'
    },
    service: 'Template Customization',
    total: 3325,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$361',
    dueDate: '02 Mar 2020'
  }, {
    id: 5029,
    issuedDate: '29 Oct 2019',
    client: {
      address: '49709 Edwin Ports Apt. 353',
      company: 'Sherman-Johnson PLC',
      companyEmail: 'desiree61@kelly.com',
      country: 'Macedonia',
      contact: '(510) 536-6029',
      name: 'Nicholas Tanner'
    },
    service: 'Template Customization',
    total: 3851,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '25 Aug 2019'
  }, {
    id: 5030,
    issuedDate: '07 Apr 2019',
    client: {
      address: '3856 Mathis Squares Apt. 584',
      company: 'Byrd LLC PLC',
      companyEmail: 'jeffrey25@martinez-hodge.com',
      country: 'Congo',
      contact: '(253) 230-4657',
      name: 'Mr. Justin Richardson'
    },
    service: 'Template Customization',
    total: 5565,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '06 Mar 2020'
  }, {
    id: 5031,
    issuedDate: '21 Aug 2019',
    client: {
      address: '141 Adrian Ridge Suite 550',
      company: 'Stone-Zimmerman Group',
      companyEmail: 'john77@anderson.net',
      country: 'Falkland Islands (Malvinas)',
      contact: '(612) 546-3485',
      name: 'Jennifer Summers'
    },
    service: 'Template Customization',
    total: 3313,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '09 Jun 2019'
  }, {
    id: 5032,
    issuedDate: '31 May 2019',
    client: {
      address: '01871 Kristy Square',
      company: 'Yang, Hansen and Hart PLC',
      companyEmail: 'ywagner@jones.com',
      country: 'Germany',
      contact: '(203) 601-8603',
      name: 'Richard Payne'
    },
    service: 'Template Customization',
    total: 5181,
    avatar: '',
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5033,
    issuedDate: '12 Jul 2019',
    client: {
      address: '075 Smith Views',
      company: 'Jenkins-Rosales Inc',
      companyEmail: 'calvin07@joseph-edwards.org',
      country: 'Colombia',
      contact: '(895) 401-4255',
      name: 'Lori Wells'
    },
    service: 'Template Customization',
    total: 2869,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '22 Mar 2020'
  }, {
    id: 5034,
    issuedDate: '10 Jul 2019',
    client: {
      address: '2577 Pearson Overpass Apt. 314',
      company: 'Mason-Reed PLC',
      companyEmail: 'eric47@george-castillo.com',
      country: 'Paraguay',
      contact: '(602) 336-9806',
      name: 'Tammy Sanchez'
    },
    service: 'Unlimited Extended License',
    total: 4836,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5035,
    issuedDate: '20 Jul 2019',
    client: {
      address: '1770 Sandra Mountains Suite 636',
      company: 'Foster-Pham PLC',
      companyEmail: 'jamesjoel@chapman.net',
      country: 'Western Sahara',
      contact: '(936) 550-1638',
      name: 'Dana Carey'
    },
    service: 'UI/UX Design & Development',
    total: 4263,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: '$762',
    dueDate: '12 Jun 2019'
  }, {
    id: 5036,
    issuedDate: '19 Apr 2019',
    client: {
      address: '78083 Laura Pines',
      company: 'Richardson and Sons LLC',
      companyEmail: 'pwillis@cross.org',
      country: 'Bhutan',
      contact: '(687) 660-2473',
      name: 'Andrew Burns'
    },
    service: 'Unlimited Extended License',
    total: 3171,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: '-$205',
    dueDate: '25 Sep 2019'
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/invoice/invoices').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 10 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'id' : _config$params$sortBy,
      _config$params$sortDe = _config$params.sortDesc,
      sortDesc = _config$params$sortDe === void 0 ? false : _config$params$sortDe,
      _config$params$status = _config$params.status,
      status = _config$params$status === void 0 ? null : _config$params$status;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();
  var filteredData = data.invoices.filter(function (invoice) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (invoice.client.companyEmail.toLowerCase().includes(queryLowered) || invoice.client.name.toLowerCase().includes(queryLowered)) && invoice.invoiceStatus === (status || invoice.invoiceStatus)
    );
  });
  /* eslint-enable  */

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_11__["sortCompare"])(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, {
    invoices: Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_11__["paginateArray"])(sortedData, perPage, page),
    total: filteredData.length
  }];
}); // ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet(/\/apps\/invoice\/invoices\/\d+/).reply(function (config) {
  // Get event id from URL
  var invoiceId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  invoiceId = Number(invoiceId);
  var invoiceIndex = data.invoices.findIndex(function (e) {
    return e.id === invoiceId;
  });
  var invoice = data.invoices[invoiceIndex];
  var responseData = {
    invoice: invoice,
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905'
    }
  };
  if (invoice) return [200, responseData];
  return [404];
}); // ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/invoice/clients').reply(function () {
  var clients = data.invoices.map(function (invoice) {
    return invoice.client;
  });
  return [200, clients.slice(0, 5)];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/todo.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/todo.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");







 // import { paginateArray, sortCompare } from '@/@fake-db/utils'

/* eslint-disable global-require */

var data = {
  tasks: [{
    id: 1,
    title: 'Entire change break our wife wide it daughter mention member.',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Jacob Ramirez',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    tags: ['update'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 2,
    title: 'Citizen stand administration step agency century.',
    dueDate: '2020-12-14',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Andrew Anderson',
      avatar: ''
    },
    tags: ['team', 'medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 3,
    title: 'Meet Jane and ask for coffee ❤️',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Benjamin Jacobs',
      avatar: ''
    },
    tags: ['high'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 4,
    title: 'Answer the support tickets and close completed tickets. ',
    dueDate: '2020-11-20',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Curtis Schmidt',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }, {
    id: 5,
    title: 'Test functionality of apps developed by dev team for enhancements. ',
    dueDate: '2020-12-06',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Katherine Perkins',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    tags: ['medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 6,
    title: 'Conduct a mini awareness meeting regarding health care. ',
    dueDate: '2020-12-06',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'David Murphy',
      avatar: ''
    },
    tags: ['high', 'medium'],
    isCompleted: true,
    isDeleted: true,
    isImportant: false
  }, {
    id: 7,
    title: 'Plan new dashboard design with design team for Google app store. ',
    dueDate: '2020-12-05',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Karina Miller',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }, {
    id: 8,
    title: 'Pick up Nats from her school and drop at dance class😁 ',
    dueDate: '2020-12-08',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Thomas Moses',
      avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
    },
    tags: ['low', 'medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 9,
    title: 'Finish documentation and make it live',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Angel Morrow',
      avatar: ''
    },
    tags: ['high', 'update'],
    isCompleted: false,
    isDeleted: true,
    isImportant: false
  }, {
    id: 10,
    title: 'List out all the SEO resources and send it to new SEO team. ',
    dueDate: '2020-12-09',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Karen Carrillo',
      avatar: ''
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 11,
    title: 'Refactor Code and fix the bugs and test it on server ',
    dueDate: '2020-12-01',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Timothy Brewer',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 12,
    title: 'Reminder to mail clients for holidays',
    dueDate: '2020-12-09',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Brian Barry',
      avatar: ''
    },
    tags: ['team'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 13,
    title: "Submit quotation for Abid's ecommerce website and admin project",
    dueDate: '2020-12-01',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Joshua Golden',
      avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
    },
    tags: ['team'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 14,
    title: 'Send PPT with real-time reports',
    dueDate: '2020-11-29',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Paula Hammond',
      avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
    },
    tags: ['medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 15,
    title: 'Skype Tommy for project status & report',
    dueDate: '2020-11-29',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Tyler Garcia',
      avatar: ''
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 16,
    title: 'Hire 5 new Fresher or Experienced, frontend and backend developers ',
    dueDate: '2020-12-12',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Darlene Shields',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 17,
    title: 'Plan a party for development team 🎁',
    dueDate: '2020-12-04',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Destiny Michael',
      avatar: ''
    },
    tags: ['medium', 'low'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 18,
    title: 'Fix Responsiveness for new structure 💻',
    dueDate: '2020-11-18',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Danielle Anderson',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    tags: ['low'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/todo/tasks').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      filter = _config$params.filter,
      tag = _config$params.tag,
      _config$params$sortBy = _config$params.sortBy,
      sortByParam = _config$params$sortBy === void 0 ? 'latest' : _config$params$sortBy;
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------

  var sortDesc = true;

  var sortBy = function () {
    if (sortByParam === 'title-asc') {
      sortDesc = false;
      return 'title';
    }

    if (sortByParam === 'title-desc') return 'title';

    if (sortByParam === 'assignee') {
      sortDesc = false;
      return 'assignee';
    }

    if (sortByParam === 'due-date') {
      sortDesc = false;
      return 'dueDate';
    }

    return 'id';
  }(); // ------------------------------------------------
  // Filtering
  // ------------------------------------------------


  var queryLowered = q.toLowerCase();

  var hasFilter = function hasFilter(task) {
    if (filter === 'important') return task.isImportant && !task.isDeleted;
    if (filter === 'completed') return task.isCompleted && !task.isDeleted;
    if (filter === 'deleted') return task.isDeleted;
    return !task.isDeleted;
  };
  /* eslint-disable no-confusing-arrow, implicit-arrow-linebreak, arrow-body-style */


  var filteredData = data.tasks.filter(function (task) {
    return task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true);
  });
  /* eslint-enable  */
  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------

  var sortTasks = function sortTasks(key) {
    return function (a, b) {
      var fieldA;
      var fieldB; // If sorting is by dueDate => Convert data to date

      if (key === 'dueDate') {
        fieldA = new Date(a[key]);
        fieldB = new Date(b[key]); // eslint-disable-next-line brace-style
      } // If sorting is by assignee => Use `fullName` of assignee
      else if (key === 'assignee') {
        fieldA = a.assignee ? a.assignee.fullName : null;
        fieldB = b.assignee ? b.assignee.fullName : null;
      } else {
        fieldA = a[key];
        fieldB = b[key];
      }

      var comparison = 0;

      if (fieldA === fieldB) {
        comparison = 0;
      } else if (fieldA === null) {
        comparison = 1;
      } else if (fieldB === null) {
        comparison = -1;
      } else if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }

      return comparison;
    };
  }; // Sort Data


  var sortedData = filteredData.sort(sortTasks(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, sortedData];
}); // ------------------------------------------------
// POST: Add new task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/todo/tasks').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      task = _JSON$parse.task;

  var length = data.tasks.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.tasks[length - 1].id;
  }

  task.id = lastIndex + 1;
  data.tasks.push(task);
  return [201, {
    task: task
  }];
}); // ------------------------------------------------
// POST: Update Task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost(/\/apps\/todo\/tasks\/\d+/).reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      taskData = _JSON$parse2.task; // Convert Id to number


  taskData.id = Number(taskData.id);
  var task = data.tasks.find(function (e) {
    return e.id === Number(taskData.id);
  });
  Object.assign(task, taskData);
  return [200, {
    task: task
  }];
}); // ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onDelete(/\/apps\/todo\/tasks\/\d+/).reply(function (config) {
  // Get task id from URL
  var taskId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  taskId = Number(taskId);
  var task = data.tasks.find(function (t) {
    return t.id === taskId;
  });
  Object.assign(task, {
    isDeleted: true
  });
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/user.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/user.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");









/* eslint-disable global-require */

var data = {
  users: [{
    id: 1,
    fullName: 'Galen Slixby',
    company: 'Yotz PVT LTD',
    role: 'editor',
    username: 'gslixby0',
    country: 'El Salvador',
    contact: '(479) 232-9151',
    email: 'gslixby0@abc.net.au',
    currentPlan: 'enterprise',
    status: 'inactive',
    avatar: ''
  }, {
    id: 2,
    fullName: 'Halsey Redmore',
    company: 'Skinder PVT LTD',
    role: 'author',
    username: 'hredmore1',
    country: 'Albania',
    contact: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 3,
    fullName: 'Marjory Sicely',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    username: 'msicely2',
    country: 'Russia',
    contact: '(321) 264-4599',
    email: 'msicely2@who.int',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 4,
    fullName: 'Cyrill Risby',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    username: 'crisby3',
    country: 'China',
    contact: '(923) 690-6806',
    email: 'crisby3@wordpress.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 5,
    fullName: 'Maggy Hurran',
    company: 'Aimbo PVT LTD',
    role: 'subscriber',
    username: 'mhurran4',
    country: 'Pakistan',
    contact: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 6,
    fullName: 'Silvain Halstead',
    company: 'Jaxbean PVT LTD',
    role: 'author',
    username: 'shalstead5',
    country: 'China',
    contact: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    currentPlan: 'company',
    status: 'active',
    avatar: ''
  }, {
    id: 7,
    fullName: 'Breena Gallemore',
    company: 'Jazzy PVT LTD',
    role: 'subscriber',
    username: 'bgallemore6',
    country: 'Canada',
    contact: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: ''
  }, {
    id: 8,
    fullName: 'Kathryne Liger',
    company: 'Pixoboo PVT LTD',
    role: 'author',
    username: 'kliger7',
    country: 'France',
    contact: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 9,
    fullName: 'Franz Scotfurth',
    company: 'Tekfly PVT LTD',
    role: 'subscriber',
    username: 'fscotfurth8',
    country: 'China',
    contact: '(978) 146-5443',
    email: 'fscotfurth8@dailymotion.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 10,
    fullName: 'Jillene Bellany',
    company: 'Gigashots PVT LTD',
    role: 'maintainer',
    username: 'jbellany9',
    country: 'Jamaica',
    contact: '(589) 284-6732',
    email: 'jbellany9@kickstarter.com',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 11,
    fullName: 'Jonah Wharlton',
    company: 'Eare PVT LTD',
    role: 'subscriber',
    username: 'jwharltona',
    country: 'United States',
    contact: '(176) 532-6824',
    email: 'jwharltona@oakley.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 12,
    fullName: 'Seth Hallam',
    company: 'Yakitri PVT LTD',
    role: 'subscriber',
    username: 'shallamb',
    country: 'Peru',
    contact: '(234) 464-0600',
    email: 'shallamb@hugedomains.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
  }, {
    id: 13,
    fullName: 'Yoko Pottie',
    company: 'Leenti PVT LTD',
    role: 'subscriber',
    username: 'ypottiec',
    country: 'Philippines',
    contact: '(907) 284-5083',
    email: 'ypottiec@privacy.gov.au',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 14,
    fullName: 'Maximilianus Krause',
    company: 'Digitube PVT LTD',
    role: 'author',
    username: 'mkraused',
    country: 'Democratic Republic of the Congo',
    contact: '(167) 135-7392',
    email: 'mkraused@stanford.edu',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 15,
    fullName: 'Zsazsa McCleverty',
    company: 'Kaymbo PVT LTD',
    role: 'maintainer',
    username: 'zmcclevertye',
    country: 'France',
    contact: '(317) 409-6565',
    email: 'zmcclevertye@soundcloud.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 16,
    fullName: 'Bentlee Emblin',
    company: 'Yambee PVT LTD',
    role: 'author',
    username: 'bemblinf',
    country: 'Spain',
    contact: '(590) 606-1056',
    email: 'bemblinf@wired.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 17,
    fullName: 'Brockie Myles',
    company: 'Wikivu PVT LTD',
    role: 'maintainer',
    username: 'bmylesg',
    country: 'Poland',
    contact: '(553) 225-9905',
    email: 'bmylesg@amazon.com',
    currentPlan: 'basic',
    status: 'active',
    avatar: ''
  }, {
    id: 18,
    fullName: 'Bertha Biner',
    company: 'Twinte PVT LTD',
    role: 'editor',
    username: 'bbinerh',
    country: 'Yemen',
    contact: '(901) 916-9287',
    email: 'bbinerh@mozilla.com',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 19,
    fullName: 'Travus Bruntjen',
    company: 'Cogidoo PVT LTD',
    role: 'admin',
    username: 'tbruntjeni',
    country: 'France',
    contact: '(524) 586-6057',
    email: 'tbruntjeni@sitemeter.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: ''
  }, {
    id: 20,
    fullName: 'Wesley Burland',
    company: 'Bubblemix PVT LTD',
    role: 'editor',
    username: 'wburlandj',
    country: 'Honduras',
    contact: '(569) 683-1292',
    email: 'wburlandj@uiuc.edu',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 21,
    fullName: 'Selina Kyle',
    company: 'Wayne Enterprises',
    role: 'admin',
    username: 'catwomen1940',
    country: 'USA',
    contact: '(829) 537-0057',
    email: 'irena.dubrovna@wayne.com',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 22,
    fullName: 'Jameson Lyster',
    company: 'Quaxo PVT LTD',
    role: 'editor',
    username: 'jlysterl',
    country: 'Ukraine',
    contact: '(593) 624-0222',
    email: 'jlysterl@guardian.co.uk',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
  }, {
    id: 23,
    fullName: 'Kare Skitterel',
    company: 'Ainyx PVT LTD',
    role: 'maintainer',
    username: 'kskitterelm',
    country: 'Poland',
    contact: '(254) 845-4107',
    email: 'kskitterelm@washingtonpost.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
  }, {
    id: 24,
    fullName: 'Cleavland Hatherleigh',
    company: 'Flipopia PVT LTD',
    role: 'admin',
    username: 'chatherleighn',
    country: 'Brazil',
    contact: '(700) 783-7498',
    email: 'chatherleighn@washington.edu',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 25,
    fullName: 'Adeline Micco',
    company: 'Topicware PVT LTD',
    role: 'admin',
    username: 'amiccoo',
    country: 'France',
    contact: '(227) 598-1841',
    email: 'amiccoo@whitehouse.gov',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: ''
  }, {
    id: 26,
    fullName: 'Hugh Hasson',
    company: 'Skinix PVT LTD',
    role: 'admin',
    username: 'hhassonp',
    country: 'China',
    contact: '(582) 516-1324',
    email: 'hhassonp@bizjournals.com',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 27,
    fullName: 'Germain Jacombs',
    company: 'Youopia PVT LTD',
    role: 'editor',
    username: 'gjacombsq',
    country: 'Zambia',
    contact: '(137) 467-5393',
    email: 'gjacombsq@jigsy.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 28,
    fullName: 'Bree Kilday',
    company: 'Jetpulse PVT LTD',
    role: 'maintainer',
    username: 'bkildayr',
    country: 'Portugal',
    contact: '(412) 476-0854',
    email: 'bkildayr@mashable.com',
    currentPlan: 'team',
    status: 'active',
    avatar: ''
  }, {
    id: 29,
    fullName: 'Candice Pinyon',
    company: 'Kare PVT LTD',
    role: 'maintainer',
    username: 'cpinyons',
    country: 'Sweden',
    contact: '(170) 683-1520',
    email: 'cpinyons@behance.net',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 30,
    fullName: 'Isabel Mallindine',
    company: 'Voomm PVT LTD',
    role: 'subscriber',
    username: 'imallindinet',
    country: 'Slovenia',
    contact: '(332) 803-1983',
    email: 'imallindinet@shinystat.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 31,
    fullName: 'Gwendolyn Meineken',
    company: 'Oyondu PVT LTD',
    role: 'admin',
    username: 'gmeinekenu',
    country: 'Moldova',
    contact: '(551) 379-7460',
    email: 'gmeinekenu@hc360.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 32,
    fullName: 'Rafaellle Snowball',
    company: 'Fivespan PVT LTD',
    role: 'editor',
    username: 'rsnowballv',
    country: 'Philippines',
    contact: '(974) 829-0911',
    email: 'rsnowballv@indiegogo.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
  }, {
    id: 33,
    fullName: 'Rochette Emer',
    company: 'Thoughtworks PVT LTD',
    role: 'admin',
    username: 'remerw',
    country: 'North Korea',
    contact: '(841) 889-3339',
    email: 'remerw@blogtalkradio.com',
    currentPlan: 'basic',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
  }, {
    id: 34,
    fullName: 'Ophelie Fibbens',
    company: 'Jaxbean PVT LTD',
    role: 'subscriber',
    username: 'ofibbensx',
    country: 'Indonesia',
    contact: '(764) 885-7351',
    email: 'ofibbensx@booking.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 35,
    fullName: 'Stephen MacGilfoyle',
    company: 'Browseblab PVT LTD',
    role: 'maintainer',
    username: 'smacgilfoyley',
    country: 'Japan',
    contact: '(350) 589-8520',
    email: 'smacgilfoyley@bigcartel.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: ''
  }, {
    id: 36,
    fullName: 'Bradan Rosebotham',
    company: 'Agivu PVT LTD',
    role: 'subscriber',
    username: 'brosebothamz',
    country: 'Belarus',
    contact: '(882) 933-2180',
    email: 'brosebothamz@tripadvisor.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 37,
    fullName: 'Skip Hebblethwaite',
    company: 'Katz PVT LTD',
    role: 'admin',
    username: 'shebblethwaite10',
    country: 'Canada',
    contact: '(610) 343-1024',
    email: 'shebblethwaite10@arizona.edu',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 38,
    fullName: 'Moritz Piccard',
    company: 'Twitternation PVT LTD',
    role: 'maintainer',
    username: 'mpiccard11',
    country: 'Croatia',
    contact: '(365) 277-2986',
    email: 'mpiccard11@vimeo.com',
    currentPlan: 'enterprise',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 39,
    fullName: 'Tyne Widmore',
    company: 'Yombu PVT LTD',
    role: 'subscriber',
    username: 'twidmore12',
    country: 'Finland',
    contact: '(531) 731-0928',
    email: 'twidmore12@bravesites.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 40,
    fullName: 'Florenza Desporte',
    company: 'Kamba PVT LTD',
    role: 'author',
    username: 'fdesporte13',
    country: 'Ukraine',
    contact: '(312) 104-2638',
    email: 'fdesporte13@omniture.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 41,
    fullName: 'Edwina Baldetti',
    company: 'Dazzlesphere PVT LTD',
    role: 'maintainer',
    username: 'ebaldetti14',
    country: 'Haiti',
    contact: '(315) 329-3578',
    email: 'ebaldetti14@theguardian.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 42,
    fullName: 'Benedetto Rossiter',
    company: 'Mybuzz PVT LTD',
    role: 'editor',
    username: 'brossiter15',
    country: 'Indonesia',
    contact: '(323) 175-6741',
    email: 'brossiter15@craigslist.org',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 43,
    fullName: 'Micaela McNirlan',
    company: 'Tambee PVT LTD',
    role: 'admin',
    username: 'mmcnirlan16',
    country: 'Indonesia',
    contact: '(242) 952-0916',
    email: 'mmcnirlan16@hc360.com',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: ''
  }, {
    id: 44,
    fullName: 'Vladamir Koschek',
    company: 'Centimia PVT LTD',
    role: 'author',
    username: 'vkoschek17',
    country: 'Guatemala',
    contact: '(531) 758-8335',
    email: 'vkoschek17@abc.net.au',
    currentPlan: 'team',
    status: 'active',
    avatar: ''
  }, {
    id: 45,
    fullName: 'Corrie Perot',
    company: 'Flipopia PVT LTD',
    role: 'subscriber',
    username: 'cperot18',
    country: 'China',
    contact: '(659) 385-6808',
    email: 'cperot18@goo.ne.jp',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
  }, {
    id: 46,
    fullName: 'Saunder Offner',
    company: 'Skalith PVT LTD',
    role: 'maintainer',
    username: 'soffner19',
    country: 'Poland',
    contact: '(200) 586-2264',
    email: 'soffner19@mac.com',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: ''
  }, {
    id: 47,
    fullName: 'Karena Courtliff',
    company: 'Feedfire PVT LTD',
    role: 'admin',
    username: 'kcourtliff1a',
    country: 'China',
    contact: '(478) 199-0020',
    email: 'kcourtliff1a@bbc.co.uk',
    currentPlan: 'basic',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 48,
    fullName: 'Onfre Wind',
    company: 'Thoughtmix PVT LTD',
    role: 'admin',
    username: 'owind1b',
    country: 'Ukraine',
    contact: '(344) 262-7270',
    email: 'owind1b@yandex.ru',
    currentPlan: 'basic',
    status: 'pending',
    avatar: ''
  }, {
    id: 49,
    fullName: 'Paulie Durber',
    company: 'Babbleblab PVT LTD',
    role: 'subscriber',
    username: 'pdurber1c',
    country: 'Sweden',
    contact: '(694) 676-1275',
    email: 'pdurber1c@gov.uk',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 50,
    fullName: 'Beverlie Krabbe',
    company: 'Kaymbo PVT LTD',
    role: 'editor',
    username: 'bkrabbe1d',
    country: 'China',
    contact: '(397) 294-5153',
    email: 'bkrabbe1d@home.pl',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/user/users').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 10 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'id' : _config$params$sortBy,
      _config$params$sortDe = _config$params.sortDesc,
      sortDesc = _config$params$sortDe === void 0 ? false : _config$params$sortDe,
      _config$params$role = _config$params.role,
      role = _config$params$role === void 0 ? null : _config$params$role,
      _config$params$plan = _config$params.plan,
      plan = _config$params$plan === void 0 ? null : _config$params$plan,
      _config$params$status = _config$params.status,
      status = _config$params$status === void 0 ? null : _config$params$status;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();
  var filteredData = data.users.filter(function (user) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) && user.role === (role || user.role) && user.currentPlan === (plan || user.currentPlan) && user.status === (status || user.status)
    );
  });
  /* eslint-enable  */

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_8__["sortCompare"])(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, {
    users: Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_8__["paginateArray"])(sortedData, perPage, page),
    total: filteredData.length
  }];
}); // ------------------------------------------------
// POST: Add new user
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/user/users').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      user = _JSON$parse.user; // Assign Status


  user.status = 'active';
  var length = data.users.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.users[length - 1].id;
  }

  user.id = lastIndex + 1;
  data.users.push(user);
  return [201, {
    user: user
  }];
}); // ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet(/\/apps\/user\/users\/\d+/).reply(function (config) {
  // Get event id from URL
  var userId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  userId = Number(userId);
  var userIndex = data.users.findIndex(function (e) {
    return e.id === userId;
  });
  var user = data.users[userIndex];
  if (user) return [200, user];
  return [404];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/card/card-analytics.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/card/card-analytics.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

var data = {
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1
  },
  revenueReport: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800'
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561'
  },
  revenue: {
    thisMonth: '86,589',
    lastMonth: '73,683'
  },
  productOrders: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: {
      finished: 23043,
      pending: 14658,
      rejected: 4758
    }
  },
  sessionsDevice: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: [{
      icon: 'MonitorIcon',
      name: 'Desktop',
      iconColor: 'text-primary',
      usage: 58.6,
      upDown: 2
    }, {
      icon: 'TabletIcon',
      name: 'Mobile',
      iconColor: 'text-warning',
      usage: 34.9,
      upDown: 8
    }, {
      icon: 'TabletIcon',
      name: 'Tablet',
      iconColor: 'text-danger',
      usage: 6.5,
      upDown: -5
    }]
  },
  customers: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    listData: [{
      icon: 'CircleIcon',
      iconColor: 'text-primary',
      text: 'New',
      result: 890
    }, {
      icon: 'CircleIcon',
      iconColor: 'text-warning',
      text: 'Returning',
      result: 258
    }, {
      icon: 'CircleIcon',
      iconColor: 'text-danger',
      text: 'Referrals',
      result: 149
    }]
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/support-tracker').reply(function () {
  return [200, data.supportTracker];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/avg-sessions').reply(function () {
  return [200, data.avgSessions];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/revenue-report').reply(function () {
  return [200, data.revenueReport];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/goal-overview').reply(function () {
  return [200, data.goalOverview];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/revenue').reply(function () {
  return [200, data.revenue];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/product-orders').reply(function () {
  return [200, data.productOrders];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/sessions-device').reply(function () {
  return [200, data.sessionsDevice];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/customers').reply(function () {
  return [200, data.customers];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/card/card-statistics.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/card/card-statistics.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

var data = {
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    analyticsData: {
      subscribers: 92600
    }
  },
  revenueGenerated: {
    series: [{
      name: 'Revenue',
      data: [350, 275, 400, 300, 350, 300, 450]
    }],
    analyticsData: {
      revenue: 97500
    }
  },
  quarterlySales: {
    series: [{
      name: 'Sales',
      data: [10, 15, 7, 12, 3, 16]
    }],
    analyticsData: {
      sales: '36%'
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    analyticsData: {
      orders: 97500
    }
  },
  siteTraffic: {
    series: [{
      name: 'Traffic Rate',
      data: [150, 200, 125, 225, 200, 250]
    }]
  },
  activeUsers: {
    series: [{
      name: 'Active Users',
      data: [750, 1000, 900, 1250, 1000, 1200, 1100]
    }]
  },
  newsletter: {
    series: [{
      name: 'Newsletter',
      data: [365, 390, 365, 400, 375, 400]
    }]
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/subscribers').reply(function () {
  return [200, data.subscribersGained];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/revenue').reply(function () {
  return [200, data.revenueGenerated];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/sales').reply(function () {
  return [200, data.quarterlySales];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/orders').reply(function () {
  return [200, data.ordersRecevied];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/site-traffic').reply(function () {
  return [200, data.siteTraffic];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/active-users').reply(function () {
  return [200, data.activeUsers];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/newsletter').reply(function () {
  return [200, data.newsletter];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/dashboard/analytics.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/dashboard/analytics.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  congratulations: {
    name: 'John',
    saleToday: '57.6'
  },
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    analyticsData: {
      subscribers: 92600
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    analyticsData: {
      orders: 38400
    }
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1,
    salesBar: {
      series: [{
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }]
    }
  },
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1,
    supportTrackerRadialBar: {
      series: [83]
    }
  },
  timeline: {
    step1: {
      title: '12 Invoices have been paid',
      subtitle: 'Invoices have been paid to the company.',
      img: __webpack_require__(/*! @/assets/images/icons/json.png */ "./resources/js/src/assets/images/icons/json.png"),
      fileName: 'data.json',
      duration: '12 min ago'
    },
    step2: {
      title: 'Client Meeting',
      subtitle: 'Project meeting with john @10:15am',
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      avatarName: 'John Doe (Client)',
      occupation: 'CEO of Infibeam',
      duration: '45 min ago'
    },
    step3: {
      title: 'Create a new project for client',
      subtitle: 'Add files to new design folder',
      duration: '2 day ago',
      avatars: [{
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        name: 'Billy Hopkins'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        name: 'Amy Carson'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        name: 'Brandon Miles'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
        name: 'Daisy Weber'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
        name: 'Jenny Looper'
      }]
    },
    step4: {
      title: 'Create a new project for client',
      duration: '5 day ago',
      subtitle: 'Add files to new design folder'
    }
  },
  salesChart: {
    series: [{
      name: 'Sales',
      data: [90, 50, 86, 40, 100, 20]
    }, {
      name: 'Visit',
      data: [70, 75, 70, 76, 20, 85]
    }]
  },
  appDesign: {
    date: '03 Sep, 20',
    title: 'App design',
    subtitle: 'You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design',
    teams: [{
      name: 'Figma',
      color: 'light-warning'
    }, {
      name: 'Wireframe',
      color: 'light-primary'
    }],
    members: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      color: 'primary'
    }, {
      text: 'PI',
      color: 'light-danger'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-14.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg"),
      color: 'primary'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      color: 'primary'
    }, {
      text: 'AL',
      color: 'light-secondary'
    }],
    planing: [{
      title: 'Due Date',
      subtitle: '12 Apr, 21'
    }, {
      title: 'Budget',
      subtitle: '$49251.91'
    }, {
      title: 'Cost',
      subtitle: '$840.99'
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/analytics/data').reply(function () {
  return [200, data];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/dashboard/ecommerce.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/dashboard/ecommerce.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  congratulations: {
    name: 'John',
    saleToday: '48900'
  },
  statisticsItems: [{
    icon: 'TrendingUpIcon',
    color: 'light-primary',
    title: '230k',
    subtitle: 'Sales',
    customClass: 'mb-2 mb-xl-0'
  }, {
    icon: 'UserIcon',
    color: 'light-info',
    title: '8.549k',
    subtitle: 'Customers',
    customClass: 'mb-2 mb-xl-0'
  }, {
    icon: 'BoxIcon',
    color: 'light-danger',
    title: '1.423k',
    subtitle: 'Products',
    customClass: 'mb-2 mb-sm-0'
  }, {
    icon: 'DollarSignIcon',
    color: 'light-success',
    title: '$9745',
    subtitle: 'Revenue',
    customClass: ''
  }],
  statisticsOrder: {
    series: [{
      name: '2020',
      data: [45, 85, 65, 45, 65]
    }]
  },
  statisticsProfit: {
    series: [{
      data: [0, 20, 5, 30, 15, 45]
    }]
  },
  earningsChart: {
    series: [53, 16, 31]
  },
  revenue: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800',
    revenueReport: {
      series: [{
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      }, {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
      }]
    },
    budgetChart: {
      series: [{
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      }, {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }]
    }
  },
  companyTable: [{
    avatarImg: __webpack_require__(/*! @/assets/images/icons/toolbox.svg */ "./resources/js/src/assets/images/icons/toolbox.svg"),
    title: 'Dixons',
    subtitle: 'meguc@ruj.io',
    avatarIcon: 'MonitorIcon',
    avatarColor: 'light-primary',
    avatarTitle: 'Technology',
    viewTitle: '23.4k',
    viewsub: 'in 24 hours',
    revenue: '891.2',
    sales: '68',
    loss: true
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/parachute.svg */ "./resources/js/src/assets/images/icons/parachute.svg"),
    title: 'Motels',
    subtitle: 'vecav@hodzi.co.uk',
    avatarIcon: 'CoffeeIcon',
    avatarColor: 'light-success',
    avatarTitle: 'Grocery',
    viewTitle: '78k',
    viewsub: 'in 2 days',
    revenue: '668.51',
    sales: '97',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/brush.svg */ "./resources/js/src/assets/images/icons/brush.svg"),
    title: 'Zipcar',
    subtitle: 'davcilse@is.gov',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '162',
    viewsub: 'in 5 days',
    revenue: '522.29',
    sales: '62',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/star.svg */ "./resources/js/src/assets/images/icons/star.svg"),
    title: 'Owning',
    subtitle: 'us@cuhil.gov',
    avatarIcon: 'MonitorIcon',
    avatarColor: 'light-primary',
    avatarTitle: 'Technology',
    viewTitle: '214',
    viewsub: 'in 24 hours',
    revenue: '291.01',
    sales: '88',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/book.svg */ "./resources/js/src/assets/images/icons/book.svg"),
    title: 'Cafés',
    subtitle: 'pudais@jife.com',
    avatarIcon: 'CoffeeIcon',
    avatarColor: 'light-success',
    avatarTitle: 'Grocery',
    viewTitle: '208',
    viewsub: 'in 1 week',
    revenue: '783.93',
    sales: '16',
    loss: true
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/rocket.svg */ "./resources/js/src/assets/images/icons/rocket.svg"),
    title: 'Kmart',
    subtitle: 'bipri@cawiw.com',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '990',
    viewsub: 'in 1 month',
    revenue: '780.05',
    sales: '78',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/speaker.svg */ "./resources/js/src/assets/images/icons/speaker.svg"),
    title: 'Payers',
    subtitle: 'luk@izug.io',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '12.9k',
    viewsub: 'in 12 hours',
    revenue: '531.49',
    sales: '42',
    loss: false
  }],
  meetup: {
    mediaData: [{
      avatar: 'CalendarIcon',
      title: 'Sat, May 25, 2020',
      subtitle: '10:AM to 6:PM'
    }, {
      avatar: 'MapPinIcon',
      title: 'Central Park',
      subtitle: 'Manhattan, New york City'
    }],
    avatars: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      fullName: 'Billy Hopkins'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
      fullName: 'Amy Carson'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
      fullName: 'Brandon Miles'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      fullName: 'Daisy Weber'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
      fullName: 'Jenny Looper'
    }]
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561',
    series: [83]
  },
  transactionData: [{
    mode: 'Wallet',
    types: 'Starbucks',
    avatar: 'PocketIcon',
    avatarVariant: 'light-primary',
    payment: '-$74',
    deduction: true
  }, {
    mode: 'Bank Transfer',
    types: 'Add Money',
    avatar: 'CheckIcon',
    avatarVariant: 'light-success',
    payment: '+$480',
    deduction: false
  }, {
    mode: 'Paypal',
    types: 'Add Money',
    avatar: 'DollarSignIcon',
    avatarVariant: 'light-danger',
    payment: '+$480',
    deduction: false
  }, {
    mode: 'Mastercard',
    types: 'Ordered Food',
    avatar: 'CreditCardIcon',
    avatarVariant: 'light-warning',
    payment: '-$23',
    deduction: true
  }, {
    mode: 'Transfer',
    types: 'Refund',
    avatar: 'TrendingUpIcon',
    avatarVariant: 'light-info',
    payment: '+$98',
    deduction: false
  }]
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/ecommerce/data').reply(function () {
  return [200, data];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/extensions/auto-suggest.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/extensions/auto-suggest.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  dataSuggest: [{
    // developers
    developers: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
      name: 'Rena Brant',
      email: 'nephrod@preany.co.uk',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Mariano Packard',
      email: 'seek@sparaxis.org',
      time: '14/01/2018'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Risa Montufar',
      email: 'vagary@unblist.org',
      time: '10/08/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
      name: 'Maragaret Cimo',
      email: 'designed@insanely.net',
      time: '01/12/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Jona Prattis',
      email: 'unwieldable@unblist.org',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
      name: 'Edmond Chicon',
      email: 'museist@anaphyte.co.uk',
      time: '15/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Abbey Darden',
      email: 'astema@defectively.co.uk',
      time: '07/05/2019'
    }],
    // designers
    designers: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Seema Moallankamp',
      email: 'fernando@storkish.co.uk',
      time: '13/08/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Charleen Warmington',
      email: 'furphy@cannibal.net',
      time: '11/08/1891'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Geri Linch',
      email: 'insignia@markab.org',
      time: '18/01/2015'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Shellie Muster',
      email: 'maxillary@equalize.co.uk',
      time: '26/07/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
      name: 'Jesenia Vanbramer',
      email: 'hypotony@phonetist.net',
      time: '12/09/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Mardell Channey',
      email: 'peseta@myrica.com',
      time: '11/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Lilliana Stroman',
      email: 'lilliana@stroman.com',
      time: '12/11/2020'
    }],
    // pages
    pages: [{
      icon: 'MailIcon',
      name: 'Email'
    }, {
      icon: 'MessageSquareIcon',
      name: 'Chat'
    }, {
      icon: 'CheckSquareIcon',
      name: 'Todo'
    }, {
      icon: 'CalendarIcon',
      name: 'Calendar'
    }, {
      icon: 'GridIcon',
      name: 'Kanban'
    }, {
      icon: 'FileTextIcon',
      name: 'Invoice'
    }, {
      icon: 'SaveIcon',
      name: 'File Manager'
    }, {
      icon: 'ShoppingCartIcon',
      name: 'ECommerce'
    }]
  }]
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/autosuggest/data').reply(function () {
  return [200, data.dataSuggest];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/extensions/good-table.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/extensions/good-table.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  tableBasic: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    email: 'kocrevy0@thetimes.co.uk',
    startDate: '09/23/2016',
    salary: '$23896.35',
    status: 'Professional'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    email: 'bcoulman1@yolasite.com',
    startDate: '05/20/2018',
    salary: '$13633.69',
    status: 'Resigned'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    email: 'sganderton2@tuttocitta.it',
    startDate: '03/24/2018',
    salary: '$13076.28',
    status: 'Professional'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    email: 'dcrossman3@google.co.jp',
    startDate: '12/03/2017',
    salary: '$12336.17',
    status: 'Applied'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    email: 'hnisius4@gnu.org',
    startDate: '08/25/2017',
    salary: '$10909.52',
    status: 'Professional'
  }, {
    id: 6,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    fullName: 'Genevra Honeywood',
    email: 'ghoneywood5@narod.ru',
    startDate: '06/01/2017',
    salary: '$17803.8',
    status: 'Current'
  }, {
    id: 7,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    fullName: 'Eileen Diehn',
    email: 'ediehn6@163.com',
    startDate: '10/15/2017',
    salary: '$18991.67',
    status: 'Professional'
  }, {
    id: 8,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Richardo Aldren',
    email: 'raldren7@mtv.com',
    startDate: '11/05/2016',
    salary: '$19230.13',
    status: 'Rejected'
  }, {
    id: 9,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    fullName: 'Allyson Moakler',
    email: 'amoakler8@shareasale.com',
    startDate: '12/29/2018',
    salary: '$11677.32',
    status: 'Applied'
  }, {
    id: 10,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    fullName: 'Merline Penhalewick',
    email: 'mpenhalewick9@php.net',
    startDate: '04/19/2019',
    salary: '$15939.52',
    status: 'Professional'
  }],
  tableRowGrp: [{
    mode: 'span',
    label: 'Accountant',
    html: false,
    children: [{
      id: 1,
      avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
      fullName: "Korrie O'Crevy",
      email: 'kocrevy0@thetimes.co.uk',
      startDate: '09/23/2016',
      salary: '$23896.35',
      experience: '1 Year',
      status: 'Professional'
    }]
  }, {
    mode: 'span',
    label: 'Actuary',
    children: [{
      id: 2,
      avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      fullName: 'Bailie Coulman',
      email: 'bcoulman1@yolasite.com',
      startDate: '05/20/2018',
      salary: '$13633.69',
      status: 'Current'
    }]
  }, {
    mode: 'span',
    label: 'Administrative Assistan',
    children: [{
      id: 3,
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
      fullName: 'Stella Ganderton',
      email: 'sganderton2@tuttocitta.it',
      startDate: '03/24/2018',
      salary: '$13076.28',
      status: 'Applied'
    }, {
      id: 4,
      avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
      fullName: 'Dorolice Crossman',
      email: 'dcrossman3@google.co.jp',
      startDate: '12/03/2017',
      salary: '$12336.17',
      status: 'Professional'
    }, {
      id: 5,
      avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
      fullName: 'Harmonia Nisius',
      email: 'hnisius4@gnu.org',
      startDate: '08/25/2017',
      salary: '$10909.52',
      status: 'Resigned'
    }]
  }, {
    mode: 'span',
    label: 'Analog Circuit Design manager',
    children: [{
      id: 6,
      avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      fullName: 'Genevra Honeywood',
      email: 'ghoneywood5@narod.ru',
      startDate: '06/01/2017',
      salary: '$17803.8',
      experience: '1 Year',
      status: 'Current'
    }, {
      id: 7,
      avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
      fullName: 'Eileen Diehn',
      email: 'ediehn6@163.com',
      startDate: '10/15/2017',
      salary: '$18991.67',
      status: 'Professional'
    }]
  }, {
    mode: 'span',
    label: 'Analyst Programmer',
    children: [{
      id: 8,
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
      fullName: 'Richardo Aldren',
      email: 'raldren7@mtv.com',
      startDate: '11/05/2016',
      salary: '$19230.13',
      status: 'Rejected'
    }, {
      id: 9,
      avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
      fullName: 'Allyson Moakler',
      email: 'amoakler8@shareasale.com',
      startDate: '12/29/2018',
      salary: '$11677.32',
      status: 'Applied'
    }, {
      id: 10,
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
      fullName: 'Merline Penhalewick',
      email: 'mpenhalewick9@php.net',
      startDate: '04/19/2019',
      salary: '$15939.52',
      status: 'Professional'
    }]
  }],
  tableAdvancedSearch: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: '$23896.35'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: '$13633.69'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: '$13076.28'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: '$12336.17'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    startDate: '08/25/2017',
    salary: '$10909.52'
  }, {
    id: 6,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: '$17803.8'
  }, {
    id: 7,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: '$18991.67'
  }, {
    id: 8,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: '$19230.13'
  }, {
    id: 9,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: '$11677.32'
  }, {
    id: 10,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    fullName: 'Merline Penhalewick',
    post: 'Junior Executive',
    email: 'mpenhalewick9@php.net',
    city: 'Kanuma',
    startDate: '04/19/2019',
    salary: '$15939.52'
  }],
  tableSsr: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    email: 'kocrevy0@thetimes.co.uk',
    startDate: '09/23/2016',
    salary: '$23896.35',
    status: 'Professional'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    email: 'bcoulman1@yolasite.com',
    startDate: '05/20/2018',
    salary: '$13633.69',
    status: 'Resigned'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    email: 'sganderton2@tuttocitta.it',
    startDate: '03/24/2018',
    salary: '$13076.28',
    status: 'Professional'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    email: 'dcrossman3@google.co.jp',
    startDate: '12/03/2017',
    salary: '$12336.17',
    status: 'Applied'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    email: 'hnisius4@gnu.org',
    startDate: '08/25/2017',
    salary: '$10909.52',
    status: 'Professional'
  }]
  /* eslint-disable global-require */

};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/basic').reply(function () {
  return [200, data.tableBasic];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/row-group').reply(function () {
  return [200, data.tableRowGrp];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/advanced-search').reply(function () {
  return [200, data.tableAdvancedSearch];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/table_ssr').reply(function () {
  return [200, data.tableSsr];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/account-setting.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/account-setting.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  accountSetting: {
    general: {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-11.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg"),
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'granger007@hogward.com',
      company: 'Crystal Technologies'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: __webpack_require__(/*! @/assets/images/avatars/11-small.png */ "./resources/js/src/assets/images/avatars/11-small.png"),
          id: 'johndoe'
        },
        google: {
          profileImg: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      AnswerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/account-setting/data').reply(function () {
  return [200, data.accountSetting];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/blog.js":
/*!******************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/blog.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  // blog list
  blogList: [{
    id: 1,
    img: __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg"),
    title: 'The Best Features Coming to iOS and Web design',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
    userFullName: 'Ghani Pradita',
    blogPosted: 'Jan 10, 2020',
    tags: ['Quote', 'Fashion'],
    excerpt: 'Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.',
    comment: 76
  }, {
    id: 2,
    img: __webpack_require__(/*! @/assets/images/slider/06.jpg */ "./resources/js/src/assets/images/slider/06.jpg"),
    title: 'Latest Quirky Opening Sentence or Paragraph',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
    userFullName: 'Jorge Griffin',
    blogPosted: 'Jan 10, 2020',
    tags: ['Gaming', 'Video'],
    excerpt: 'Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.',
    comment: 2100
  }, {
    id: 3,
    img: __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg"),
    title: 'Share an Amazing and Shocking Fact or Statistic',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
    userFullName: 'Claudia Neal',
    blogPosted: 'Jan 10, 2020',
    tags: ['Gaming', 'Food'],
    excerpt: 'Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.',
    comment: 243
  }, {
    id: 4,
    img: __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg"),
    title: 'Withhold a Compelling Piece of Information',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-14.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg"),
    userFullName: 'Fred Boone',
    blogPosted: 'Jan 10, 2020',
    tags: ['Video'],
    excerpt: 'Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.',
    comment: 10
  }, {
    id: 5,
    img: __webpack_require__(/*! @/assets/images/slider/09.jpg */ "./resources/js/src/assets/images/slider/09.jpg"),
    title: 'Unadvertised Bonus Opening: Share a Quote',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-13.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg"),
    userFullName: 'Billy French',
    blogPosted: 'Jan 10, 2020',
    tags: ['Quote', 'Fashion'],
    excerpt: 'Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.',
    comment: 319
  }, {
    id: 6,
    img: __webpack_require__(/*! @/assets/images/slider/10.jpg */ "./resources/js/src/assets/images/slider/10.jpg"),
    title: 'Ships at a distance have Every Man’s Wish on Board',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-13.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg"),
    userFullName: 'Helena Hunt',
    blogPosted: 'Jan 10, 2020',
    tags: ['Fashion', 'Video'],
    excerpt: 'A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.',
    comment: 1500
  }],
  // sidebar
  blogSidebar: {
    recentPosts: [{
      id: 7,
      img: __webpack_require__(/*! @/assets/images/banner/banner-22.jpg */ "./resources/js/src/assets/images/banner/banner-22.jpg"),
      title: 'Why Should Forget Facebook?',
      createdTime: 'Jan 14 2020'
    }, {
      id: 8,
      img: __webpack_require__(/*! @/assets/images/banner/banner-27.jpg */ "./resources/js/src/assets/images/banner/banner-27.jpg"),
      title: 'Publish your passions, your way',
      createdTime: 'Mar 04 2020'
    }, {
      id: 9,
      img: __webpack_require__(/*! @/assets/images/banner/banner-39.jpg */ "./resources/js/src/assets/images/banner/banner-39.jpg"),
      title: 'The Best Ways to Retain More',
      createdTime: 'Feb 18 2020'
    }, {
      id: 10,
      img: __webpack_require__(/*! @/assets/images/banner/banner-35.jpg */ "./resources/js/src/assets/images/banner/banner-35.jpg"),
      title: 'Share a Shocking Fact or Statistic',
      createdTime: 'Oct 08 2020'
    }],
    categories: [{
      category: 'Fashion',
      icon: 'WatchIcon'
    }, {
      category: 'Food',
      icon: 'ShoppingCartIcon'
    }, {
      category: 'Gaming',
      icon: 'CommandIcon'
    }, {
      category: 'Quote',
      icon: 'HashIcon'
    }, {
      category: 'Video',
      icon: 'VideoIcon'
    }]
  },
  // detail
  blogDetail: {
    blog: {
      img: __webpack_require__(/*! @/assets/images/banner/banner-12.jpg */ "./resources/js/src/assets/images/banner/banner-12.jpg"),
      title: 'The Best Features Coming to iOS and Web design',
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      content: '<p>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul class="mb-2"><li>Preliminary thinking systems</li><li>Bandwidth efficient</li><li>Green space</li><li>Social impact</li><li>Thought partnership</li><li>Fully ethical life</li></ul>  ',
      comments: 19100,
      bookmarked: 139,
      UserComment: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        fullName: 'Willie Clark',
        comment: 'Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.'
      }]
    },
    comments: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      userFullName: 'Chad Alexander',
      commentedAt: 'May 24, 2020',
      commentText: 'A variation on the question technique above, the multiple-choice question great way to engage your reader.'
    }]
  },
  // edit
  blogEdit: {
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
    userFullName: 'Chad Alexander',
    createdTime: 'May 24, 2020',
    blogTitle: 'The Best Features Coming to iOS and Web design',
    blogCategories: ['Fashion', 'Gaming'],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt: '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
    featuredImage: __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data').reply(function () {
  return [200, data.blogList];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/sidebar').reply(function () {
  return [200, data.blogSidebar];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/detail').reply(function () {
  return [200, data.blogDetail];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/edit').reply(function () {
  return [200, data.blogEdit];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/faq-data.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/faq-data.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");









/* eslint-disable global-require */

var data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCardIcon',
      title: 'Payment',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Does my subscription automatically renew?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'Can I store the item on an intranet so everyone has access?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'What does non-exclusive mean?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'Is the Regular License the same thing as an editorial license?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'Which license do I need for an end product that is only accessible to paying users?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }, {
        question: 'Which license do I need to use an item in a commercial?',
        ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.'
      }, {
        question: 'Can I re-distribute an item? What about under an Extended License?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
      }]
    },
    // delivery
    delivery: {
      icon: 'ShoppingBagIcon',
      title: 'Delivery',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Where has my order reached?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'What if my shipment is marked as lost?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'My shipment status shows that it’s out for delivery. By when will I receive it?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'What do I need to do to get the shipment delivered within a specific timeframe?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }]
    },
    // cancellation and return
    cancellationReturn: {
      icon: 'RefreshCwIcon',
      title: 'Cancellation & Return',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Can my security guard or neighbour receive my shipment if I am not available?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'How can I get the contact number of my delivery agent?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I cancel my shipment?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'I have received a defective/damaged product. What do I do?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'How do I change my delivery address?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }, {
        question: 'What documents do I need to carry for self-collection of my shipment?',
        ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.'
      }, {
        question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
      }]
    },
    // my orders
    myOrders: {
      icon: 'PackageIcon',
      title: 'My Orders',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Can I avail of an open delivery?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'I haven’t received the refund of my returned shipment. What do I do?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I ship my order to an international location?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'I missed the delivery of my order today. What should I do?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'The delivery of my order is delayed. What should I do?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }]
    },
    // product and services
    productServices: {
      icon: 'SettingsIcon',
      title: 'Product & Services',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'How can I register a complaint against the courier executive who came to deliver my order?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I get a proof of delivery for my shipment?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'How can I avail your services?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }]
    }
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_8__["default"].onGet('/faq/data').reply(function (config) {
  var _config$params$q = config.params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q;
  var queryLowered = q.toLowerCase();
  var filteredData = {};
  Object.entries(data.faqData).forEach(function (entry) {
    var _entry = Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entry, 2),
        categoryName = _entry[0],
        categoryObj = _entry[1]; // eslint-disable-next-line arrow-body-style


    var filteredQAndAOfCategory = categoryObj.qandA.filter(function (qAndAObj) {
      return qAndAObj.question.toLowerCase().includes(queryLowered);
    });

    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, categoryObj), {}, {
        qandA: filteredQAndAOfCategory
      });
    }
  });
  return [200, filteredData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/knowledge-base.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/knowledge-base.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  // knowledge base
  knowledgeBase: [{
    id: 1,
    category: 'sales-automation',
    img: __webpack_require__(/*! @/assets/images/illustration/sales.svg */ "./resources/js/src/assets/images/illustration/sales.svg"),
    title: 'Sales Automation',
    desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.'
  }, {
    id: 2,
    category: 'marketing-automation',
    img: __webpack_require__(/*! @/assets/images/illustration/marketing.svg */ "./resources/js/src/assets/images/illustration/marketing.svg"),
    title: 'Marketing Automation',
    desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.'
  }, {
    id: 3,
    category: 'api-questions',
    img: __webpack_require__(/*! @/assets/images/illustration/api.svg */ "./resources/js/src/assets/images/illustration/api.svg"),
    title: 'API Questions',
    desc: 'every hero and coward, every creator and destroyer of civilization.'
  }, {
    id: 4,
    category: 'personalization',
    img: __webpack_require__(/*! @/assets/images/illustration/personalization.svg */ "./resources/js/src/assets/images/illustration/personalization.svg"),
    title: 'Personalization',
    desc: 'It has been said that astronomy is a humbling and character experience.'
  }, {
    id: 5,
    category: 'email-marketing',
    img: __webpack_require__(/*! @/assets/images/illustration/email.svg */ "./resources/js/src/assets/images/illustration/email.svg"),
    title: 'Email Marketing',
    desc: 'There is perhaps no better demonstration of the folly of human conceits.'
  }, {
    id: 6,
    category: 'demand-generation',
    img: __webpack_require__(/*! @/assets/images/illustration/demand.svg */ "./resources/js/src/assets/images/illustration/demand.svg"),
    title: 'Demand Generation',
    desc: 'Competent means we will never take anything for granted.'
  }],
  categoryData: [{
    id: 0,
    title: 'Account Settings',
    icon: 'SettingsIcon',
    iconColor: 'text-primary',
    questions: [{
      id: 0,
      question: 'How Secure Is My Password?',
      slug: 'how-secure-is-my-password'
    }, {
      id: 1,
      question: 'Can I Change My Username?',
      slug: 'can-i-change-my-username'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?',
      slug: 'where-can-i-upload-my-avatar'
    }, {
      id: 3,
      question: 'How Do I Change My Timezone?',
      slug: 'how-do-i-change-my-timezone'
    }, {
      id: 4,
      question: 'How Do I Change My Password?',
      slug: 'how-do-i-change-my-password'
    }]
  }, {
    id: 1,
    title: 'API Questions',
    icon: 'LinkIcon',
    iconColor: 'text-success',
    questions: [{
      id: 0,
      question: 'What Technologies Are Used?',
      slug: 'what-technologies-are-used'
    }, {
      id: 1,
      question: 'What Are The API Limits?',
      slug: 'what-are-the-api-limits'
    }, {
      id: 2,
      question: 'Why Was My Application Rejected?',
      slug: 'why-was-my-application-rejected?'
    }, {
      id: 3,
      question: 'Where can I find the documentation?',
      slug: 'where-can-i-find-the-documentation'
    }, {
      id: 4,
      question: 'How Do I Get An API Key?',
      slug: 'how-do-i-get-an-api-key?'
    }]
  }, {
    id: 2,
    title: 'Billing',
    icon: 'FileTextIcon',
    iconColor: 'text-danger',
    questions: [{
      id: 0,
      question: 'Can I Contact A Salés Rep?',
      slug: 'can-i-contact-a-salés-rep'
    }, {
      id: 1,
      question: 'Do I Need To Pay VAT?',
      slug: 'do-i-needto-pay-vat'
    }, {
      id: 2,
      question: 'Can I Get A Refund?',
      slug: 'can-i-get-a-refund'
    }, {
      id: 3,
      question: 'Difference Annual & Monthly Billing',
      slug: 'difference-annual-monthly-billing'
    }, {
      id: 4,
      question: 'What Happens If The Price Increases?',
      slug: 'what-happens-if-the-price-increases?'
    }]
  }, {
    id: 3,
    title: 'Copyright & Legal',
    icon: 'LockIcon',
    iconColor: 'text-warning',
    questions: [{
      id: 0,
      question: 'How Do I Contact Legal?',
      slug: 'how-do-i-contact-legal'
    }, {
      id: 1,
      question: 'Where Are Your Offices Located?',
      slug: 'where-are-your-offices-located'
    }, {
      id: 2,
      question: 'Who Owns The Copyright On Text?',
      slug: 'who-owns-the-copyright-on-text'
    }, {
      id: 3,
      question: 'Our Content Policy',
      slug: 'our-content-policy'
    }, {
      id: 4,
      question: 'How Do I File A DMCA?',
      slug: 'how-do-i-file-a-dmca'
    }]
  }, {
    id: 4,
    title: 'Mobile Apps',
    icon: 'SmartphoneIcon',
    iconColor: 'text-info',
    questions: [{
      id: 0,
      question: 'How Do I Download The Android App?',
      slug: 'how-do-i-download-the-android-app'
    }, {
      id: 1,
      question: 'How To Download Our iPad App',
      slug: 'how-to-download-our-ipad-app'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?',
      slug: 'where-can-i-upload-my-avatar'
    }, {
      id: 3,
      question: 'Can I Use My Android Phone?',
      slug: 'can-i-use-my-android-phone'
    }, {
      id: 4,
      question: 'Is There An iOS App?',
      slug: 'is-there-an-ios-app'
    }]
  }, {
    id: 5,
    title: 'Using KnowHow',
    icon: 'InfoIcon',
    iconColor: '',
    questions: [{
      id: 0,
      question: 'Customization',
      slug: 'customization'
    }, {
      id: 1,
      question: 'Upgrading',
      slug: 'upgrading'
    }, {
      id: 2,
      question: 'Customizing Your Theme',
      slug: 'customizing-your-theme'
    }, {
      id: 3,
      question: 'Upgrading Your Theme',
      slug: 'upgrading-your-theme'
    }]
  }],
  questionData: {
    title: 'Why Was My Developer Application Rejected?',
    lastUpdated: '10 Dec 2018',
    relatedQuestions: [{
      id: 0,
      question: 'How Secure Is My Password?'
    }, {
      id: 1,
      question: 'Can I Change My Username?'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?'
    }, {
      id: 3,
      question: 'How Do I Change My Timezone?'
    }, {
      id: 4,
      question: 'How Do I Change My Password?'
    }],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: "<p>It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we\u2019ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.</p><p class=\"ql-align-center\"><img class=\"img-fluid w-100\" src=\"".concat(__webpack_require__(/*! @/assets/images/pages/kb-image.jpg */ "./resources/js/src/assets/images/pages/kb-image.jpg"), "\"></p></p><h5>Houston</h5><p>that may have seemed like a very long final phase. The auto targeting was taking us right into a \u2026 crater, with a large number of big boulders and rocks \u2026 and it required \u2026 flying manually over the rock field to find a reasonably good area.</p><ul><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.</a></li><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >It\u2019s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it\u2019s hard to be articulate when your mind\u2019s blown\u2014but in a very good way.</a></li><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >A good rule for rocket experimenters to follow is this</a></li></ul>")
  } // category

};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/knowledge_base').reply(function () {
  return [200, data.knowledgeBase];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/category').reply(function () {
  return [200, data.categoryData];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/question').reply(function () {
  return [200, data.questionData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/pricing-data.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/pricing-data.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  pricing: {
    basicPlan: {
      title: 'Basic',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot1.svg */ "./resources/js/src/assets/images/illustration/Pot1.svg"),
      subtitle: 'A simple start for everyone',
      monthlyPrice: 0,
      yearlyPlan: {
        perMonth: 0,
        totalAnual: 0
      },
      planBenefits: ['100 responses a month', 'Unlimited forms and surveys', 'Unlimited fields', 'Basic form creation tools', 'Up to 2 subdomains'],
      popular: false
    },
    standardPlan: {
      title: 'Standard',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot2.svg */ "./resources/js/src/assets/images/illustration/Pot2.svg"),
      subtitle: 'For small to medium businesses',
      monthlyPrice: 49,
      yearlyPlan: {
        perMonth: 40,
        totalAnual: 480
      },
      planBenefits: ['Unlimited responses', 'Unlimited forms and surveys', 'Instagram profile page', 'Google Docs integration', 'Custom “Thank you” page'],
      popular: true
    },
    enterprisePlan: {
      title: 'Enterprise',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot3.svg */ "./resources/js/src/assets/images/illustration/Pot3.svg"),
      subtitle: 'Solution for big organizations',
      monthlyPrice: 99,
      yearlyPlan: {
        perMonth: 80,
        totalAnual: 960
      },
      planBenefits: ['PayPal payments', 'Logic Jumps', 'File upload with 5GB storage', 'Custom domain support', 'Stripe integration'],
      popular: false
    },
    qandA: [{
      question: 'Does my subscription automatically renew?',
      ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
    }, {
      question: 'Can I store the item on an intranet so everyone has access?',
      ans: 'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
    }, {
      question: 'Am I allowed to modify the item that I purchased?',
      ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/pricing/data').reply(function () {
  return [200, data.pricing];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/profile-data.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/profile-data.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  profileData: {
    header: {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      username: 'Kitty Allanson',
      designation: 'UI/UX Designer',
      coverImg: __webpack_require__(/*! @/assets/images/profile/user-uploads/timeline.jpg */ "./resources/js/src/assets/images/profile/user-uploads/timeline.jpg")
    },
    userAbout: {
      about: 'Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.',
      joined: 'November 15, 2015',
      lives: 'New York, USA',
      email: 'bucketful@fiendhead.org',
      website: 'www.pixinvent.com'
    },
    suggestedPages: [{
      avatar: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
      username: 'Peter Reed',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      username: 'Harriett Adkins',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
      username: 'Juan Weaver',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
      username: 'Claudia Chandler',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      username: 'Earl Briggs',
      subtitle: 'Company',
      favorite: true
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
      username: 'Jonathan Lyons',
      subtitle: 'Beauty Store',
      favorite: false
    }],
    twitterFeeds: [{
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      title: 'Gertrude Stevens',
      id: 'tiana59 ',
      tags: '#design #fasion',
      desc: 'I love cookie chupa chups sweet tart apple pie ⭐️ chocolate bar.',
      favorite: false
    }, {
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
      title: 'Lura Jones',
      id: 'tiana59 ',
      tags: '#vuejs #code #coffeez',
      desc: 'Halvah I love powder jelly I love cheesecake cotton candy. 😍',
      favorite: true
    }, {
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      title: 'Norman Gross',
      id: 'tiana59 ',
      tags: '#sketch #uiux #figma',
      desc: 'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
      favorite: false
    }],
    post: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-18.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg"),
      username: 'Leeanna Alvord',
      postTime: '12 Dec 2018 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postImg: __webpack_require__(/*! @/assets/images/profile/post-media/2.jpg */ "./resources/js/src/assets/images/profile/post-media/2.jpg"),
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 140,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        username: 'Jackey Potter',
        comment: 'Unlimited color🖌 options allows you to set your application color as per your branding 🤪.',
        commentsLikes: 61,
        youLiked: true
      }]
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-22.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg"),
      username: 'Rosa Walters',
      postTime: '11 Dec 2019 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postImg: __webpack_require__(/*! @/assets/images/profile/post-media/25.jpg */ "./resources/js/src/assets/images/profile/post-media/25.jpg"),
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 271,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }]
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
      username: 'Charles Watson',
      postTime: '12 Dec 2019 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postVid: 'https://www.youtube.com/embed/6stlCkUDG_s',
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 264,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }]
    }],
    latestPhotos: [{
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-13.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-13.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-02.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-02.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-03.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-03.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-04.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-04.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-05.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-05.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-06.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-06.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-07.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-07.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-08.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-08.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-09.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-09.jpg")
    }],
    suggestions: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      name: 'Peter Reed',
      mutualFriend: '6 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
      name: 'Harriett Adkins',
      mutualFriend: '3 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Juan Weaver',
      mutualFriend: '1 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
      name: 'Claudia Chandler',
      mutualFriend: '16 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
      name: 'Earl Briggs',
      mutualFriend: '4 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Jonathan Lyons',
      mutualFriend: '25 Mutual Friends'
    }],
    polls: [{
      name: 'RDJ',
      result: '82%',
      votedUser: [{
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-12.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg"),
        username: 'Tonia Seabold'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'Carissa Dolle'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        username: 'Kelle Herrick'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
        username: 'Len Bregantini'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-11.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg"),
        username: 'John Doe'
      }]
    }, {
      name: 'Chris Hemswort',
      result: '67%',
      votedUser: [{
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        username: 'Tonia Seabold'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Carissa Dolle'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        username: 'Jonathan Lyons'
      }]
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/profile/data').reply(function () {
  return [200, data.profileData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/db.js":
/*!*****************************************!*\
  !*** ./resources/js/src/@fake-db/db.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./resources/js/src/@fake-db/jwt/index.js");
/* harmony import */ var _data_extensions_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/extensions/good-table */ "./resources/js/src/@fake-db/data/extensions/good-table.js");
/* harmony import */ var _data_extensions_auto_suggest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/extensions/auto-suggest */ "./resources/js/src/@fake-db/data/extensions/auto-suggest.js");
/* harmony import */ var _data_card_card_statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/card/card-statistics */ "./resources/js/src/@fake-db/data/card/card-statistics.js");
/* harmony import */ var _data_card_card_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/card/card-analytics */ "./resources/js/src/@fake-db/data/card/card-analytics.js");
/* harmony import */ var _data_apps_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/apps/calendar */ "./resources/js/src/@fake-db/data/apps/calendar.js");
/* harmony import */ var _data_apps_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/apps/user */ "./resources/js/src/@fake-db/data/apps/user.js");
/* harmony import */ var _data_apps_email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/apps/email */ "./resources/js/src/@fake-db/data/apps/email.js");
/* harmony import */ var _data_apps_invoice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/apps/invoice */ "./resources/js/src/@fake-db/data/apps/invoice.js");
/* harmony import */ var _data_apps_todo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/apps/todo */ "./resources/js/src/@fake-db/data/apps/todo.js");
/* harmony import */ var _data_apps_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/apps/chat */ "./resources/js/src/@fake-db/data/apps/chat.js");
/* harmony import */ var _data_apps_eCommerce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/apps/eCommerce */ "./resources/js/src/@fake-db/data/apps/eCommerce.js");
/* harmony import */ var _data_dashboard_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/dashboard/analytics */ "./resources/js/src/@fake-db/data/dashboard/analytics.js");
/* harmony import */ var _data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/dashboard/ecommerce */ "./resources/js/src/@fake-db/data/dashboard/ecommerce.js");
/* harmony import */ var _data_pages_faq_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/pages/faq-data */ "./resources/js/src/@fake-db/data/pages/faq-data.js");
/* harmony import */ var _data_pages_knowledge_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/pages/knowledge-base */ "./resources/js/src/@fake-db/data/pages/knowledge-base.js");
/* harmony import */ var _data_pages_pricing_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/pages/pricing-data */ "./resources/js/src/@fake-db/data/pages/pricing-data.js");
/* harmony import */ var _data_pages_account_setting__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data/pages/account-setting */ "./resources/js/src/@fake-db/data/pages/account-setting.js");
/* harmony import */ var _data_pages_profile_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data/pages/profile-data */ "./resources/js/src/@fake-db/data/pages/profile-data.js");
/* harmony import */ var _data_pages_blog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data/pages/blog */ "./resources/js/src/@fake-db/data/pages/blog.js");

/* eslint-disable import/extensions */
// JWT

 // Table




 // Apps







 // dashboard


 // pages







/* eslint-enable import/extensions */

_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onAny().passThrough(); // forwards the matched request over network

/***/ }),

/***/ "./resources/js/src/@fake-db/jwt/index.js":
/*!************************************************!*\
  !*** ./resources/js/src/@fake-db/jwt/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);





var data = {
  users: [{
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    password: 'admin',
    // eslint-disable-next-line global-require
    avatar: __webpack_require__(/*! @/assets/images/avatars/13-small.png */ "./resources/js/src/assets/images/avatars/13-small.png"),
    email: 'admin@demo.com',
    role: 'admin',
    ability: [{
      action: 'manage',
      subject: 'all'
    }],
    extras: {
      eCommerceCartItemsCount: 5
    }
  }, {
    id: 2,
    fullName: 'Jane Doe',
    username: 'janedoe',
    password: 'client',
    // eslint-disable-next-line global-require
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    email: 'client@demo.com',
    role: 'client',
    ability: [{
      action: 'read',
      subject: 'ACL'
    }, {
      action: 'read',
      subject: 'Auth'
    }],
    extras: {
      eCommerceCartItemsCount: 5
    }
  }]
}; // ! These two secrets shall be in .env file and not in any other file

var jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m'
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/login').reply(function (request) {
  var _JSON$parse = JSON.parse(request.data),
      email = _JSON$parse.email,
      password = _JSON$parse.password;

  var error = {
    email: ['Something went wrong']
  };
  var user = data.users.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (user) {
    try {
      var accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
        id: user.id
      }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      });
      var refreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
        id: user.id
      }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      });

      var userData = Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user);

      delete userData.password;
      var response = {
        userData: userData,
        accessToken: accessToken,
        refreshToken: refreshToken
      };
      return [200, response];
    } catch (e) {
      error = e;
    }
  } else {
    error = {
      email: ['Email or Password is Invalid']
    };
  }

  return [400, {
    error: error
  }];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/register').reply(function (request) {
  var _JSON$parse2 = JSON.parse(request.data),
      username = _JSON$parse2.username,
      email = _JSON$parse2.email,
      password = _JSON$parse2.password; // If not any of data is missing return 400


  if (!(username && email && password)) return [400];
  var isEmailAlreadyInUse = data.users.find(function (user) {
    return user.email === email;
  });
  var isUsernameAlreadyInUse = data.users.find(function (user) {
    return user.username === username;
  });
  var error = {
    password: !password ? ['Please enter password'] : null,
    email: function () {
      if (!email) return ['Please enter your email.'];
      if (isEmailAlreadyInUse) return ['This email is already in use.'];
      return null;
    }(),
    username: function () {
      if (!username) return ['Please enter your username.'];
      if (isUsernameAlreadyInUse) return ['This username is already in use.'];
      return null;
    }()
  };

  if (!error.username && !error.email) {
    var userData = {
      email: email,
      password: password,
      username: username,
      fullName: '',
      avatar: null,
      role: 'admin',
      ability: [{
        action: 'manage',
        subject: 'all'
      }]
    }; // Add user id

    var length = data.users.length;
    var lastIndex = 0;

    if (length) {
      lastIndex = data.users[length - 1].id;
    }

    userData.id = lastIndex + 1;
    data.users.push(userData);
    var accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.secret, {
      expiresIn: jwtConfig.expireTime
    });

    var user = Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userData);

    delete user.password;
    var response = {
      userData: user,
      accessToken: accessToken
    };
    return [200, response];
  }

  return [400, {
    error: error
  }];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/refresh-token').reply(function (request) {
  var _JSON$parse3 = JSON.parse(request.data),
      refreshToken = _JSON$parse3.refreshToken;

  try {
    var _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.verify(refreshToken, jwtConfig.refreshTokenSecret),
        id = _jwt$verify.id;

    var userData = Object(C_xampp_htdocs_customers_suppliers_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.users.find(function (user) {
      return user.id === id;
    }));

    var newAccessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn
    });
    var newRefreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime
    });
    delete userData.password;
    var response = {
      userData: userData,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    };
    return [200, response];
  } catch (e) {
    var error = 'Invalid refresh token';
    return [401, {
      error: error
    }];
  }
});

/***/ }),

/***/ "./resources/js/src/@fake-db/mock.js":
/*!*******************************************!*\
  !*** ./resources/js/src/@fake-db/mock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-mock-adapter */ "./node_modules/axios-mock-adapter/src/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__);

 // This sets the mock adapter on the axios instance

var mock = new axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default.a(_axios__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (mock);

/***/ }),

/***/ "./resources/js/src/@fake-db/utils.js":
/*!********************************************!*\
  !*** ./resources/js/src/@fake-db/utils.js ***!
  \********************************************/
/*! exports provided: paginateArray, sortCompare, getRandomInt, randomDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateArray", function() { return paginateArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCompare", function() { return sortCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDate", function() { return randomDate; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);

var paginateArray = function paginateArray(array, perPage, page) {
  return array.slice((page - 1) * perPage, page * perPage);
};
var sortCompare = function sortCompare(key) {
  return function (a, b) {
    var fieldA = a[key];
    var fieldB = b[key];
    var comparison = 0;

    if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }

    return comparison;
  };
};
var getRandomInt = function getRandomInt(min, max) {
  if (min > max) {
    var temp = max;
    /* eslint-disable no-param-reassign */

    max = min;
    min = temp;
    /* eslint-enable */
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
  }

  return Math.floor(Math.random() * max) + min;
};
var randomDate = function randomDate(start, end) {
  var diff = end.getTime() - start.getTime();
  var newDiff = diff * Math.random();
  var date = new Date(start.getTime() + newDiff);
  return date;
};

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/1-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/10-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/10-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/10-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/10.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/10.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/10.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/11-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/11-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/11-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/11.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/11.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/11.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/12-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/12-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/12-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/12.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/12.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/12.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/13-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/13-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/13-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/2-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/2-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/2-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/2.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/2.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/3-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/3-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/3-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/3.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/3.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/3.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/4-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/4-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/4-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/4.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/4.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/5-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/5-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/5-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/5.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/5.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/6-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/6-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/6-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/6.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/6.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/7-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/7-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/7-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/7.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/7.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/8-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/8-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/8-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/8.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/8.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/9-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/9-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/9-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/9.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/9.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/avatars/9.png";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-12.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-12.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/banner/banner-12.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-22.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-22.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/banner/banner-22.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-27.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-27.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/banner/banner-27.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-35.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-35.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/banner/banner-35.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-39.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-39.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/banner/banner-39.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-left.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-left.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/elements/decore-left.png";

/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-right.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-right.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/elements/decore-right.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/book.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/book.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/book.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/brush.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/brush.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/brush.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/doc.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/doc.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/doc.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/js.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/icons/js.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/js.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/json.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/json.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/json.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/parachute.svg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/icons/parachute.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/parachute.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/rocket.svg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/rocket.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/rocket.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/speaker.svg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/speaker.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/speaker.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/star.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/star.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/star.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/toolbox.svg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/toolbox.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/toolbox.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/txt.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/txt.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/txt.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/xls.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/xls.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/icons/xls.png";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot1.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot1.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/Pot1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot2.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot2.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/Pot2.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot3.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot3.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/Pot3.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/api.svg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/api.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/api.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/demand.svg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/demand.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/demand.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/email.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/email.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/email.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/marketing.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/marketing.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/marketing.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/personalization.svg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/personalization.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/personalization.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/sales.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/sales.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/illustration/sales.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/1.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/1.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/10.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/10.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/10.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/11.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/11.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/11.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/12.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/12.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/12.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/13.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/13.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/13.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/14.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/14.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/14.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/15.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/15.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/15.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/16.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/16.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/16.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/17.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/17.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/17.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/18.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/18.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/18.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/19.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/19.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/19.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/2.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/2.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/2.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/20.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/20.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/20.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/21.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/21.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/21.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/22.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/22.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/22.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/23.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/23.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/23.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/24.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/24.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/24.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/25.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/25.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/25.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/26.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/26.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/26.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/27.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/27.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/27.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/3.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/3.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/3.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/4.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/4.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/5.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/5.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/6.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/6.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/7.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/7.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/8.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/8.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/9.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/9.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/eCommerce/9.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/kb-image.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/kb-image.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/pages/kb-image.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-1.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-10.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-11.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-12.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-13.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-14.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-15.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-18.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-2.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-20.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-22.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-23.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-24.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-25.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-3.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-4.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-5.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-6.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-8.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/portrait/small/avatar-s-9.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/post-media/2.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/post-media/2.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/post-media/2.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/post-media/25.jpg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/post-media/25.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/post-media/25.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/timeline.jpg":
/*!**************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/timeline.jpg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/timeline.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-02.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-02.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-02.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-03.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-03.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-03.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-04.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-04.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-04.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-05.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-05.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-05.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-06.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-06.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-06.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-07.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-07.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-07.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-08.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-08.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-08.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-09.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-09.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-09.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-13.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-13.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/profile/user-uploads/user-13.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/02.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/02.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/02.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/03.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/03.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/03.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/04.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/04.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/04.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/06.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/06.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/06.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/09.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/09.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/09.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/10.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/10.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/customers_suppliers/resources/js/src/assets/images/slider/10.jpg";

/***/ }),

/***/ "./resources/js/src/libs/axios.js":
/*!****************************************!*\
  !*** ./resources/js/src/libs/axios.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
 // axios


var axiosIns = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({// You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$http = axiosIns;
/* harmony default export */ __webpack_exports__["default"] = (axiosIns);

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true& */ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true&");
/* harmony import */ var _InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& */ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&");
/* harmony import */ var _InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InvoiceList.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e5fcc102",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=0&id=e5fcc102&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_0_id_e5fcc102_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-list/InvoiceList.vue?vue&type=template&id=e5fcc102&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceList_vue_vue_type_template_id_e5fcc102_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-list/useInvoiceList.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-list/useInvoiceList.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useInvoicesList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");

 // Notification



function useInvoicesList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  var refInvoiceListTable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'id',
    label: '#',
    sortable: true
  }, {
    key: 'invoiceStatus',
    sortable: true
  }, {
    key: 'client',
    sortable: true
  }, {
    key: 'total',
    sortable: true,
    formatter: function formatter(val) {
      return "$".concat(val);
    }
  }, {
    key: 'issuedDate',
    sortable: true
  }, {
    key: 'balance',
    sortable: true
  }, {
    key: 'actions'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalInvoices = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var statusFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refInvoiceListTable.value ? refInvoiceListTable.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalInvoices.value
    };
  });

  var refetchData = function refetchData() {
    refInvoiceListTable.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, statusFilter], function () {
    refetchData();
  });

  var fetchInvoices = function fetchInvoices(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-invoice/fetchInvoices', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      status: statusFilter.value
    }).then(function (response) {
      var _response$data = response.data,
          invoices = _response$data.invoices,
          total = _response$data.total;
      callback(invoices);
      totalInvoices.value = total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        props: {
          title: "Error fetching invoices' list",
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  var resolveInvoiceStatusVariantAndIcon = function resolveInvoiceStatusVariantAndIcon(status) {
    if (status === 'Partial Payment') return {
      variant: 'warning',
      icon: 'PieChartIcon'
    };
    if (status === 'Paid') return {
      variant: 'success',
      icon: 'CheckCircleIcon'
    };
    if (status === 'Downloaded') return {
      variant: 'info',
      icon: 'ArrowDownCircleIcon'
    };
    if (status === 'Draft') return {
      variant: 'primary',
      icon: 'SaveIcon'
    };
    if (status === 'Sent') return {
      variant: 'secondary',
      icon: 'SendIcon'
    };
    if (status === 'Past Due') return {
      variant: 'danger',
      icon: 'InfoIcon'
    };
    return {
      variant: 'secondary',
      icon: 'XIcon'
    };
  };

  var resolveClientAvatarVariant = function resolveClientAvatarVariant(status) {
    if (status === 'Partial Payment') return 'primary';
    if (status === 'Paid') return 'danger';
    if (status === 'Downloaded') return 'secondary';
    if (status === 'Draft') return 'warning';
    if (status === 'Sent') return 'info';
    if (status === 'Past Due') return 'success';
    return 'primary';
  };

  return {
    fetchInvoices: fetchInvoices,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalInvoices: totalInvoices,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refInvoiceListTable: refInvoiceListTable,
    statusFilter: statusFilter,
    resolveInvoiceStatusVariantAndIcon: resolveInvoiceStatusVariantAndIcon,
    resolveClientAvatarVariant: resolveClientAvatarVariant,
    refetchData: refetchData
  };
}

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoiceStoreModule.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoiceStoreModule.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchInvoices: function fetchInvoices(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/apps/invoice/invoices', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchInvoice: function fetchInvoice(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/apps/invoice/invoices/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchClients: function fetchClients() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/apps/invoice/clients').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    } // addUser(ctx, userData) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post('/apps/user/users', { user: userData })
    //       .then(response => resolve(response))
    //       .catch(error => reject(error))
    //   })
    // },

  }
});

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/Analytics.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/Analytics.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analytics.vue?vue&type=template&id=02f49ef0& */ "./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0&");
/* harmony import */ var _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analytics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/Analytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=template&id=02f49ef0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/Analytics.vue?vue&type=template&id=02f49ef0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_02f49ef0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsAppDesign.vue?vue&type=template&id=7d022647& */ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647&");
/* harmony import */ var _AnalyticsAppDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsAppDesign.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsAppDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAppDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsAppDesign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAppDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsAppDesign.vue?vue&type=template&id=7d022647& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAppDesign.vue?vue&type=template&id=7d022647&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAppDesign_vue_vue_type_template_id_7d022647___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2& */ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2&");
/* harmony import */ var _AnalyticsAvgSessions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsAvgSessions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsAvgSessions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAvgSessions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsAvgSessions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAvgSessions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsAvgSessions.vue?vue&type=template&id=455a96d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsAvgSessions_vue_vue_type_template_id_455a96d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsCongratulation.vue?vue&type=template&id=046934f4& */ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4&");
/* harmony import */ var _AnalyticsCongratulation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsCongratulation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsCongratulation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsCongratulation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsCongratulation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsCongratulation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsCongratulation.vue?vue&type=template&id=046934f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsCongratulation.vue?vue&type=template&id=046934f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsCongratulation_vue_vue_type_template_id_046934f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8& */ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8&");
/* harmony import */ var _AnalyticsSalesRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsSalesRadarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsSalesRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSalesRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsSalesRadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSalesRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSalesRadarChart.vue?vue&type=template&id=ed9609a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSalesRadarChart_vue_vue_type_template_id_ed9609a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsSupportTracker.vue?vue&type=template&id=43174491& */ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491&");
/* harmony import */ var _AnalyticsSupportTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsSupportTracker.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsSupportTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSupportTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsSupportTracker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSupportTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsSupportTracker.vue?vue&type=template&id=43174491& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsSupportTracker.vue?vue&type=template&id=43174491&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsSupportTracker_vue_vue_type_template_id_43174491___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsTimeline.vue?vue&type=template&id=99223f2e& */ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e&");
/* harmony import */ var _AnalyticsTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsTimeline.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalyticsTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsTimeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AnalyticsTimeline.vue?vue&type=template&id=99223f2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/analytics/AnalyticsTimeline.vue?vue&type=template&id=99223f2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsTimeline_vue_vue_type_template_id_99223f2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);