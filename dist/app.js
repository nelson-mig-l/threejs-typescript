define(["require", "exports", "./scene"], function (require, exports, scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App {
        static Start() {
            let scene = new scene_1.Scene();
            scene.initialize();
            scene.animate();
        }
    }
    App.Start();
});
//# sourceMappingURL=app.js.map