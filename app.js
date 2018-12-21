const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
