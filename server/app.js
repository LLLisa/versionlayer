const express = require('express');
const app = express();
const { Story } = require('../db');

app.get('/', (req, res) => {
  res.send('hi');
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
