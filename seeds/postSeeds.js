const { Painting } = require('../models');

const paintingdata = [
  {
    title: "Invention of the wheel",
    post_content: "Who woulda thought of that Larry David invented it?",
  },
  {
    title: "Will we ever have flying machines?",
    post_content:
      "Who are the wright bros?",
  },
  {
    title: "I created fire outside!",
    post_content: "Look! Fire! So hot.",
  },
  {
    title: "Boats",
    post_content: "I'm on one!",
  },
]; 

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
