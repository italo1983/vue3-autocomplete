/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Autocomplete.vue?vue&type=template&id=0a3f96d2&scoped=true&ts=true

const _hoisted_1 = { class: "vue3-autocomplete-container" };
const _hoisted_2 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("input", {
            ref: "autocompleteRef",
            type: "text",
            onInput: _cache[0] || (_cache[0] =
                //@ts-ignore
                (...args) => ($setup.handleInput && $setup.handleInput(...args))),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.searchText) = $event)),
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)($setup.getInputClass),
            onFocus: _cache[2] || (_cache[2] =
                //@ts-ignore
                (...args) => ($setup.displayResults && $setup.displayResults(...args))),
            onBlur: _cache[3] || (_cache[3] =
                //@ts-ignore
                (...args) => ($setup.hideResults && $setup.hideResults(...args)))
        }, null, 34), [
            [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vModelText, $setup.searchText]
        ]),
        ($setup.shouldShowResults)
            ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                key: 0,
                style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ width: $setup.inputWidth + 'px' }),
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)($setup.getResultsContainerClass)
            }, [
                ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($setup.filteredResults, (item) => {
                    return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                        key: item,
                        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)($setup.getResultsItemClass),
                        onClick: ($event) => ($setup.clickItem(item)),
                        onMousedown: _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)(() => { }, ["prevent"]))
                    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.displayItem(item)), 43, _hoisted_2));
                }), 128))
            ], 6))
            : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
    ]));
}

;// ./src/Autocomplete.vue?vue&type=template&id=0a3f96d2&scoped=true&ts=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Autocomplete.vue?vue&type=script&lang=ts

/* harmony default export */ var Autocompletevue_type_script_lang_ts = ({
    name: 'Autocomplete',
    props: {
        debounce: {
            type: Number,
            default: 0
        },
        inputClass: {
            type: Array,
            default: []
        },
        max: {
            type: Number,
            default: 10
        },
        results: {
            type: Array,
            default: []
        },
        resultsContainerClass: {
            type: Array,
            default: []
        },
        resultsItemClass: {
            type: Array,
            default: []
        },
        displayItem: {
            type: Function,
            default: (item) => {
                // @ts-ignore
                return typeof item === 'string' ? item : item.name;
            }
        }
    },
    emits: [
        'input',
        'onSelect'
    ],
    setup(props, context) {
        const autocompleteRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();
        let inputWidth = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(0);
        let searchText = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
        let timeout;
        let showResults = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(true);
        /**
         * Same as Vue2 'mounted' function, used to get refs correctly
         */
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
            inputWidth.value = autocompleteRef.value.offsetWidth - 2;
        });
        /**
         * Triggered on input changes with a dynamic debounce
         * @param { InputEvent } e
         */
        function handleInput(e) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                context.emit('input', e.target.value);
            }, props.debounce);
        }
        /**
         * Triggered on click on a result item
         */
        function clickItem(data) {
            context.emit('onSelect', data);
            showResults.value = false;
        }
        /**
         * Called on focus
         */
        function displayResults() {
            showResults.value = true;
        }
        /**
         * Called on blur
         */
        function hideResults() {
            showResults.value = false;
        }
        /**
         * Return class(es) for input element
         */
        const getInputClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return props.inputClass.length > 0 ? props.inputClass : ['vue3-input'];
        });
        /**
         * Return class(es) for results container element
         */
        const getResultsContainerClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return props.resultsContainerClass.length > 0 ?
                props.resultsContainerClass :
                ['vue3-results-container'];
        });
        /**
         * Return class(es) for results item elements
         */
        const getResultsItemClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return props.resultsItemClass.length > 0 ?
                props.resultsItemClass :
                ['vue3-results-item'];
        });
        /**
         * Show results depending on results length and showResults boolean
         */
        let shouldShowResults = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return showResults.value && (props.results.length > 0);
        });
        /**
         * Return results filtered with the 'max' props
         */
        const filteredResults = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return props.results.slice(0, props.max);
        });
        /**
         * Return data, making them reactive
         */
        return {
            searchText,
            showResults,
            autocompleteRef,
            inputWidth,
            displayResults,
            hideResults,
            handleInput,
            clickItem,
            filteredResults,
            getInputClass,
            getResultsContainerClass,
            getResultsItemClass,
            shouldShowResults
        };
    }
});

;// ./src/Autocomplete.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Autocomplete.vue?vue&type=style&index=0&id=0a3f96d2&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// ./src/Autocomplete.vue?vue&type=style&index=0&id=0a3f96d2&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/Autocomplete.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Autocompletevue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-0a3f96d2"]])

/* harmony default export */ var Autocomplete = (__exports__);
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (Autocomplete);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=vue3-autocomplete.common.js.map