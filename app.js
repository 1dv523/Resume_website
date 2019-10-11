const express = require('express');
const path = require('path')
const indexRouter = require("./routes/index")
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/' , indexRouter)


// error handling
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

  app.listen(process.env.PORT || 8080, () => console.log('Server ready'))
