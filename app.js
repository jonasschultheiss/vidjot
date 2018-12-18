const express = require('express');

const app = express();

// Index Route
app.get('/', (req, res) => {
  res.send('<h1 style="margin:0 auto;width:50%;padding: 10px;">Moser lutscht Schwanz</h1>');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
