define(["require", "exports", "three"], function (require, exports, THREE) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Map = void 0;
    //import * as fs from "fs";
    const mapx = [
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
    const HORIZONTAL_UNIT = 0.2;
    const VERTICAL_UNIT = 0.2;
    const ZSIZE = mapx.length * HORIZONTAL_UNIT;
    const XSIZE = mapx[0].length * VERTICAL_UNIT;
    class Map {
        constructor(scene) {
            this.scene = scene;
            // https://threejs.org/docs/#api/en/loaders/FileLoader
            var loader = new THREE.FileLoader();
            var scope = this;
            loader.load('dist/maps/pacman.txt', function (data) {
                console.log(data);
                scope.map = data.split("\r\n");
                let rows = scope.map.length;
                let cols = scope.map[0].length;
                for (let i = 0; i < rows; i++) {
                    console.log(scope.map[i]);
                    for (let j = 0; j < cols; j++) {
                        scope.voxel(scope.map[i].charAt(j), i, j);
                    }
                }
            }, function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, function (err) {
                console.error('An error happened');
            });
            console.log("no >>>>>");
            // let rows: number = this.map.length;
            // let cols: number = this.map[0].length;
            // for (let i = 0; i < rows; i++) {
            //     for (let j = 0; j < cols; j++) {
            //         this.voxel(this.map[i].charAt(j), i, j);
            //     }
            // }
            // console.log("< no");
        }
        voxel(type, row, col) {
            let z = (row + 1) * HORIZONTAL_UNIT - ZSIZE * 0.5;
            let x = (col + 1) * HORIZONTAL_UNIT - XSIZE * 0.5;
            switch (type) {
                case 'S':
                    //console.log('s');
                    break;
                case 'X':
                    //console.log('x');
                    let geo = new THREE.BoxGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT);
                    let material = new THREE.MeshNormalMaterial();
                    let mesh = new THREE.Mesh(geo, material);
                    mesh.position.set(x, VERTICAL_UNIT * 0.5, z);
                    this.scene.add(mesh);
                    break;
                default:
                    //console.log(' ');
                    break;
            }
        }
    }
    exports.Map = Map;
});
//# sourceMappingURL=map.js.map