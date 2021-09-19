if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');


// const { campgroundSchema, reviewSchema } = require('./schemas.js')
const {userSchema} = require('./schemas')
const session = require('express-session');
// const flash = require('connect-flash')
const ExpressError = require('./utilities/ExpressError');
const methodOverride = require('method-override'); // for PUT and DELETE requests
const passport = require('passport');
const LocalStrategy = require('passport-local');
// connect-mongo cloud
// const MongoStore = require('connect-mongo');
const catchAsync = require('./utilities/catchAsync')

// Routes
const userRoutes = require('./routes/users')
const ProductRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews')

const Product = require('./models/products');
const products = require('./controllers/products');
// const categories = require('../seeds/categories')
const User = require('./models/users')
const Review = require('./models/reviews')

const categories = require('./seeds/categories');


mongoose.connect('mongodb://localhost:27017/umarket', { 
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false 
})
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Ups... Error!");
        console.log(err);
    }) 

const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
    secret: 'sicret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true
        expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));


app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));//Athentication method

passport.serializeUser(User.serializeUser())//Serialize user. Store user in the session
passport.deserializeUser(User.deserializeUser())//Get the user out of the session.

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))// string method we want to use in form action

//LOCALS
app.use((req, res, next) => {
    res.locals.currentUser = req.user; // req.user from passport, so evert currentuser is being passed to next!
    res.locals.categories = categories; // To make the boilerplate navbar have always its product categories.
    next();
})


app.get('fakeUser', async (req, res) => {
    const user = new User({ email: 'noadmin@gmail.com', username: 'noadmin'})//Password not passed
    const regUser = await User.register(user, '123')// 132 is the password
    res.send(regUser)
})
// ROUTES
app.use('/', userRoutes);
app.use('/products', ProductRoutes);
app.use('/products/:id/reviews', reviewRoutes);





app.all('*', (req, res, next) => {
    next(new ExpressError('Page not Found!', 404))
});
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;//Default status code
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})









app.listen(3000, () => {
    console.log('Running - Port: 3000');
})