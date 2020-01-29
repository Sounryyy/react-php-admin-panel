const gulp = require("gulp");

gulp.task("copy-html", () => {
    return gulp.src("./app/src/index.html")
        .pipe(gulp.dest("/Applications/MAMP/htdocs/react-admin/admin"))
});
