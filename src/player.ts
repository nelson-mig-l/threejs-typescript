import * as THREE from "three";

export class Player extends THREE.Mesh {

    moveForward: boolean = false;
    moveBackward: boolean = false;
    moveLeft: boolean = false;
    moveRight: boolean = false;

    constructor() {
        super(
            new THREE.BoxGeometry(0.15, 0.15, 0.15),
            new THREE.MeshNormalMaterial()
        );
        this.translateY(0.15/2);
    }

    update() {
        let speed = 0.01;
        if (this.moveForward) this.translateZ(-speed);
        if (this.moveBackward) this.translateZ(speed);
        if (this.moveLeft) this.rotateY(speed*3);
        if (this.moveRight) this.rotateY(-speed*3);
    } 

}