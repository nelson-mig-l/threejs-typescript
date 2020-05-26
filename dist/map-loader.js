define(["require", "exports", "three"], function (require, exports, THREE) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MapLoader = void 0;
    class MapLoader extends THREE.Loader {
        constructor() {
            super();
        }
        load(url, onLoad, onProgress, onError) {
            let scope = this;
            let loader = new THREE.FileLoader(scope.manager);
            loader.setPath(scope.path);
            loader.load(url, function (text) {
                onLoad(scope.parse(text));
            }, onProgress, onError);
        }
        parse(text) {
            return text.split("\r\n");
        }
    }
    exports.MapLoader = MapLoader;
});
//# sourceMappingURL=map-loader.js.map