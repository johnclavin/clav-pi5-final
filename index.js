const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const app = express();
const port = 3015;

app.use(express.json());

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({ layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
}));

app.use(express.static('static'));

// This Atlas database was setup to work from any location.

const uri =
  'mongodb+srv://clav-8325:Yzll1t791kZBmilO@jc-cluster39.tfcn9.mongodb.net/pi5-final?retryWrites=true&w=majority';

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(uri, connectionParams);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection successful.');
});

app.get('/', (listener, response) => {
  response.render('home', { layout: 'bodyContainer' });
});

app.get('/all-articles', (listener, response) => {
  response.render('all-articles', { layout: 'bodyContainer' });
});

app.get('/article', (listener, response) => {
  response.render('article', { layout: 'bodyContainer' });
});

app.get('/create', (listener, response) => {
  response.render('create', { layout: 'bodyContainer' });
});

app.get('/edit', (listener, response) => {
  response.render('edit', { layout: 'bodyContainer' });
});

app.get('/login', (listener, response) => {
  response.render('login', { layout: 'bodyContainer' });
});

app.get('/register', (listener, response) => {
  response.render('register', { layout: 'bodyContainer' });
});

app.get('/search-results', (listener, response) => {
  response.render('search-results', { layout: 'bodyContainer' });
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
console.log('http://localhost:'+port);
console.log();
