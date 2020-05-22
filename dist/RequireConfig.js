requirejs.config({
    baseUrl: "dist",
    paths: {
        "three": "../libs/three.min",
        "three-orbitcontrols-ts": "../libs/three-orbitcontrols-ts/index"
    }
});
requirejs(["app"], (App) => {
});
//# sourceMappingURL=RequireConfig.js.map