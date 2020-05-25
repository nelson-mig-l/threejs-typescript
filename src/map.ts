import * as THREE from "three";
//import * as fs from "fs";

const mapx: string[] = [
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "X                         XXX                         X",
    "X N N N N N N N N N N N N XXX N N N N N N N N N N N N X",
    "X                         XXX                         X",
    "X N XXXXXXX N XXXXXXXXX N XXX N XXXXXXXXX N XXXXXXX N X",
    "X   XXXXXXX   XXXXXXXXX   XXX   XXXXXXXXX   XXXXXXX   X",
    "X S XXXXXXX N XXXXXXXXX N XXX N XXXXXXXXX N XXXXXXX S X",
    "X   XXXXXXX   XXXXXXXXX   XXX   XXXXXXXXX   XXXXXXX   X",
    "X N XXXXXXX N XXXXXXXXX N XXX N XXXXXXXXX N XXXXXXX N X",
    "X                                                     X",
    "X N N N N N N N N N N N N N N N N N N N N N N N N N N X",
    "X                                                     X",
    "X N XXXXXXX N XXX N XXXXXXXXXXXXXXX N XXX N XXXXXXX N X",
    "X   XXXXXXX   XXX   XXXXXXXXXXXXXXX   XXX   XXXXXXX   X",
    "X N XXXXXXX N XXX N XXXXXXXXXXXXXXX N XXX N XXXXXXX N X",
    "X             XXX         XXX         XXX             X",
    "X N N N N N N XXX N N N N XXX N N N N XXX N N N N N N X",
    "X             XXX         XXX         XXX             X",
    "XXXXXXXXXXX N XXXXXXXXX I XXX I XXXXXXXXX N XXXXXXXXXXX",
    "          X   XXXXXXXXX   XXX   XXXXXXXXX   X          ",
    "          X N XXXXXXXXX I XXX I XXXXXXXXX N X          ",
    "          X   XXX                     XXX   X          ",
    "          X N XXX I I I I I I I I I I XXX N X          ",
    "          X   XXX                     XXX   X          ",
    "          X N XXX I XXXXXX   XXXXXX I XXX N X          ",
    "          X   XXX   X             X   XXX   X          ",
    "XXXXXXXXXXX N XXX I X             X I XXX N XXXXXXXXXXX",
    "                    X             X                    ",
    "I I I I I I N I I I X             X I I I N I I I I I I",
    "                    X             X ",
    "XXXXXXXXXXX N XXX I X             X I XXX N XXXXXXXXXXX",
    "          X   XXX   X             X   XXX   X          ",
    "          X N XXX I XXXXXXXXXXXXXXX I XXX N X          ",
    "          X   XXX                     XXX   X          ",
    "          X N XXX I I I I I I I I I I XXX N X          ",
    "          X   XXX                     XXX   X          ",
    "          X N XXX I XXXXXXXXXXXXXXX I XXX N X          ",
    "          X   XXX   XXXXXXXXXXXXXXX   XXX   X          ",
    "XXXXXXXXXXX N XXX I XXXXXXXXXXXXXXX I XXX N XXXXXXXXXXX",
    "X                         XXX                         X",
    "X N N N N N N N N N N N N XXX N N N N N N N N N N N N X",
    "X                         XXX                         X",
    "X N XXXXXXX N XXXXXXXXX N XXX N XXXXXXXXX N XXXXXXX N X",
    "X   XXXXXXX   XXXXXXXXX   XXX   XXXXXXXXX   XXXXXXX   X",
    "X S XXXXXXX N XXXXXXXXX N XXX N XXXXXXXXX N XXXXXXX S X",
    "X       XXX                                 XXX       X",
    "X N N N XXX N N N N N N N N N N N N N N N N XXX N N N X",
    "X       XXX                                 XXX       X",
    "XXXXX N XXX N XXX N XXXXXXXXXXXXXXX N XXX N XXX N XXXXX",
    "XXXXX   XXX   XXX   XXXXXXXXXXXXXXX   XXX   XXX   XXXXX",
    "XXXXX N XXX N XXX N XXXXXXXXXXXXXXX N XXX N XXX N XXXXX",
    "X             XXX         XXX         XXX             X",
    "X N N N N N N XXX N N N N XXX N N N N XXX N N N N N N X",
    "X             XXX         XXX         XXX             X",
    "X N XXXXXXXXXXXXXXXXXXX N XXX N XXXXXXXXXXXXXXXXXXX N X",
    "X   XXXXXXXXXXXXXXXXXXX   XXX   XXXXXXXXXXXXXXXXXXX   X",
    "X N XXXXXXXXXXXXXXXXXXX N XXX N XXXXXXXXXXXXXXXXXXX N X",
    "X                                                     X",
    "X N N N N N N N N N N N N N N N N N N N N N N N N N N X",
    "X                                                     X",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
];

const HORIZONTAL_UNIT: number = 0.2;
const VERTICAL_UNIT: number = 0.2;
const ZSIZE = mapx.length * HORIZONTAL_UNIT;
const XSIZE = mapx[0].length * VERTICAL_UNIT;

export class Map {

    private scene: THREE.Scene;
    private map: string[] = mapx;

    constructor(scene: THREE.Scene) {
        this.scene = scene;




        let rows: number = this.map.length;
        let cols: number = this.map[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.voxel(this.map[i].charAt(j), i, j);
            }
        }
    }

    voxel(type: string, row: number, col: number) {
        let z: number = (row + 1) * HORIZONTAL_UNIT - ZSIZE * 0.5;
        let x: number = (col + 1) * HORIZONTAL_UNIT - XSIZE * 0.5;
        switch(type) {
            case 'S':
                console.log('s');
                break;
            case 'X':
                console.log('x');
                let geo = new THREE.BoxGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT);
                let material = new THREE.MeshNormalMaterial()
                let mesh = new THREE.Mesh(geo, material);
                mesh.position.set(x, VERTICAL_UNIT * 0.5, z);
                this.scene.add(mesh);
                break;
            default: 
                console.log(' ');
                break;
            
        }
    }

}