var argv = require('yargs').argv;
var argvProduction = argv.production;
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
        maps: false,
        failStylesTask: argvProduction
    },
    manifest: manifest,
    assets: assets,
    dist: dist,
    manifestConfig: config,
    revManifest: revManifest,
    styles: {
        settings: {
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            errLogToConsole: !argvProduction
        },
        proj: project.css,
        src: assets + 'styles',
        dest: dist + 'styles'
    },
    scripts: {
        proj: project.js,
        src: assets + 'scripts',
        dest: dist + 'scripts'
    },
    fonts: {
        globs: globs.fonts,
        src: assets + 'fonts',
        dest: dist + 'fonts'
    },
    images: {
        settings: {
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}]
        },
        globs: globs.images,
        src: assets + 'images',
        dest: dist + 'images'
    }
};
