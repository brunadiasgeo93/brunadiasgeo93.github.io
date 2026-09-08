System.register(["jimu-core/emotion","jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/table-deforestation/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const CelulaProgresso = ({ valor }) => {
    const valorNumerico = Number(valor) || 0;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { position: 'relative', width: '100%', height: '24px', backgroundColor: '#fff' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    position: 'absolute', top: 0, left: 0, height: '100%', width: `${valorNumerico}%`,
                    backgroundColor: '#009e60', zIndex: 1
                } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                    position: 'relative', zIndex: 2, paddingRight: '8px', textAlign: 'right',
                    lineHeight: '24px', color: '#000', fontSize: '13px', fontWeight: 'bold'
                }, children: [valorNumerico.toFixed(2).replace('.', ','), "%"] })] }));
};
const Widget = (props) => {
    const config = props.config;
    // A memória agora é uma lista (array) de anos. Se estiver vazia [], mostra todos.
    const [anosSelecionados, setAnosSelecionados] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const colunasSelecionadas = !!(config && config.campoAno && config.campoArea);
    const dataRender = (ds) => {
        if (!ds)
            return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "p-3 text-center", children: "Conectando \u00E0 camada..." });
        if (ds.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Loading) {
            return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "p-3 text-center", style: { color: '#008b45' }, children: "Baixando e calculando dados..." });
        }
        const records = ds.getRecords();
        if (!records || records.length === 0) {
            return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "p-3 text-center", children: "Nenhum dado encontrado na consulta." });
        }
        const totaisPorAno = {};
        records.forEach(rec => {
            const dados = rec.getData();
            const ano = dados[config.campoAno];
            const areaHectares = Number(dados[config.campoArea]) * 100;
            if (!ano || isNaN(areaHectares))
                return;
            if (!totaisPorAno[ano]) {
                totaisPorAno[ano] = { total: 0, cat1: 0, cat2: 0, cat3: 0, cat4: 0 };
            }
            totaisPorAno[ano].total += areaHectares;
            if (areaHectares < 10)
                totaisPorAno[ano].cat1 += areaHectares;
            else if (areaHectares >= 10 && areaHectares < 50)
                totaisPorAno[ano].cat2 += areaHectares;
            else if (areaHectares >= 50 && areaHectares < 100)
                totaisPorAno[ano].cat3 += areaHectares;
            else
                totaisPorAno[ano].cat4 += areaHectares;
        });
        // Lista de todos os anos disponíveis nos dados
        const anosOrdenados = Object.keys(totaisPorAno).sort((a, b) => Number(b) - Number(a));
        // Formata os anos para o padrão que o componente MultiSelect exige
        const opcoesMenu = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(anosOrdenados.map(ano => ({
            value: ano,
            label: ano
        })));
        // Filtra as linhas da tabela: se a lista de seleção estiver vazia, exibe tudo.
        const anosFiltrados = anosSelecionados.length === 0
            ? anosOrdenados
            : anosOrdenados.filter(ano => anosSelecionados.includes(ano));
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { width: '100%' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: { marginRight: '10px', fontWeight: 'bold', marginBottom: 0, whiteSpace: 'nowrap' }, children: "Filtrar por Ano:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '250px' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, { items: opcoesMenu, values: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(anosSelecionados), onClickItem: (evt, value, valoresMarcados) => {
                                    setAnosSelecionados(valoresMarcados);
                                }, placeholder: "Todos os Anos", buttonProps: { style: { width: '100%' } } }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse', textAlign: 'center', border: '1px solid #000' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { style: { backgroundColor: '#cccccc' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { border: '1px solid #000', padding: '4px' }, children: "Ano" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { border: '1px solid #000', padding: '4px' }, children: "Menor que 10 ha" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { border: '1px solid #000', padding: '4px' }, children: "Entre 10 e 50 ha" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { border: '1px solid #000', padding: '4px' }, children: "Entre 50 e 100 ha" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { border: '1px solid #000', padding: '4px' }, children: "Acima de 100 ha" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: anosFiltrados.map((ano) => {
                                const dados = totaisPorAno[ano];
                                const total = dados.total > 0 ? dados.total : 1;
                                const p1 = (dados.cat1 / total) * 100;
                                const p2 = (dados.cat2 / total) * 100;
                                const p3 = (dados.cat3 / total) * 100;
                                const p4 = (dados.cat4 / total) * 100;
                                return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: '1px solid #000', fontWeight: 'bold', padding: '4px' }, children: ano }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: '1px solid #000', padding: 0 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CelulaProgresso, { valor: p1 }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: '1px solid #000', padding: 0 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CelulaProgresso, { valor: p2 }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: '1px solid #000', padding: 0 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CelulaProgresso, { valor: p3 }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: '1px solid #000', padding: 0 }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CelulaProgresso, { valor: p4 }) })] }, ano));
                            }) })] })] }));
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-tabela p-3", style: { backgroundColor: '#fff', width: '100%', overflowX: 'auto', height: '100%' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { style: { textAlign: 'center', color: '#008b45', marginBottom: '15px', fontWeight: 'bold' }, children: "TAMANHO DE POL\u00CDGONOS DE DESMATAMENTO" }), colunasSelecionadas && props.useDataSources && props.useDataSources.length > 0 ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, query: {
                    where: '1=1',
                    outFields: [config.campoAno, config.campoArea],
                    returnGeometry: false,
                    pageSize: 50000
                }, children: dataRender })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { textAlign: 'center', color: '#666', marginTop: '20px' }, children: "Selecione a camada de dados e mapeie as colunas no painel lateral." }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YWJsZS1kZWZvcmVzdGF0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdUU7QUFDcEY7QUFHdEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBcUIsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUNMLDBFQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsYUFDMUYseUVBQUssS0FBSyxFQUFFO29CQUNWLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdB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LHVFQUFHLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLG1GQUUvRCxDQUNMLElBQ0csQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDO0FBQ2QsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RhYmxlLWRlZm9yZXN0YXRpb24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBJbW11dGFibGUsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZVN0YXR1cyB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0IH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgQ2VsdWxhUHJvZ3Jlc3NvID0gKHsgdmFsb3IgfTogeyB2YWxvcjogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB2YWxvck51bWVyaWNvID0gTnVtYmVyKHZhbG9yKSB8fCAwO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcyNHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6IGAke3ZhbG9yTnVtZXJpY299JWAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOWU2MCcsIHpJbmRleDogMVxyXG4gICAgICB9fSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMiwgcGFkZGluZ1JpZ2h0OiAnOHB4JywgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JywgY29sb3I6ICcjMDAwJywgZm9udFNpemU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgICAgIH19PlxyXG4gICAgICAgIHt2YWxvck51bWVyaWNvLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICcsJyl9JVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHByb3BzLmNvbmZpZztcclxuICBcclxuICAvLyBBIG1lbcOzcmlhIGFnb3JhIMOpIHVtYSBsaXN0YSAoYXJyYXkpIGRlIGFub3MuIFNlIGVzdGl2ZXIgdmF6aWEgW10sIG1vc3RyYSB0b2Rvcy5cclxuICBjb25zdCBbYW5vc1NlbGVjaW9uYWRvcywgc2V0QW5vc1NlbGVjaW9uYWRvc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIFxyXG4gIGNvbnN0IGNvbHVuYXNTZWxlY2lvbmFkYXMgPSAhIShjb25maWcgJiYgY29uZmlnLmNhbXBvQW5vICYmIGNvbmZpZy5jYW1wb0FyZWEpO1xyXG5cclxuICBjb25zdCBkYXRhUmVuZGVyID0gKGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICBpZiAoIWRzKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5Db25lY3RhbmRvIMOgIGNhbWFkYS4uLjwvZGl2PjtcclxuICAgIFxyXG4gICAgaWYgKGRzLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRpbmcpIHtcclxuICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtMyB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7Y29sb3I6ICcjMDA4YjQ1J319PkJhaXhhbmRvIGUgY2FsY3VsYW5kbyBkYWRvcy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWNvcmRzID0gZHMuZ2V0UmVjb3JkcygpO1xyXG5cclxuICAgIGlmICghcmVjb3JkcyB8fCByZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5OZW5odW0gZGFkbyBlbmNvbnRyYWRvIG5hIGNvbnN1bHRhLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3RhaXNQb3JBbm86IHsgW2Fubzogc3RyaW5nXTogeyB0b3RhbDogbnVtYmVyLCBjYXQxOiBudW1iZXIsIGNhdDI6IG51bWJlciwgY2F0MzogbnVtYmVyLCBjYXQ0OiBudW1iZXIgfSB9ID0ge307XHJcblxyXG4gICAgcmVjb3Jkcy5mb3JFYWNoKHJlYyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhZG9zID0gcmVjLmdldERhdGEoKTtcclxuICAgICAgY29uc3QgYW5vID0gZGFkb3NbY29uZmlnLmNhbXBvQW5vXTtcclxuICAgICAgY29uc3QgYXJlYUhlY3RhcmVzID0gTnVtYmVyKGRhZG9zW2NvbmZpZy5jYW1wb0FyZWFdKSAqIDEwMDtcclxuXHJcbiAgICAgIGlmICghYW5vIHx8IGlzTmFOKGFyZWFIZWN0YXJlcykpIHJldHVybjtcclxuXHJcbiAgICAgIGlmICghdG90YWlzUG9yQW5vW2Fub10pIHtcclxuICAgICAgICB0b3RhaXNQb3JBbm9bYW5vXSA9IHsgdG90YWw6IDAsIGNhdDE6IDAsIGNhdDI6IDAsIGNhdDM6IDAsIGNhdDQ6IDAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG90YWlzUG9yQW5vW2Fub10udG90YWwgKz0gYXJlYUhlY3RhcmVzO1xyXG5cclxuICAgICAgaWYgKGFyZWFIZWN0YXJlcyA8IDEwKSB0b3RhaXNQb3JBbm9bYW5vXS5jYXQxICs9IGFyZWFIZWN0YXJlcztcclxuICAgICAgZWxzZSBpZiAoYXJlYUhlY3RhcmVzID49IDEwICYmIGFyZWFIZWN0YXJlcyA8IDUwKSB0b3RhaXNQb3JBbm9bYW5vXS5jYXQyICs9IGFyZWFIZWN0YXJlcztcclxuICAgICAgZWxzZSBpZiAoYXJlYUhlY3RhcmVzID49IDUwICYmIGFyZWFIZWN0YXJlcyA8IDEwMCkgdG90YWlzUG9yQW5vW2Fub10uY2F0MyArPSBhcmVhSGVjdGFyZXM7XHJcbiAgICAgIGVsc2UgdG90YWlzUG9yQW5vW2Fub10uY2F0NCArPSBhcmVhSGVjdGFyZXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBMaXN0YSBkZSB0b2RvcyBvcyBhbm9zIGRpc3BvbsOtdmVpcyBub3MgZGFkb3NcclxuICAgIGNvbnN0IGFub3NPcmRlbmFkb3MgPSBPYmplY3Qua2V5cyh0b3RhaXNQb3JBbm8pLnNvcnQoKGEsIGIpID0+IE51bWJlcihiKSAtIE51bWJlcihhKSk7XHJcblxyXG4gICAgLy8gRm9ybWF0YSBvcyBhbm9zIHBhcmEgbyBwYWRyw6NvIHF1ZSBvIGNvbXBvbmVudGUgTXVsdGlTZWxlY3QgZXhpZ2VcclxuICAgIGNvbnN0IG9wY29lc01lbnUgPSBJbW11dGFibGUoYW5vc09yZGVuYWRvcy5tYXAoYW5vID0+ICh7XHJcbiAgICAgIHZhbHVlOiBhbm8sXHJcbiAgICAgIGxhYmVsOiBhbm9cclxuICAgIH0pKSk7XHJcblxyXG4gICAgLy8gRmlsdHJhIGFzIGxpbmhhcyBkYSB0YWJlbGE6IHNlIGEgbGlzdGEgZGUgc2VsZcOnw6NvIGVzdGl2ZXIgdmF6aWEsIGV4aWJlIHR1ZG8uXHJcbiAgICBjb25zdCBhbm9zRmlsdHJhZG9zID0gYW5vc1NlbGVjaW9uYWRvcy5sZW5ndGggPT09IDAgXHJcbiAgICAgID8gYW5vc09yZGVuYWRvcyBcclxuICAgICAgOiBhbm9zT3JkZW5hZG9zLmZpbHRlcihhbm8gPT4gYW5vc1NlbGVjaW9uYWRvcy5pbmNsdWRlcyhhbm8pKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIE8gTWVudSBkZSBNw7psdGlwbGEgU2VsZcOnw6NvICovfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fT5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkJvdHRvbTogMCwgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgIEZpbHRyYXIgcG9yIEFubzpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiBFc3RhIGRpdiBcInRyYXZhXCIgYSBsYXJndXJhIGRvIE11bHRpU2VsZWN0IHBhcmEgbsOjbyBlc3RvdXJhciBuYSB0ZWxhICovfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzI1MHB4JyB9fT5cclxuICAgICAgICAgICAgPE11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXRlbXM9e29wY29lc01lbnV9XHJcbiAgICAgICAgICAgICAgdmFsdWVzPXtJbW11dGFibGUoYW5vc1NlbGVjaW9uYWRvcyl9XHJcbiAgICAgICAgICAgICAgb25DbGlja0l0ZW09eyhldnQsIHZhbHVlLCB2YWxvcmVzTWFyY2Fkb3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFub3NTZWxlY2lvbmFkb3ModmFsb3Jlc01hcmNhZG9zIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9kb3Mgb3MgQW5vc1wiXHJcbiAgICAgICAgICAgICAgYnV0dG9uUHJvcHM9e3sgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJyB9IH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEEgVGFiZWxhICovfVxyXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnIH19PlxyXG4gICAgICAgICAgPHRoZWFkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnIH19PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJywgcGFkZGluZzogJzRweCcgfX0+QW5vPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAnNHB4JyB9fT5NZW5vciBxdWUgMTAgaGE8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIHBhZGRpbmc6ICc0cHgnIH19PkVudHJlIDEwIGUgNTAgaGE8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIHBhZGRpbmc6ICc0cHgnIH19PkVudHJlIDUwIGUgMTAwIGhhPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAnNHB4JyB9fT5BY2ltYSBkZSAxMDAgaGE8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2Fub3NGaWx0cmFkb3MubWFwKChhbm8pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkYWRvcyA9IHRvdGFpc1BvckFub1thbm9dO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZGFkb3MudG90YWwgPiAwID8gZGFkb3MudG90YWwgOiAxOyBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBwMSA9IChkYWRvcy5jYXQxIC8gdG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHAyID0gKGRhZG9zLmNhdDIgLyB0b3RhbCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgY29uc3QgcDMgPSAoZGFkb3MuY2F0MyAvIHRvdGFsKSAqIDEwMDtcclxuICAgICAgICAgICAgICBjb25zdCBwNCA9IChkYWRvcy5jYXQ0IC8gdG90YWwpICogMTAwO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17YW5vfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJywgZm9udFdlaWdodDogJ2JvbGQnLCBwYWRkaW5nOiAnNHB4JyB9fT57YW5vfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIHBhZGRpbmc6IDAgfX0+PENlbHVsYVByb2dyZXNzbyB2YWxvcj17cDF9IC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJywgcGFkZGluZzogMCB9fT48Q2VsdWxhUHJvZ3Jlc3NvIHZhbG9yPXtwMn0gLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAwIH19PjxDZWx1bGFQcm9ncmVzc28gdmFsb3I9e3AzfSAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIHBhZGRpbmc6IDAgfX0+PENlbHVsYVByb2dyZXNzbyB2YWxvcj17cDR9IC8+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtdGFiZWxhIHAtM1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCB3aWR0aDogJzEwMCUnLCBvdmVyZmxvd1g6ICdhdXRvJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgIDxoNSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJyMwMDhiNDUnLCBtYXJnaW5Cb3R0b206ICcxNXB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgIFRBTUFOSE8gREUgUE9Mw41HT05PUyBERSBERVNNQVRBTUVOVE9cclxuICAgICAgPC9oNT5cclxuICAgICAgXHJcbiAgICAgIHtjb2x1bmFzU2VsZWNpb25hZGFzICYmIHByb3BzLnVzZURhdGFTb3VyY2VzICYmIHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnQgXHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gXHJcbiAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICBxdWVyeT17e1xyXG4gICAgICAgICAgICB3aGVyZTogJzE9MScsXHJcbiAgICAgICAgICAgIG91dEZpZWxkczogW2NvbmZpZy5jYW1wb0FubywgY29uZmlnLmNhbXBvQXJlYV0sXHJcbiAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDUwMDAwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkYXRhUmVuZGVyfVxyXG4gICAgICAgIDwvRGF0YVNvdXJjZUNvbXBvbmVudD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJyM2NjYnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgIFNlbGVjaW9uZSBhIGNhbWFkYSBkZSBkYWRvcyBlIG1hcGVpZSBhcyBjb2x1bmFzIG5vIHBhaW5lbCBsYXRlcmFsLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==