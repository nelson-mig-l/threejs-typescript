define(["require", "exports", "./scene"], function (require, exports, scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App {
        static Start() {
            let scene = new scene_1.Scene();
            scene.Init();
            scene.Animate();
        }
    }
    App.Start();
});
//# sourceMappingURL=program.js.map