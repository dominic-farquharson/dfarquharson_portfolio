// importing express
const express = require('express');

//invoking router
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('contact', {title:'Contact'});
});

module.exports = router;
