define(["require", "exports", "three", "three-orbitcontrols-ts"], function (require, exports, THREE, three_orbitcontrols_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scene = void 0;
    class Scene {
        constructor() {
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            this._scene = new THREE.Scene();
            let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            let material = new THREE.MeshNormalMaterial();
            this._mesh = new THREE.Mesh(geometry, material);
            this._controls = new three_orbitcontrols_ts_1.OrbitControls(this._camera);
            this._renderer = new THREE.WebGLRenderer({ antialias: true });
        }
        animate() {
            requestAnimationFrame(() => this.animate());
            this._mesh.rotation.x += 0.01;
            this._mesh.rotation.y += 0.01;
            this._renderer.render(this._scene, this._camera);
        }
        initialize() {
            this._camera.position.z = 1;
            this._scene.add(this._mesh);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this._renderer.domElement);
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=scene.js.map