define(["require", "exports", "three"], function (require, exports, THREE) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Player = void 0;
    class Player extends THREE.Mesh {
        constructor() {
            super(new THREE.BoxGeometry(0.15, 0.15, 0.15), new THREE.MeshNormalMaterial());
            this.moveForward = false;
            this.moveBackward = false;
            this.moveLeft = false;
            this.moveRight = false;
            this.translateY(0.15 / 2);
        }
        update() {
            let speed = 0.01;
            if (this.moveForward)
                this.translateZ(-speed);
            if (this.moveBackward)
                this.translateZ(speed);
            if (this.moveLeft)
                this.rotateY(speed * 3);
            if (this.moveRight)
                this.rotateY(-speed * 3);
        }
    }
    exports.Player = Player;
});
//# sourceMappingURL=player.js.map