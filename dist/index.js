(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Plugin = {}));
})(this, (function (exports) { 'use strict';

  var MiniProgramMonitor = /** @class */ (function () {
      function MiniProgramMonitor(requestUrl) {
          /**初始化 */
          this.init = function () { };
          /**正常日志 */
          this.info = function () {
              var params = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  params[_i] = arguments[_i];
              }
              console.log(params);
          };
          /**告警日志 */
          this.warning = function () {
              var params = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  params[_i] = arguments[_i];
              }
              console.log(params);
          };
          /**报错日志 */
          this.error = function () {
              var params = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  params[_i] = arguments[_i];
              }
              console.log(params);
          };
          this.requestUrl = requestUrl;
      }
      return MiniProgramMonitor;
  }());

  exports.MiniProgramMonitor = MiniProgramMonitor;

}));
//# sourceMappingURL=index.js.map
