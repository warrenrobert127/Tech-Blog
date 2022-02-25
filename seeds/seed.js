const sequelize = require("../config/connection");

const { Post, User, Comment } = require("../models");

const userSeed = require("./userSeeds.json");
const postSeed = require("./postSeeds.json");
const commentSeed = require("./commentSeeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postSeed);

  await Comment.bulkCreate(commentSeed);

  process.exit(0);
};

seedDatabase();
