const app = require('./app');
const { db, syncAndSeed } = require('../db');

const port = process.env.PORT || 1312;

const init = () => {
  try {
    syncAndSeed();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
