const Skills = require('../models/skillsDB')
// by convention, Models are always capitalized

module.exports = {
	index,
    show,
    newSkill,
    create,
    deleteSkill
};
 
// this is the callback function
// index always shows everything
function index(req, res) {
    res.render('skills-page/index', {
    allSkills: Skills.getAll(),
    devName: "Hunter"
	});
}

function show(req, res) {
	console.log(req.params, ' req.parms')
	//req.params.whateverTheParamIs, 
	// is how we access that variable
	// param defined in the router 
	// and looks like this router.get('/:id', todosCtrl.show);
	res.render('skills-page/show', {
	 specificSkill: Skills.getOne(req.params.id),
     skillNum: parseInt(req.params.id) + 1,
     idx: req.params.id
	});
}

function newSkill(req, res) {
    res.render('skills-page/new')
}

function create(req, res) {
    console.log(req, res)
    Skills.create(req.body); 
    res.redirect('/skills');
}

function deleteSkill(req, res) {
        Skills.deleteTarg(req.params.id);
        res.redirect('/skills');
}