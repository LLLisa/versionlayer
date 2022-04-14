const express = require('express');
const path = require('path');
const app = express();
const { Story } = require('../db');

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/stories', async (req, res, next) => {
  try {
    const response = await Story.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
