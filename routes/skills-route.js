var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Pull index page for skills
router.get('/', skillsCtrl.index);
//gets page for new skill input through post
router.get('/new', skillsCtrl.newSkill);
//posts new skill to index ejs
router.post('/', skillsCtrl.create);
//gets specific skill
router.get('/:id', skillsCtrl.show);
//delete specific skill
router.delete('/:id', skillsCtrl.deleteSkill);

module.exports = router;

//pre-generated file