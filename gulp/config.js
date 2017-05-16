var assets = "./assets";
var dist = "./dist";

module.exports = {
    styles: {
        src: assets + "/styles/**/*.{sass,scss}",
        dest: dist + "/styles",
        settings: {}
    },
    scripts: {
        src: assets + "/scripts/**/*.js",
        dest: dist + "/scripts"
    }
};
