// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

require('./controllers/posts')(app);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set db
require('./data/reddit-db');
// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/posts/new', (req, res) => {
    res.render('posts-new');
});

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});