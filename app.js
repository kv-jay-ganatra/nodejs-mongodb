// Load environment variables from a .env file
require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/bookRoutes');
const logRoutes = require('./src/routes/logRoutes');
const helpRoutes = require('./src/routes/helpRoutes');
const db = require('./src/models');
const limiter = require('./src/middlewares/rateLimitMiddleware');
const path = require('path');
const sanitizer = require('express-sanitizer');
// Define the port for the application, with a fallback to 3000
const port = process.env.PORT || 3000;
// Configure CORS (Cross-Origin Resource Sharing) options
const corsOptions = {
  origin: process.env.AllowOrigin,
};
// Create an Express application
const app = express();
// Apply rate limiting middleware for request rate control
app.use(limiter);
// Configure EJS layouts and views
app.use(expressLayouts);
app.set('layout', './layout');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
// Serve static assets (CSS and JavaScript files)
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, 'src/public/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/axios/dist')));
app.use('/js', express.static(path.join(__dirname, 'src/public/js')));

// Connect to the MongoDB database
db.mongoose
    .connect(process.env.MongoDBConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to the database!');
    })
    .catch((err) => {
      console.log('Cannot connect to the database!', err);
      process.exit();
    });
// Enable CORS for the application using configured options
app.use(cors(corsOptions));
// Enable request logging with Morgan
app.use(morgan('dev'));
// Enable request logging with Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Serve static assets from the 'src/public' directory
app.use(express.static('src/public'));
// Enable request data sanitization
app.use(sanitizer());
// Define the route for the home page
app.get('/', (req, res) => {
  res.render('home');
});
// Use the defined routes for books, logs, and help
app.use(bookRoutes);
app.use(logRoutes);
app.use(helpRoutes);
// Start the Express server and listen on the defined port
app.listen(port, () => {
  console.log(`Application running http://localhost:${port}`);
});
