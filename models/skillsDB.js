const skillList = [
    {skill: 'HTML GOD', level: 'over 9000'},
    {skill: 'CSS DAVINCI', level: 'super facts'},
    {skill: 'JAVASCRIPT ARCHITECT', level: '101%!'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return todos;
 }
 
 function getOne(id){
     return todos[id];
 }