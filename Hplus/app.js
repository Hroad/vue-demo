var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var empty_pageRouter = require('./routes/empty_page');
// var projectsRouter = require('./routes/projects');
// var RoleRouter = require('./routes/Role');

//引入路由文件
//前台
var receptionRouter = require('./routes/reception');
//后台
var backstageRouter = require('./routes/backstage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//设置 cookie
app.use(cookieParser());

//配置静态资源库
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/empty_page', empty_pageRouter);
// app.use('/projects',projectsRouter)
// app.use('/Role',RoleRouter)

//配置一级路由
//前台
app.use('/reception',receptionRouter);
//后台
app.use('/backstage',backstageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
