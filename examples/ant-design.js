webpackJsonp([2],{

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rc_dialog_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__ = __webpack_require__(41);




/* eslint no-console:0 */



// use import Dialog from 'rc-dialog'

var clearPath = 'M793 242H366v-74c0-6.7-7.7-10.4-12.9' + '-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c' + '5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4' + ' 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-' + '28.7 64-64V306c0-35.3-28.7-64-64-64z';
var getSvg = function getSvg(path) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var align = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("i", __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, props), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", fill: "currentColor", style: align ? { verticalAlign: '-.125em ' } : {} }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("path", { d: path, "p-id": "5827" })));
};

var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.state = {
            visible: false,
            visible2: false,
            width: 600,
            destroyOnClose: false,
            center: false,
            mousePosition: undefined,
            useIcon: false,
            forceRender: false
        };
        _this.onClick = function (e) {
            _this.setState({
                mousePosition: {
                    x: e.pageX,
                    y: e.pageY
                },
                visible: true
            });
        };
        _this.onClose = function (e) {
            _this.setState({
                visible: false
            });
        };
        _this.onClose2 = function (e) {
            _this.setState({
                visible: false,
                visible2: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        _this.onForceRenderChange = function (e) {
            _this.setState({
                forceRender: e.target.checked
            });
        };
        _this.changeWidth = function () {
            _this.setState({
                width: _this.state.width === 600 ? 800 : 600
            });
        };
        _this.center = function (e) {
            _this.setState({
                center: e.target.checked
            });
        };
        _this.toggleCloseIcon = function () {
            _this.setState({
                useIcon: !_this.state.useIcon
            });
        };
        return _this;
    }

    MyControl.prototype.render = function render() {
        var _this2 = this;

        var style = {
            width: this.state.width
        };
        var wrapClassName = '';
        if (this.state.center) {
            wrapClassName = 'center';
        }
        var dialog = __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__["a" /* default */], { visible: this.state.visible, wrapClassName: wrapClassName, animation: "zoom", maskAnimation: "fade", onClose: this.onClose, style: style, mousePosition: this.state.mousePosition, destroyOnClose: this.state.destroyOnClose, closeIcon: this.state.useIcon ? getSvg(clearPath, {}, true) : undefined, forceRender: this.state.forceRender, focusTriggerAfterClose: false }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("input", { autoFocus: true }), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("p", null, "basic modal"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: function onClick() {
                _this2.setState({
                    visible: false,
                    visible2: true
                });
            } }, '\u6253\u5F00\u7B2C\u4E8C\u4E2A\u5E76\u5173\u95ED\u5F53\u524D\u7684'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: function onClick() {
                _this2.setState({
                    visible: true,
                    visible2: true
                });
            } }, '\u6253\u5F00\u7B2C\u4E8C\u4E2A'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: this.changeWidth }, "change width"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: this.toggleCloseIcon }, "use custom icon, is using icon: ", this.state.useIcon && 'true' || 'false', "."), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { style: { height: 200 } }));
        var dialog2 = __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__["a" /* default */], { visible: this.state.visible2, onClose: this.onClose2 }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("input", { autoFocus: true }), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("p", null, "basic modal"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: function onClick() {
                _this2.setState({
                    visible2: false
                });
            } }, '\u5173\u95ED\u5F53\u524D'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: this.onClose2 }, '\u5173\u95ED\u6240\u6709'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: this.changeWidth }, "change width"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { onClick: this.toggleCloseIcon }, "use custom icon, is using icon: ", this.state.useIcon && 'true' || 'false', "."), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { style: { height: 200 } }));
        return __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { style: { width: '90%', margin: '0 auto' } }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("style", null, '\n            .center {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            }\n            '), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("p", null, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange })), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("label", null, "center", __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("input", { type: "checkbox", checked: this.state.center, onChange: this.center })), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("label", null, "force render", __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("input", { type: "checkbox", checked: this.state.forceRender, onChange: this.onForceRenderChange }))), dialog, dialog2);
    };

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_6_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](MyControl, null)), document.getElementById('__react-content'));

/***/ })

},[61]);
//# sourceMappingURL=ant-design.js.map