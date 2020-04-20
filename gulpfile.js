// gulp 호출
var gulp = require("gulp");

// 플러그인 패키지 호출
var sass = require("gulp-sass");
(sourcemaps = require("gulp-sourcemaps")),
(headerComment = require("gulp-header-comment")),
(fileinclude = require("gulp-file-include")),
(autoprefixer = require("gulp-autoprefixer")),
(imagemin = require("gulp-imagemin")),
(uglify = require("gulp-uglify")),
(rename = require("gulp-rename")),
(htmlmin = require('gulp-htmlmin')),
(concat = require("gulp-concat")),
(babel = require("gulp-babel"));
browserSync = require("browser-sync").create();

// 경로 변수
var title = "kp_homework";
var PORT = 3000;
var root = {
  h1: "./project/homework_1",
  h2: "./project/homework_2"
}

// 타임스탬프용 날짜 생성
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
  value: function () {
    function pad2(n) {
      return (n < 10 ? "0" : "") + n;
    }
    return (
      this.getFullYear() +
      "-" +
      pad2(this.getMonth() + 1) +
      "-" +
      pad2(this.getDate()) +
      " " +
      pad2(this.getHours()) +
      ":" +
      pad2(this.getMinutes()) +
      ":" +
      pad2(this.getSeconds())
    );
  }
});

// SASS 정의
sass.compiler = require("node-sass");
var sassOptions = {
  outputStyle: "compressed",
  indentType: "tab"
};

// SASS 컴파일
function sassCompile(project) {

  if (project === "h1") {
    var srcLoc = root[project] + "/_src/_scss/**/*.scss";
    var distLoc = root[project] + "/css/";
  } else {
    var srcLoc = root[project] + "/assets/css/scss/**/*.scss";
    var distLoc = root[project] + "/assets/css/";
  }

  var myDate = new Date().YYYYMMDDHHMMSS();

  return (
    gulp
    .src(srcLoc)
    // .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(
      headerComment(`
      -----------------------------------------------
       Last Modified: ${myDate}
       Author: 김나영 (nykim@nykim.net)
       Description: ${title} CSS
      -----------------------------------------------
    `)
    )
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(distLoc))
    .pipe(browserSync.stream())
  );
}

// HTML 인클루드
function htmlInclude(project) {
  var srcLoc = root[project] + "/_src/_html/index.html";
  var distLoc = root[project] + "/";
  return gulp
    .src(srcLoc)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(distLoc));
}


// 이미지 압축
function imageMinify(project) {
  var srcLoc = root[project] + "/_src/_images/*";
  var distLoc = root[project] + "/images/";

  return gulp
    .src(srcLoc)
    .pipe(imagemin([
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 7
      }),
    ]))
    .pipe(gulp.dest(distLoc));
}


// html 압축
function htmlMinify(project) {
  var loc = root[project];
  return gulp
    .src(loc + "/index.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(loc));
}


// js 파일 합치고 트랜스컴파일 후 난독화
function combineJS(project) {
  var srcLoc = root[project] + "/_src/_js/**.js";
  var distLoc = root[project] + "/js/";
  return gulp
    .src(srcLoc)
    .pipe(concat("ui.js")) //하나로 합치기
    .pipe(babel()) //트랜스컴파일
    .pipe(uglify()) //난독화
    .pipe(rename("ui.min.js"))
    .pipe(gulp.dest(distLoc));
};


// Gulp Task : 리로드 
gulp.task("reload", function () {
  browserSync.reload();
});

// Gulp Task : h1 폴더에 대한 웹서버
gulp.task("browserSync:h1", function () {
  return browserSync.init({
    port: PORT,
    server: {
      baseDir: root.h1
    }
  });
});



gulp.task(
  "sass:h1",
  function () {
    sassCompile("h1");
    console.log("👋 h1 폴더의 scss를 컴파일 했습니다.");
  }
);

gulp.task(
  "htmlInclude:h1",
  function () {
    htmlInclude("h1");
    console.log("👋 h1 폴더의 html을 인클루드 했습니다.");
  }
);

gulp.task(
  "imageMinify:h1",
  function () {
    imageMinify("h1");
    console.log("👋 h1 폴더의 이미지를 압축 했습니다.");
  }
)

gulp.task(
  // ? 우선은 미사용
  "htmlMinify:h1",
  function () {
    htmlMinify("h1");
    console.log("👋 h1 폴더의 HTML을 압축 했습니다.");
  }
)

gulp.task(
  "combineJS:h1",
  function () {
    combineJS("h1");
    console.log("👋 h1 폴더의 JS를 합친 뒤 트랜스컴파일 및 압축 했습니다.");
  }
)


gulp.task("watch:h1", function () {
  gulp.watch(
    root.h1 + "/_src/_scss/**/*.scss", {
      interval: 500
    },
    ["sass:h1"]
  );
  gulp.watch(
    root.h1 + "/_src/_html/**/*.html", {
      interval: 100
    },
    ["htmlInclude:h1", "reload"]
  );
  gulp.watch(
    root.h1 + "/_src/_images/*", {
      interval: 800
    },
    ["imageMinify:h1"]
  );
  gulp.watch(
    root.h1 + "/_src/_js/*", {
      interval: 800
    },
    ["combineJS:h1"]
  );
});


// ------


gulp.task(
  "sass:h2",
  function () {
    sassCompile("h2");
    console.log("👋 h2 폴더의 scss를 컴파일 했습니다.");
  }
);

// Gulp Task : h2 폴더에 대한 웹서버
gulp.task("browserSync:h2", function () {
  return browserSync.init({
    port: PORT,
    server: {
      baseDir: root.h2
    }
  });
});




gulp.task("watch:h2", function () {
  gulp.watch(
    root.h2 + "/assets/css/scss/**/*.scss", {
      interval: 500
    },
    ["sass:h2"]
  );
  // gulp.watch(
  //   root.h1 + "/_src/_html/**/*.html", {
  //     interval: 100
  //   },
  //   ["htmlInclude:h1", "reload"]
  // );
  // gulp.watch(
  //   root.h1 + "/_src/_images/*", {
  //     interval: 800
  //   },
  //   ["imageMinify:h1"]
  // );
  // gulp.watch(
  //   root.h1 + "/_src/_js/*", {
  //     interval: 800
  //   },
  //   ["combineJS:h1"]
  // );
});

gulp.task(
  "dev:h1",
  ["htmlInclude:h1", "sass:h1", "combineJS:h1", "browserSync:h1", "watch:h1"],
  function () {
    console.log("👋 걸프가 h1을 위해 일하고 있어요 ;)");
  }
);

gulp.task(
  "dev:h2",
  ["sass:h2", "browserSync:h2", "watch:h2"],
  function () {
    console.log("👋 걸프가 h2를 위해 일하고 있어요 ;)");
  }
);