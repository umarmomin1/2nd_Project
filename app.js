const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

const hbs = require('hbs');

const static_path = path.join(__dirname,'public'); 
app.use(express.static(static_path));

const template_path=path.join(__dirname,'views');
const partials_path=path.join(__dirname,'partials');
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();


// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.get('/', (req,res)=>{
    res.render('index');
    
});
app.get('/about', (req,res)=>{
    res.render('about');
    
});
app.get('/weather', (req,res)=>{
    res.render('weather');
    
});
app.get('*', (req,res)=>{
    res.render('error');
    
});

app.listen(port,()=>{
    console.log("nice")
});

module.exports = app;
