const gulp = require('gulp');

require('./gulp/dev.js');

require('./gulp/docs.js');

gulp.task('dev', gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev'),
    gulp.parallel('server:dev', 'watch:dev')
));

gulp.task('docs', gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs'),
    gulp.parallel('server:docs')
));

