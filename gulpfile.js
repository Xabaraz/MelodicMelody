const {src, watch, dest} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const notify = require('gulp-notify');

function style() {
    return (
        src('./src/scss/*.scss')
            .pipe(sass()).on("error", sass.logError)
            .pipe(autoprefixer("last 2 version", "ie 11", {cascade: true}))
            .pipe(dest('./public/css'))
            .pipe(notify("Found file: <%= file.relative %>!"))
    )
}

function watcher() {
    watch(['./src/scss/**/*.scss']).on('change',style);
}

exports.default = watcher;
