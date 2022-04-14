const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/versionlayer'
);

const Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
});

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    await Story.create({
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
    await Story.create({
      title: 'Cras Semper',
      content:
        'Cras semper auctor neque vitae tempus quam. Egestas purus viverra accumsan in nisl. Morbi tincidunt augue interdum velit euismod in. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus sit amet luctus venenatis lectus. Malesuada bibendum arcu vitae elementum curabitur. Dignissim sodales ut eu sem. Cursus eget nunc scelerisque viverra. Mattis aliquam faucibus purus in massa. Justo nec ultrices dui sapien eget mi proin sed. Nullam non nisi est sit. Venenatis urna cursus eget nunc scelerisque. Non curabitur gravida arcu ac tortor dignissim.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db, Story, syncAndSeed };
