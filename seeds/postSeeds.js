const { Painting } = require('../models');

const paintingdata = [
  {
    title: "Invention of the wheel",
    post_content: "Who woulda thought of that? Certainly not me, good sir.",
  },
  {
    title: "Will we ever have flying machines?",
    post_content:
      "People keep calling me crazy, but I think it just goes over their heads.",
  },
  {
    title: "I created fire!",
    post_content: "Look! Fire! So hot.",
  },
  {
    title: "Boats",
    post_content: "What are they?",
  },
]; 

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
