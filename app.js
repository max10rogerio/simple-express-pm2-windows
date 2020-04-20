const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res) => res.json({ message: 'OK' }));

app.listen(9999, () => {
  console.log('Running SIMPLE-EXPRESS-PM2-WINDOWS');
});