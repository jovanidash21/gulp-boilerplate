var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var assets = path.source;
var dist = path.dist;
var config = manifest.config || {};
var globs = manifest.globs;
var project = manifest.getProjectGlobs();
var revManifest = dist + 'assets.json';

module.exports = {
    styles: {
        proj: project.css,
        src: assets + 'styles',
        dest: dist + 'styles'
    },
    scripts: {
        src: assets + "/scripts/**/*.js",
        dest: dist + "/scripts"
    }
};
