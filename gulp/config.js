var argv = require('yargs').argv;
var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var assets = path.source;
var dist = path.dist;
var config = manifest.config || {};
var globs = manifest.globs;
var project = manifest.getProjectGlobs();
var revManifest = dist + 'assets.json';

module.exports = {
    enabled: {
        rev: argv.production,
        maps: false,
        failStyleTask: argv.production
    },
    manifest: manifest,
    assets: assets,
    dist: dist,
    revManifest: revManifest,
    styles: {
        proj: project.css,
        src: assets + 'styles',
        dest: dist + 'styles'
    },
    scripts: {
        proj: project.js,
        src: assets + "/scripts/**/*.js",
        dest: dist + "/scripts"
    }
};
