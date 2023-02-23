const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const tailwind = require('tailwindcss');

const postCSSOptions = [autoprefixer(), tailwind()];
if (process.browser) {
  const bootstrap = require('bootstrap');
  // code is running in a browser environment
}
module.exports = (gulp, config) => {
  gulp.task('scss', () =>
    gulp
      .src(...config.scss.source)
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass(config.scss.options).on('error', sass.logError))
      .pipe(postcss(postCSSOptions))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(config.scss.destination)),
  );
};