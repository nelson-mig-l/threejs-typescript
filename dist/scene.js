define(["require", "exports", "three", "three-orbitcontrols-ts"], function (require, exports, THREE, three_orbitcontrols_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scene = void 0;
    class Scene {
        constructor() {
            let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            let renderer = new THREE.WebGLRenderer({ antialias: true });
            // Handle window resize
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
            window.addEventListener('resize', onWindowResize, false);
            // Make something visible
            let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            let material = new THREE.MeshNormalMaterial();
            this.mesh = new THREE.Mesh(geometry, material);
            this.camera = camera;
            this.renderer = renderer;
            this.scene = new THREE.Scene();
            this.controls = new three_orbitcontrols_ts_1.OrbitControls(camera);
        }
        initialize() {
            this.camera.position.z = 1;
            this.scene.add(this.mesh);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);
        }
        animate() {
            requestAnimationFrame(() => this.animate());
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=scene.js.map