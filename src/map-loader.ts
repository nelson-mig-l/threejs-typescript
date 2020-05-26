import * as THREE from "three";

export class MapLoader extends THREE.Loader {

    constructor() {
        super();
    }

    load(
        url: string, 
        onLoad?: (response: string[]) => void, 
        onProgress?: ( request: ProgressEvent ) => void,
        onError?: ( event: ErrorEvent ) => void) {

        let scope = this;

		let loader = new THREE.FileLoader(scope.manager);
		loader.setPath(scope.path);
		loader.load( url, function(text: string) {
			onLoad(scope.parse(text));
		}, onProgress, onError );
    }

    parse(text: string) : string[] {
        return text.split("\r\n");
    }
}