//gulp
var gulp = require('gulp');
var sass = require("gulp-sass");  //sassコンパイル
var autoprefixer = require("gulp-autoprefixer");  //ベンダープレフィックス
var browser = require("browser-sync");  //ブラウザリロード
var plumber = require("gulp-plumber");  //エラーハンドリング

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("sass", function() {
    gulp.src("tmp/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./tmp/css"))
    .pipe(browser.reload({stream:true}));
});

gulp.task("js", function() {
    gulp.src(["tmp/js/**/*.js","tmp/js/*.js"])
    .pipe(plumber())
    .pipe(browser.reload({stream:true}));
});

gulp.task("html", function() {
    gulp.src("tmp/html/**/*.html")
    .pipe(plumber())
    .pipe(browser.reload({stream:true}));
});

gulp.task("watch",['server'], function(){
  gulp.watch("tmp/scss/**/*.scss", ['sass']);
  gulp.watch(["tmp/js/**/*.js","tmp/js/*.js"],["js"]);
  gulp.watch("tmp/html/**/*.html", ['html']);
  gulp.watch("tmp/html/*.html", ['html']);
});

gulp.task("default",['server'], function() {
    gulp.watch("tmp/scss/**/*.scss", ['sass']);
    gulp.watch(["tmp/js/**/*.js","tmp/js/*.js"],["js"]);
    gulp.watch("tmp/html/**/*.html", ['html']);
    gulp.watch("tmp/html/*.html", ['html']);
});
