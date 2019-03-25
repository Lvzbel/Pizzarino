const gulp = require("gulp");
const responsive = require("gulp-responsive");
const rename = require("gulp-rename");

// =================================================
// Images will resize and compress all responsive images
// =================================================
// Original:  70 quality, width: 1200 _large_2x.jpg
// quality: 50 quality, width: 1200   _large_1x.jpg
// quality: 70 quality, width: 500    _small_2x.jpg
// quality: 50 quality, width: 500    _small_1x.jpg

function image_1(done) {
  gulp
    .src("img/*.jpg")
    .pipe(
      responsive({
        "*.jpg": {
          width: 1200,
          quality: 70
        }
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += "_large_2x";
      })
    )
    .pipe(gulp.dest("img/responsive_img"));
  done();
}

function image_2(done) {
  gulp
    .src("img/*.jpg")
    .pipe(
      responsive({
        "*.jpg": {
          width: 1200,
          quality: 50
        }
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += "_large_1x";
      })
    )
    .pipe(gulp.dest("img/responsive_img"));
  done();
}

function image_3(done) {
  gulp
    .src("img/*.jpg")
    .pipe(
      responsive({
        "*.jpg": {
          width: 600,
          quality: 70
        }
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += "_small_2x";
      })
    )
    .pipe(gulp.dest("img/responsive_img"));
  done();
}

function image_4(done) {
  gulp
    .src("img/*.jpg")
    .pipe(
      responsive({
        "*.jpg": {
          width: 600,
          quality: 50
        }
      })
    )
    .pipe(
      rename(function(path) {
        path.basename += "_small_1x";
      })
    )
    .pipe(gulp.dest("img/responsive_img"));
  done();
}

gulp.task("default", gulp.series(image_1, image_2, image_3, image_4));
