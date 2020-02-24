const skillList = [
    {skill: 'HTML GOD', level: 'over 9000', learned: true},
    {skill: 'CSS DAVINCI', level: 'super facts', learned: true},
    {skill: 'JAVASCRIPT ARCHITECT', level: '101%', learned: true},
    {skill: 'Node JS', level: '99%', learned: true},
    {skill: 'jQuery', level: '70%', learned: false},
    {skill: 'MongoDB', level: '80%', learned: false},
    {skill: 'React', level: '0%', learned: false},
    {skill: 'Python', level: '0%', learned: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteTarg
};

function getAll() {
    return skillList;
 }
 
 function getOne(id){
     return skillList[id];
 }

 function create(arbVarFromReqBody) {
        skillList.push(arbVarFromReqBody);
 }

 function deleteTarg(id) {
    skillList.splice(id, 1);
 }