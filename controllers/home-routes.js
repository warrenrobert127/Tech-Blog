const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
// TODO: Import the custom middleware
const sequelize = require('../config/connection');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  res.render("homepage")
  
});

// GET one gallery
// TODO: Replace the logic below with the custom middleware
router.get('/dashboard', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const user = req.session.email;
      const dbData = await User.findOne({where:{email: user }}, {
        include: [
          {
            model: BlogPost,
            attributes: [
              'id',
              'title',
              'body',
            ],
          },
        ],
      });
      const post  = dbData.get({ plain: true });
      res.render('dashboard', { post, loggedIn: req.session.loggedIn,user:req.session.username });
    } catch (err) {
      console.log(err);
      res.render('login');
     // res.status(500).json(err);
    }
  }
});

// GET one painting
// TODO: Replace the logic below with the custom middleware
router.get('/painting/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);

      const painting = dbPaintingData.get({ plain: true });

      res.render('painting', { painting, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
