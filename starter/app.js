require("dotenv").config();
require('express-async-errors');
// express
const express = require("express");
const app = express();

// rst of packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
// database
const connectDB = require("./db/connect");

// routers
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))    // to access cookies

app.use(express.static('./public'));
app.use(fileUpload());

// routes
app.get('/', (req, res) => {
    res.send('e-commerce-api') 
})
app.get('/api/v1', (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
    res.send('e-commerce-api')
})
app.get('/api/v1/auth', (req, res) => {
    res.send('e-commerce')
})


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is Listening on port on ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
