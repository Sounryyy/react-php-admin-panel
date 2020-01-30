const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const sass = require("gulp-sass");

const dist = '/Applications/MAMP/htdocs/react-admin/admin';
const webpackConfig = {
    mode: 'development',
    output: {
        filename: 'script.js'
    },
    watch: false,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: "usage"
                            }],
                            "@babel/react"
                        ]
                    }
                }
            }
        ]
    }

};

gulp.task("copy-html", () => {
    return gulp.src("./app/src/index.html")
        .pipe(gulp.dest(dist))
});


gulp.task("build-js", () => {
   return gulp.src("./app/src/main.js")
       .pipe(webpackStream(webpackConfig))
       .pipe(gulp.dest(dist))
});

gulp.task("build-sass", () => {
    return gulp.src("./app/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist))
});
