// invoking express
const express = require('express');

// invoking router method
const router = express.Router();

router.get('/', (req,res, next) => {
  res.render('projects', {title: 'Projects'});
});

module.exports = router;
