define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyboardControls = void 0;
    class KeyboardControls {
        constructor(object) {
            this.moveSpeed = 1;
            this.object = object;
        }
        update() {
            if (this.moveForward)
                this.object.translateZ(-this.moveSpeed);
            if (this.moveBackward)
                this.object.translateZ(this.moveSpeed);
            if (this.moveLeft)
                this.object.translateX(-this.moveSpeed);
            if (this.moveRight)
                this.object.translateX(this.moveSpeed);
        }
        onKeyDown(event) {
            switch (event.keyCode) {
                case 38:
                    this.moveForward = true;
                    break;
                case 37:
                    this.moveLeft = true;
                    break;
                case 40:
                    this.moveBackward = true;
                    break;
                case 39:
                    this.moveRight = true;
                    break;
            }
        }
        onKeyUp(event) {
            switch (event.keyCode) {
                case 38:
                    this.moveForward = false;
                    break;
                case 37:
                    this.moveLeft = false;
                    break;
                case 40:
                    this.moveBackward = false;
                    break;
                case 39:
                    this.moveRight = false;
                    break;
            }
        }
    }
    exports.KeyboardControls = KeyboardControls;
});
//# sourceMappingURL=control.js.map