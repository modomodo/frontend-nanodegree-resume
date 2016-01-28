var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    responsive = require('gulp-responsive'),
    runSequence = require('run-sequence');

//Content Task - Copies to dist and refresh browserSync with correct img sources
gulp.task('content', function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream: true}))
});

//Styles Task - Minifies CSS, Copies to dist and refresh browserSync
gulp.task('styles', function(){
  gulp.src('./src/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}))
});

//Image Task - Compress and create responsive img
gulp.task('image', function(){
  gulp.src('./src/img/*')
    .pipe(responsive({
      '*': [{
        width: 800,
        quality: 80,
        progressive: true
      },{
        width: 800 * 2,
        rename: {
          suffix: '@2x'
        }
      }]
    }))
    .pipe(imagemin({
      optimisationLevel: 3,
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
});

//Watch task - Watches CSS or HTML changes
gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./src/index.html', ['content']); //Array is a task to be executed
  gulp.watch('./src/css/*.css', ['styles']);
});

//Use runSequence plugin to run image task first, and others after in a concurrent manner
gulp.task('default', function (){
  runSequence(
    'image',
    ['styles','content','watch']
  )
});
