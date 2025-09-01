// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
"use strict";
const Game = require("789b00406e138236");
const btn = document.querySelector(".button");
const game = new Game(document.querySelector(".game-field"), document.querySelector(".message-start"), document.querySelector(".message-lose"), document.querySelector(".message-win"), document.querySelector(".game-score"), document.querySelector(".info"));
btn.addEventListener("click", ()=>{
    if (btn.classList.contains("start")) {
        if (game.start()) {
            btn.classList.remove("start");
            btn.className += " restart";
            btn.textContent = "Restart";
        }
    } else game.restart();
});
document.addEventListener("keydown", (e)=>checkKey(e));
function checkKey(e) {
    switch(e.key){
        case "ArrowLeft":
            game.moveLeft();
            break;
        case "ArrowRight":
            game.moveRight();
            break;
        case "ArrowUp":
            game.moveUp();
            break;
        case "ArrowDown":
            game.moveDown();
            break;
        default:
            return null;
    }
}

},{"789b00406e138236":"eIbh2"}],"eIbh2":[function(require,module,exports) {
/* eslint-disable function-paren-newline */ "use strict";
class Game {
    /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */ static length = 4;
    constructor(field, startMsg, loseMsg, winMsg, scoreGame, info){
        // eslint-disable-next-line no-console
        this.initialState = this.createInitialState();
        this.sum = 0;
        this.score = 0;
        this.lastGeneratedCell = {};
        this.startBtn = null;
        this.field = field;
        this.startMsg = startMsg;
        this.loseMsg = loseMsg;
        this.winMsg = winMsg;
        this.scoreGame = scoreGame;
        this.info = info;
    }
    moveLeft() {
        if (this.checkHorizontalMerging("left")) {
            let localSum = 0;
            for(let r = 0; r < Game.length; r++){
                const row = this.filterZero(this.initialState[r]);
                const { arr, sum } = this.slideValue(row);
                localSum += sum;
                this.initialState[r] = arr;
            }
            if (localSum > 0) this.moveScore(localSum);
            this.setNewRandomNum();
            this.getState();
            this.scoreGame.textContent = this.getScore();
            this.checkStatus();
        }
    }
    moveRight() {
        if (this.checkHorizontalMerging("rigth")) {
            let localSum = 0;
            for(let r = 0; r < Game.length; r++){
                const row = this.filterZero(this.initialState[r]).reverse();
                const { arr, sum } = this.slideValue(row);
                localSum += sum;
                this.initialState[r] = arr.reverse();
            }
            if (localSum > 0) this.moveScore(localSum);
            this.setNewRandomNum();
            this.getState();
            this.scoreGame.textContent = this.getScore();
            this.checkStatus();
        }
    }
    moveUp() {
        if (this.checkVerticalMerging("up")) {
            let localSum = 0;
            for(let c = 0; c < Game.length; c++){
                let col = [
                    this.initialState[0][c],
                    this.initialState[1][c],
                    this.initialState[2][c],
                    this.initialState[3][c]
                ];
                col = this.filterZero(col);
                const { arr, sum } = this.slideValue(col);
                localSum += sum;
                for(let r = 0; r < Game.length; r++)this.initialState[r][c] = arr[r];
            }
            if (localSum > 0) this.moveScore(localSum);
            this.setNewRandomNum();
            this.getState();
            this.scoreGame.textContent = this.getScore();
            this.checkStatus();
        }
    }
    moveDown() {
        if (this.checkVerticalMerging("down")) {
            let localSum = 0;
            for(let c = 0; c < Game.length; c++){
                let col = [
                    this.initialState[0][c],
                    this.initialState[1][c],
                    this.initialState[2][c],
                    this.initialState[3][c]
                ].reverse();
                col = this.filterZero(col);
                const { arr, sum } = this.slideValue(col);
                localSum += sum;
                arr.reverse();
                for(let r = 0; r < Game.length; r++)this.initialState[r][c] = arr[r];
            }
            if (localSum > 0) this.moveScore(localSum);
            this.setNewRandomNum();
            this.getState();
            this.scoreGame.textContent = this.getScore();
            this.checkStatus();
        }
    }
    /**
   * @returns {number}
   */ getScore() {
        return this.score;
    }
    /**
   * @returns {number[][]}
   */ getState() {
        const cells = document.querySelectorAll(".field-cell");
        for(let i = 0; i < cells.length; i++){
            const indexRow = Math.floor(i / Game.length);
            const indexCol = i - indexRow * Game.length;
            const value = this.initialState[indexRow][indexCol];
            if (!value) cells[i].textContent = "";
            else cells[i].textContent = value;
            cells[i].classList = [
                "field-cell"
            ];
            if (value !== 0) cells[i].classList.add(`field-cell--${value}`);
            if (this.lastGeneratedCell && this.lastGeneratedCell.row === indexRow && this.lastGeneratedCell.col === indexCol) cells[i].classList.add("new-cell");
        }
    }
    /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */ getStatus() {
        if (this.initialState.flat().some((value)=>value === 2048)) return "win";
        if (!this.checkHorizontalMerging("left") && !this.checkHorizontalMerging("right") && !this.checkVerticalMerging("up") && !this.checkVerticalMerging("down")) return "lose";
    }
    start() {
        const begin = confirm("Are you ready to start a new game?");
        let initialNums;
        if (begin) {
            initialNums = this.getInitialNums();
            this.initialState = this.setInitialState(initialNums);
            this.getState();
            this.startMsg.classList.add("hidden");
            return true;
        }
        return false;
    }
    restart() {
        const restart = confirm("Are you sure you want to start a new game? All progress will be lost!");
        let initialNums;
        if (restart) {
            this.score = 0;
            this.scoreGame.textContent = this.score;
            initialNums = this.getInitialNums();
            this.initialState = this.setInitialState(initialNums);
            this.getState();
            this.getScore();
            return true;
        }
        return null;
    }
    // Add your own methods here
    createInitialState() {
        return [
            ...Array(Game.length)
        ].map(()=>Array(Game.length).fill(0));
    }
    startNewGame() {
        this.initialState = this.createInitialState();
        this.score = 0;
        this.scoreGame.textContent = this.score;
        this.startMsg.classList.add("hidden");
        this.loseMsg.classList.add("hidden");
        this.winMsg.classList.add("hidden");
        const initialNums = this.getInitialNums();
        this.initialState = this.setInitialState(initialNums);
        this.getState();
    }
    checkHorizontalMerging(direction) {
        let allowed = false;
        for (const row of this.initialState){
            for(let i = 0; i < row.length - 1; i++){
                const currentCell = row[i];
                const nextCell = row[i + 1];
                if (currentCell !== 0 && currentCell === nextCell) allowed = true;
            }
            const result = this.filterZero(row);
            if (direction === "left") while(result.length < Game.length)result.push(0);
            if (direction === "rigth") while(result.length < Game.length)result.unshift(0);
            for(let i = 0; i < row.length; i++)if (row[i] !== result[i]) {
                allowed = true;
                break;
            }
        }
        return allowed;
    }
    checkVerticalMerging(direction) {
        let allowed = false;
        for(let c = 0; c < Game.length; c++){
            const col = [
                this.initialState[0][c],
                this.initialState[1][c],
                this.initialState[2][c],
                this.initialState[3][c]
            ];
            for(let i = 0; i < col.length - 1; i++){
                const currentCell = col[i];
                const nextCell = col[i + 1];
                if (currentCell !== 0 && currentCell === nextCell) allowed = true;
            }
            const result = this.filterZero(col);
            if (direction === "up") while(result.length < Game.length)result.push(0);
            if (direction === "down") while(result.length < Game.length)result.unshift(0);
            for(let i = 0; i < col.length; i++)if (col[i] !== result[i]) {
                allowed = true;
                break;
            }
        }
        return allowed;
    }
    getInitialNums() {
        const nums = [];
        while(nums.length < 2){
            const randomNum = this.getValue();
            nums.push(randomNum);
        }
        return nums;
    }
    getValue() {
        return Math.random() < 0.1 ? 4 : 2;
    }
    setInitialState(arr) {
        const arrNums = [
            ...arr
        ];
        const state = new Array(4).fill([]).map(()=>Array(4).fill(0));
        while(arrNums.length !== 0)for(let i = 0; i < arrNums.length; i++){
            const rowIdx = this.getRandoNum();
            const colIdx = this.getRandoNum();
            if (state[rowIdx][colIdx] === 0) {
                state[rowIdx].splice(colIdx, 1, arrNums[i]);
                arrNums.splice(i, 1);
            }
        }
        return state;
    }
    getRandoNum() {
        return Math.floor(Math.random() * Game.length);
    }
    slideValue(arr) {
        let localSum = 0;
        let dublicatedArr = arr;
        for(let i = 0; i < dublicatedArr.length - 1; i++)if (dublicatedArr[i] === dublicatedArr[i + 1]) {
            dublicatedArr[i] += dublicatedArr[i + 1];
            this.score += dublicatedArr[i];
            localSum += dublicatedArr[i];
            this.sum = dublicatedArr[i];
            dublicatedArr[i + 1] = 0;
            this.getScore();
            this.getStatus();
        }
        dublicatedArr = this.filterZero(dublicatedArr);
        while(dublicatedArr.length < Game.length)dublicatedArr.push(0);
        return {
            arr: dublicatedArr,
            sum: localSum
        };
    }
    filterZero(arr) {
        return arr.filter((num)=>num !== 0);
    }
    hasEmptyCells() {
        return this.initialState.flat().every((value)=>value > 0);
    }
    setNewRandomNum() {
        const value = this.getValue();
        let rowIdx = this.getRandoNum();
        let colIdx = this.getRandoNum();
        while(true){
            if (this.hasEmptyCells()) {
                this.getStatus();
                break;
            }
            if (this.initialState[rowIdx][colIdx] === 0) {
                this.initialState[rowIdx].splice(colIdx, 1, value);
                this.lastGeneratedCell = {
                    row: rowIdx,
                    col: colIdx
                };
                break;
            } else {
                rowIdx = this.getRandoNum();
                colIdx = this.getRandoNum();
            }
        }
        this.getState();
    }
    checkStatus() {
        const str = this.getStatus();
        if (str === "win" || str === "lose") {
            const msgEl = str === "win" ? this.winMsg : this.loseMsg;
            msgEl.classList.remove("hidden");
            this.field.style.position = "relative";
            this.field.tBodies[0].append(this.createModal(str));
        }
    }
    createModal(str) {
        const overlay = document.createElement("div");
        const overlayContent = document.createElement("div");
        const paragraf = document.createElement("p");
        overlay.className = "overlay";
        overlayContent.className = "overlay-content";
        paragraf.className = "modal-message";
        let btnText = "";
        if (str === "lose") {
            paragraf.textContent = "Game over!";
            btnText = "Try again";
        } else {
            paragraf.textContent = "You win!";
            btnText = "New game";
        }
        const btn = document.createElement("button");
        btn.className = "start-game";
        btn.textContent = btnText;
        overlayContent.append(paragraf, btn);
        overlay.append(overlayContent);
        btn.addEventListener("click", ()=>{
            this.startNewGame();
            overlay.remove();
        });
        this.startBtn = btn;
        return overlay;
    }
    moveScore(num) {
        const scoreOverlayElem = document.createElement("span");
        this.info.style.position = "relative";
        scoreOverlayElem.className = "score-overlay";
        scoreOverlayElem.textContent = `+${num}`;
        this.scoreGame.after(scoreOverlayElem);
        const disappear = [
            {
                opacity: 0.8,
                transform: "translateY(0)"
            },
            {
                opacity: 0,
                transform: "translateY(-60px)"
            }
        ];
        const disappearTiming = {
            duration: 1000,
            iterations: 1,
            easing: "ease-in"
        };
        const animation = scoreOverlayElem.animate(disappear, disappearTiming);
        animation.onfinish = ()=>{
            scoreOverlayElem.remove();
        };
    }
}
module.exports = Game;

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map
