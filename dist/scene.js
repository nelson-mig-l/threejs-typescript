define(["require", "exports", "three", "./map", "./player"], function (require, exports, THREE, map_1, player_1) {
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
            //this.controls = new OrbitControls(camera);
            new map_1.Map(this.scene);
            let player = new player_1.Player();
            player.add(this.camera);
            this.scene.add(player);
            this.player = player;
            document.onkeydown = (event) => {
                switch (event.keyCode) {
                    case 38:
                    case 87:
                        player.moveForward = true;
                        break;
                    case 37:
                    case 65:
                        player.moveLeft = true;
                        break;
                    case 40:
                    case 83:
                        player.moveBackward = true;
                        break;
                    case 39:
                    case 68:
                        player.moveRight = true;
                        break;
                }
            };
            document.onkeyup = (event) => {
                switch (event.keyCode) {
                    case 38:
                    case 87:
                        player.moveForward = false;
                        break;
                    case 37:
                    case 65:
                        player.moveLeft = false;
                        break;
                    case 40:
                    case 83:
                        player.moveBackward = false;
                        break;
                    case 39:
                    case 68:
                        player.moveRight = false;
                        break;
                }
            };
        }
        initialize() {
            this.camera.position.z = 0.5;
            this.camera.position.y = 0.1;
            this.camera.lookAt(this.player.position);
            this.scene.add(this.mesh);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);
        }
        animate() {
            requestAnimationFrame(() => this.animate());
            this.player.update();
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=scene.js.map