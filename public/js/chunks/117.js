(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Bookmarks.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue");
/* harmony import */ var _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Locale.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/Locale.vue");
/* harmony import */ var _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DarkToggler.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue");
/* harmony import */ var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchBar.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/SearchBar.vue");
/* harmony import */ var _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CartDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/CartDropdown.vue");
/* harmony import */ var _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NotificationDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue");
/* harmony import */ var _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    // Navbar Components
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    Bookmarks: _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Locale: _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DarkToggler: _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CartDropdown: _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NotificationDropdown: _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserDropdown: _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  setup: function setup() {
    // App Name
    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeConfig"].app,
        appName = _$themeConfig$app.appName,
        appLogoImage = _$themeConfig$app.appLogoImage;
    return {
      appName: appName,
      appLogoImage: appLogoImage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarHorizontalLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue");
/* harmony import */ var _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/layouts/components/AppFooter.vue */ "./resources/js/src/@core/layouts/components/AppFooter.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_comp_functions_misc_event_listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/comp-functions/misc/event-listeners */ "./resources/js/src/@core/comp-functions/misc/event-listeners.js");
/* harmony import */ var _navigation_vertical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/navigation/vertical */ "./resources/js/src/navigation/vertical/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue");
/* harmony import */ var _useLayoutHorizontal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useLayoutHorizontal */ "./resources/js/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js");
/* harmony import */ var _components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/horizontal-nav-menu/HorizontalNavMenu.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue");
/* harmony import */ var _core_layouts_layout_vertical_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue");
/* harmony import */ var _core_layouts_layout_vertical_useVerticalLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/layouts/layout-vertical/useVerticalLayout */ "./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js");
/* harmony import */ var _mixinLayoutHorizontal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixinLayoutHorizontal */ "./resources/js/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








 // Content Renderer





 // Vertical Menu

/* eslint-disable import/order */




/* eslint-enable import/order */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppNavbarHorizontalLayout: _core_layouts_components_app_navbar_AppNavbarHorizontalLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppNavbarHorizontalLayoutBrand: _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppFooter: _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HorizontalNavMenu: _components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BNavbar"],
    // Content Renderer
    LayoutContentRendererDefault: _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    LayoutContentRendererLeft: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    LayoutContentRendererLeftDetached: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    // Vertical Menu
    VerticalNavMenu: _core_layouts_layout_vertical_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  mixins: [_mixinLayoutHorizontal__WEBPACK_IMPORTED_MODULE_16__["default"]],
  computed: {
    layoutContentRenderer: function layoutContentRenderer() {
      var rendererType = this.$route.meta.contentRenderer;
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left';
      if (rendererType === 'sidebar-left-detached') return 'layout-content-renderer-left-detached';
      return 'layout-content-renderer-default';
    }
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        skin = _useAppConfig.skin,
        navbarType = _useAppConfig.navbarType,
        footerType = _useAppConfig.footerType,
        routerTransition = _useAppConfig.routerTransition,
        isNavMenuHidden = _useAppConfig.isNavMenuHidden; // Vertical Menu


    var _useVerticalLayout = Object(_core_layouts_layout_vertical_useVerticalLayout__WEBPACK_IMPORTED_MODULE_15__["default"])(navbarType, footerType),
        isVerticalMenuActive = _useVerticalLayout.isVerticalMenuActive,
        toggleVerticalMenuActive = _useVerticalLayout.toggleVerticalMenuActive,
        overlayClasses = _useVerticalLayout.overlayClasses,
        resizeHandler = _useVerticalLayout.resizeHandler; // Resize handler


    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["onUnmounted"])(function () {
      window.removeEventListener('resize', resizeHandler);
    });

    var _useLayoutHorizontal = Object(_useLayoutHorizontal__WEBPACK_IMPORTED_MODULE_12__["default"])(navbarType, footerType, isVerticalMenuActive),
        navbarMenuTypeClass = _useLayoutHorizontal.navbarMenuTypeClass,
        layoutClasses = _useLayoutHorizontal.layoutClasses,
        footerTypeClass = _useLayoutHorizontal.footerTypeClass; // Scroll Listener


    var _useScrollListener = Object(_core_comp_functions_misc_event_listeners__WEBPACK_IMPORTED_MODULE_6__["useScrollListener"])(),
        scrolledTo = _useScrollListener.scrolledTo;

    return {
      // skin
      skin: skin,
      // Layout
      layoutClasses: layoutClasses,
      // Navbar
      navbarType: navbarType,
      navbarMenuTypeClass: navbarMenuTypeClass,
      // Menu Hidden
      isNavMenuHidden: isNavMenuHidden,
      // Router Transition
      routerTransition: routerTransition,
      // Footer
      footerTypeClass: footerTypeClass,
      // Scroll Listeners
      scrolledTo: scrolledTo,
      // Vertical Menu
      isVerticalMenuActive: isVerticalMenuActive,
      toggleVerticalMenuActive: toggleVerticalMenuActive,
      overlayClasses: overlayClasses,
      verticalNavMenuItems: _navigation_vertical__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/navigation/horizontal */ "./resources/js/src/navigation/horizontal/index.js");
/* harmony import */ var _components_horizontal_nav_menu_items_HorizontalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HorizontalNavMenuItems: _components_horizontal_nav_menu_items_HorizontalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    return {
      navMenuItems: _navigation_horizontal__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../horizontal-nav-menu-link/HorizontalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue");
/* harmony import */ var _useHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useHorizontalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js");
/* harmony import */ var _mixinHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixinHorizontalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // Composition Function



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HorizontalNavMenuGroup',
  components: {
    HorizontalNavMenuLink: _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_5__["default"])(props.item),
        refChildDropdown = _useHorizontalNavMenu.refChildDropdown,
        isActive = _useHorizontalNavMenu.isActive,
        isOpen = _useHorizontalNavMenu.isOpen,
        updateGroupOpen = _useHorizontalNavMenu.updateGroupOpen,
        updateIsActive = _useHorizontalNavMenu.updateIsActive,
        openChildDropdownOnLeft = _useHorizontalNavMenu.openChildDropdownOnLeft;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;

    return {
      refChildDropdown: refChildDropdown,
      openChildDropdownOnLeft: openChildDropdownOnLeft,
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveHorizontalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _useHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useHorizontalNavMenuHeaderGroup */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js");
/* harmony import */ var _mixinHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixinHorizontalNavMenuHeaderGroup */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js");
/* harmony import */ var _horizontal_nav_menu_group_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../horizontal-nav-menu-group/HorizontalNavMenuGroup.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue");
/* harmony import */ var _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../horizontal-nav-menu-link/HorizontalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    HorizontalNavMenuGroup: _horizontal_nav_menu_group_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    HorizontalNavMenuLink: _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixinHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_4__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        updateIsActive = _useHorizontalNavMenu.updateIsActive,
        isOpen = _useHorizontalNavMenu.isOpen,
        updateGroupOpen = _useHorizontalNavMenu.updateGroupOpen;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuHeaderGroup = _useAclUtils.canViewHorizontalNavMenuHeaderGroup;

    return {
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      resolveHorizontalNavMenuItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveHorizontalNavMenuItemComponent"],
      // ACL
      canViewHorizontalNavMenuHeaderGroup: canViewHorizontalNavMenuHeaderGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _useHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useHorizontalNavMenuHeaderLink */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js");
/* harmony import */ var _mixinHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinHorizontalNavMenuHeaderLink */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js");
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        updateIsActive = _useHorizontalNavMenu.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuHeaderLink = _useAclUtils.canViewHorizontalNavMenuHeaderLink;

    return {
      isActive: isActive,
      updateIsActive: updateIsActive,
      // ACL
      canViewHorizontalNavMenuHeaderLink: canViewHorizontalNavMenuHeaderLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _horizontal_nav_menu_header_link_HorizontalNavMenuHeaderLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue");
/* harmony import */ var _horizontal_nav_menu_header_group_HorizontalNavMenuHeaderGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue");
//
//
//
//
//
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
    HorizontalNavMenuHeaderLink: _horizontal_nav_menu_header_link_HorizontalNavMenuHeaderLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HorizontalNavMenuHeaderGroup: _horizontal_nav_menu_header_group_HorizontalNavMenuHeaderGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    var resolveNavComponent = function resolveNavComponent(item) {
      if (item.children) return 'horizontal-nav-menu-header-group';
      return 'horizontal-nav-menu-header-link';
    };

    return {
      resolveNavComponent: resolveNavComponent
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _useHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useHorizontalNavMenuLink */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js");
/* harmony import */ var _mixinHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinHorizontalNavMenuLink */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        linkProps = _useHorizontalNavMenu.linkProps,
        updateIsActive = _useHorizontalNavMenu.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuLink = _useAclUtils.canViewHorizontalNavMenuLink;

    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewHorizontalNavMenuLink: canViewHorizontalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_layout_horizontal_LayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/layout-horizontal/LayoutHorizontal.vue */ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue");
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar.vue */ "./resources/js/src/layouts/components/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
// import { $themeConfig } from '@themeConfig'



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LayoutHorizontal: _core_layouts_layout_horizontal_LayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    // AppCustomizer,
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppNavbarHorizontalLayoutBrand: _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {// showCustomizer: $themeConfig.layout.customizer,
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .bordered-layout .header-navbar {\n  box-shadow: none;\n}\n[dir] .bordered-layout .header-navbar.floating-nav {\n  border: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .header-navbar.fixed-top {\n  border-bottom: 1px solid #ebe9f1;\n  background: #f8f8f8;\n}\n[dir] .bordered-layout .main-menu {\n  box-shadow: none;\n}\n[dir=ltr] .bordered-layout .main-menu {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .bordered-layout .main-menu {\n  border-left: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .main-menu.menu-light .navigation > li.open:not(.menu-item-closing) > a, [dir] .bordered-layout .main-menu.menu-light .navigation > li.sidebar-group-active > a {\n  background: #ededed;\n}\n[dir] .bordered-layout .dropdown-menu {\n  border: 1px solid #ebe9f1 !important;\n  box-shadow: none;\n}\n[dir] .bordered-layout .main-menu .navigation, [dir] .bordered-layout .main-menu {\n  background: #f8f8f8;\n}\n[dir] .bordered-layout .card, [dir] .bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps), [dir] .bordered-layout .bs-stepper.wizard-modern .bs-stepper-content {\n  border: 1px solid #ebe9f1;\n  box-shadow: none;\n}\n[dir] .bordered-layout .footer {\n  box-shadow: none !important;\n}\n[dir] .bordered-layout .footer-fixed .footer {\n  border-top: 1px solid #ebe9f1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .horizontal-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .horizontal-menu .content {\n  margin-right: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n[dir] .horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  width: 100%;\n}\n[dir] .horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n[dir] .horizontal-menu .header-navbar {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  width: calc(100vw - (100vw - 100%) - calc(2rem * 2));\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  background: #fff;\n}\n[dir] .horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  z-index: 1000;\n}\n[dir] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  padding: 0;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  left: calc(50% - 56px);\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  right: calc(50% - 56px);\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: flex;\n  align-items: center;\n  font-size: inherit;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  margin-right: 0;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  margin-left: 0;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 230px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #7367f0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  margin-bottom: 0;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  padding-left: 1rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  padding-right: 1rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  right: 0.4rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  min-height: 52px;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  border: none;\n  margin-top: 0;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  position: absolute;\n  top: 50%;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  margin-top: -7px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  right: 1rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  right: auto;\n  left: 1rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  right: auto !important;\n  left: 100% !important;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  left: 100% !important;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  color: #6e6b7b;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transition: transform 0.2s ease;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(-5px);\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  color: #7367f0;\n  font-weight: 500;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i, [dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i, [dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-left: 0.5rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  display: flex;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  margin-right: 0.715rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  margin-left: 0.715rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  color: #fff;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  box-shadow: 0px 0px 6px 1px rgba(115, 103, 240, 0.6);\n  border-radius: 4px;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(-118deg, #7367f0, rgba(115, 103, 240, 0.7));\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n[dir] .horizontal-menu .navigation-header {\n  padding: 8px 20px;\n}\n[dir] .horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #7367f0;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n}\n}\n[dir] .horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n[dir] .horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n[dir] .horizontal-layout.navbar-floating .horizontal-menu-wrapper .navbar-horizontal.floating-nav {\n  margin: 1.3rem 2rem 0;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n[dir] .horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n[dir] .horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  top: 62px;\n}\n[dir] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  background-color: #fff;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n}\n[dir=rtl] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  right: 0;\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n[dir] .horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - calc(4.45rem + calc(3.35rem + 0.2rem)));\n}\n[dir] .horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n[dir] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  width: 100%;\n}\n[dir=ltr] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n}\n[dir=rtl] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  right: 0;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n}\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n}\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n}\n[dir] .horizontal-layout .header-navbar {\n    background: #fff;\n}\n[dir] .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n}\n}\n@media (max-width: 575.98px) {\nhtml[dir] body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n  transform: translate3d(0, 0, 0);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(-260px, 0, 0);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "navbar-container d-flex content align-items-center" },
    [
      _c("ul", { staticClass: "nav navbar-nav d-xl-none" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "b-link",
              {
                staticClass: "nav-link",
                on: { click: _vm.toggleVerticalMenuActive },
              },
              [_c("feather-icon", { attrs: { icon: "MenuIcon", size: "21" } })],
              1
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex",
        },
        [_c("bookmarks")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "nav align-items-center ml-auto" },
        [
          _c("locale"),
          _vm._v(" "),
          _c("dark-Toggler", { staticClass: "d-none d-lg-block" }),
          _vm._v(" "),
          _c("search-bar"),
          _vm._v(" "),
          _c("cart-dropdown"),
          _vm._v(" "),
          _c("notification-dropdown"),
          _vm._v(" "),
          _c("user-dropdown"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "navbar-header d-xl-block d-none" }, [
    _c("ul", { staticClass: "nav navbar-nav" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c("b-link", { staticClass: "navbar-brand", attrs: { to: "/" } }, [
            _c(
              "span",
              { staticClass: "brand-logo" },
              [_c("b-img", { attrs: { src: _vm.appLogoImage, alt: "logo" } })],
              1
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "horizontal-layout",
      class: [_vm.layoutClasses],
      staticStyle: { height: "inherit" },
      attrs: { "data-col": _vm.isNavMenuHidden ? "1-column" : null },
    },
    [
      _c(
        "b-navbar",
        {
          staticClass:
            "header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",
          class: {
            "fixed-top": _vm.$store.getters["app/currentBreakPoint"] !== "xl",
          },
          style: {
            backgroundColor:
              _vm.navbarType === "static" &&
              _vm.scrolledTo &&
              _vm.skin === "light"
                ? "white"
                : null,
            boxShadow:
              _vm.navbarType === "static" && _vm.scrolledTo
                ? "rgba(0, 0, 0, 0.05) 0px 4px 20px 0px"
                : null,
          },
          attrs: { toggleable: false },
        },
        [
          _vm._t(
            "navbar",
            function () {
              return [
                _c("app-navbar-horizontal-layout-brand"),
                _vm._v(" "),
                _c("app-navbar-horizontal-layout", {
                  attrs: {
                    "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive,
                  },
                }),
              ]
            },
            { toggleVerticalMenuActive: _vm.toggleVerticalMenuActive }
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "horizontal-menu-wrapper" },
        [
          !_vm.isNavMenuHidden
            ? _c(
                "div",
                {
                  staticClass:
                    "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",
                  class: [_vm.navbarMenuTypeClass],
                },
                [_c("horizontal-nav-menu")],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("vertical-nav-menu", {
            staticClass: "d-block d-xl-none",
            attrs: {
              "is-vertical-menu-active": _vm.isVerticalMenuActive,
              "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive,
              navMenuItems: _vm.verticalNavMenuItems,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "header",
                  fn: function (slotProps) {
                    return [
                      _vm._t("vertical-menu-header", null, null, slotProps),
                    ]
                  },
                },
              ],
              null,
              true
            ),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidenav-overlay",
        class: _vm.overlayClasses,
        on: {
          click: function ($event) {
            _vm.isVerticalMenuActive = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(_vm.layoutContentRenderer, {
            key:
              _vm.layoutContentRenderer === "layout-content-renderer-left"
                ? _vm.$route.meta.navActiveLink || _vm.$route.name
                : null,
            tag: "component",
            scopedSlots: _vm._u(
              [
                _vm._l(_vm.$scopedSlots, function (index, name) {
                  return {
                    key: name,
                    fn: function (data) {
                      return [_vm._t(name, null, null, data)]
                    },
                  }
                }),
              ],
              null,
              true
            ),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "footer footer-light", class: [_vm.footerTypeClass] },
        [
          _vm._t("footer", function () {
            return [_c("app-footer")]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("customizer"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "navbar-container main-menu-content" },
    [_c("horizontal-nav-menu-items", { attrs: { items: _vm.navMenuItems } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "dropdown dropdown-submenu",
          class: {
            show: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active active open": _vm.isActive,
            openLeft: _vm.openChildDropdownOnLeft,
          },
          on: {
            mouseenter: function () {
              return _vm.updateGroupOpen(true)
            },
            mouseleave: function () {
              return _vm.updateGroupOpen(false)
            },
          },
        },
        [
          _c(
            "b-link",
            {
              staticClass: "dropdown-item",
              class: { "dropdown-toggle": _vm.item.children },
              attrs: { href: "#" },
              on: {
                click: function () {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                },
              },
            },
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ul",
            { ref: "refChildDropdown", staticClass: "dropdown-menu" },
            _vm._l(_vm.item.children, function (child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header || child.title,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child },
              })
            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuHeaderGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "dropdown nav-item",
          class: {
            "sidebar-group-active active open": _vm.isActive,
            show: _vm.isOpen,
          },
          on: {
            mouseenter: function () {
              return _vm.updateGroupOpen(true)
            },
            mouseleave: function () {
              return _vm.updateGroupOpen(false)
            },
          },
        },
        [
          _c(
            "b-link",
            {
              staticClass: "nav-link dropdown-toggle d-flex align-items-center",
            },
            [
              _c("feather-icon", {
                attrs: { size: "14", icon: _vm.item.icon },
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.t(_vm.item.header)))]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "dropdown-menu" },
            _vm._l(_vm.item.children, function (child) {
              return _c(_vm.resolveHorizontalNavMenuItemComponent(child), {
                key: child.title,
                tag: "component",
                attrs: { item: child },
              })
            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuHeaderLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: { "sidebar-group-active active": _vm.isActive },
        },
        [
          _c(
            "b-link",
            {
              staticClass: "nav-link",
              attrs: { to: { name: _vm.item.route } },
            },
            [
              _c("feather-icon", {
                attrs: { size: "14", icon: _vm.item.icon },
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.t(_vm.item.title)))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "nav navbar-nav", attrs: { id: "main-menu-navigation" } },
    _vm._l(_vm.items, function (item) {
      return _c(_vm.resolveNavComponent(item), {
        key: item.header || item.title,
        tag: "component",
        attrs: { item: item },
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled,
          },
        },
        [
          _c(
            "b-link",
            _vm._b(
              { staticClass: "dropdown-item" },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon", size: "24" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a& ***!
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
    "layout-horizontal",
    {
      scopedSlots: _vm._u([
        {
          key: "navbar",
          fn: function (ref) {
            var toggleVerticalMenuActive = ref.toggleVerticalMenuActive
            return [
              _c("app-navbar-horizontal-layout-brand"),
              _vm._v(" "),
              _c("navbar", {
                attrs: {
                  "toggle-vertical-menu-active": toggleVerticalMenuActive,
                },
              }),
            ]
          },
        },
      ]),
    },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/comp-functions/misc/event-listeners.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/misc/event-listeners.js ***!
  \***********************************************************************/
/*! exports provided: useScrollListener, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollListener", function() { return useScrollListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

var useScrollListener = function useScrollListener() {
  var scrolledTo = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

  var scrollHandler = function scrollHandler() {
    scrolledTo.value = window.scrollY;
  };

  window.addEventListener('scroll', scrollHandler);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
    window.removeEventListener('scroll', scrollHandler);
  });
  return {
    scrolledTo: scrolledTo
  };
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4&");
/* harmony import */ var _AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=68b569d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_68b569d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e&");
/* harmony import */ var _AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=8571ee7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_8571ee7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=template&id=9b596c96& */ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96&");
/* harmony import */ var _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=template&id=9b596c96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=9b596c96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_9b596c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=template&id=fcd567a2& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2&");
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=template&id=fcd567a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=fcd567a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_fcd567a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4&");
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=5e3ab3d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_5e3ab3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
// eslint-disable-next-line object-curly-newline
 // import store from '@/store'


function useHorizontalNavMenuGroup(item) {
  // ------------------------------------------------
  // childDropdown
  // ------------------------------------------------
  var refChildDropdown = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var openChildDropdownOnLeft = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false); // ------------------------------------------------
  // isActive
  // ------------------------------------------------

  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateGroupOpen = function updateGroupOpen(val) {
    isOpen.value = val;

    if (val) {
      Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
        var childDropdownWidth = refChildDropdown.value.offsetWidth;
        var windowContentWidth = window.innerWidth - 16;

        var _refChildDropdown$val = refChildDropdown.value.getBoundingClientRect(),
            childDropdownLeft = _refChildDropdown$val.left;

        var shallDropLeft = childDropdownLeft + childDropdownWidth - windowContentWidth;
        openChildDropdownOnLeft.value = shallDropLeft > 0; // Add scroll to child dd if don't have much space

        var refChildDropdownTop = refChildDropdown.value.getBoundingClientRect().top;
        var refChildDropdownHeight = refChildDropdown.value.getBoundingClientRect().height;

        if (window.innerHeight - refChildDropdownTop - refChildDropdownHeight - 28 < 1) {
          var maxHeight = window.innerHeight - refChildDropdownTop - 70;
          refChildDropdown.value.style.maxHeight = "".concat(maxHeight, "px");
          refChildDropdown.value.style.overflowY = 'auto';
          refChildDropdown.value.style.overflowX = 'hidden';
        }
      });
    } else {
      openChildDropdownOnLeft.value = false;
    }
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavGroupActive"])(item.children);
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    updateIsActive: updateIsActive,
    refChildDropdown: refChildDropdown,
    openChildDropdownOnLeft: openChildDropdownOnLeft
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf&");
/* harmony import */ var _HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=557d85cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_557d85cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavGroupActive"])(item.children);
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue":
/*!********************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca&");
/* harmony import */ var _HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=f77176ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_f77176ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6&");
/* harmony import */ var _HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuItems.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=661a5cf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_661a5cf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8&");
/* harmony import */ var _HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuLink.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=3fb0fae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_3fb0fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


function useHorizontalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: function $route() {
      if (this.$store.state.app.windowWidth < _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].xl) {
        this.isVerticalMenuActive = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayoutHorizontal; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function useLayoutHorizontal(navbarMenuType, footerType, isVerticalMenuActive) {
  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].getters['app/currentBreakPoint'];
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var classes = [];

    if (currentBreakpoint.value === 'xl') {
      classes.push('horizontal-menu');
    } else {
      classes.push('vertical-overlay-menu'); // classes.push('vertical-layout')

      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    } // Navbar


    classes.push("navbar-".concat(navbarMenuType.value)); // Footer

    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  }); // const resizeHandler = () => {
  //   isVerticalMenuActive.value = window.innerWidth >= 1200
  //   if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl'
  //   else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg'
  //   else if (window.innerWidth >= 768) currentBreakpoint.value = 'md'
  //   else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm'
  //   else currentBreakpoint.value = 'xs'
  // }

  var navbarMenuTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (navbarMenuType.value === 'sticky') return 'fixed-top';
    if (navbarMenuType.value === 'static') return '';
    if (navbarMenuType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    layoutClasses: layoutClasses,
    navbarMenuTypeClass: navbarMenuTypeClass,
    footerTypeClass: footerTypeClass
  };
}

/***/ }),

/***/ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/layouts/horizontal/LayoutHorizontal.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a& */ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a&");
/* harmony import */ var _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/horizontal/LayoutHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=0d1b7a5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_0d1b7a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/navigation/horizontal/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/navigation/horizontal/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Pages',
  icon: 'FileIcon',
  children: [{
    title: 'Import',
    route: 'home',
    icon: 'FileIcon'
  }, {
    title: 'Keywords',
    route: 'Keyword',
    icon: 'FileIcon'
  }, {
    title: 'Research',
    route: 'search',
    icon: 'SearchIcon'
  }]
}]);

/***/ })

}]);