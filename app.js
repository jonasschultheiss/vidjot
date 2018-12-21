const express = require('express');

const app = express();

// How middleware works
app.use();

// Index Route
app.get('/', (req, res) => {
  res.send('INDEX ');
});

// About route
app.get('/about', (req, res) => {
  res.send('ABOUT');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
