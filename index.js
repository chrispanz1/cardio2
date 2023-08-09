const people=[
    { name:'Wes', year:1988},
    { name:'kait', year:1986},
    { name:'Irv', year:1970},
    { name:'Lux', year:2015},
];
const comments =[
    {text: 'love this!',id:523423},
    {text: 'Super good',id:823423},
    {text: 'you are the best',id:2039842},
    {text: 'ramen is my fav food ever',id:123523},
    {text: 'nice nice nice!',id:54328}


]
//we will be working with the above array of objects//
const isAdult =people.some(function(person){
    const currentYear=(new Date()).getFullYear();
    if(currentYear-person.year>=19){
        return true;
    }
});

//the above code determines if someone in the array of objects is older than 19//
const comment =comments.find(comment=> comment.id===823423);
console.log(comment);

//this code grabs the object with its id and stores in in the variable comment//

const index =comments.findIndex(comments=> comment.id===823423);
console.log(index)
//all we do here is grab the index of the id, the index turns out to be 1//

comments.splice(index,1)
//we use the splice method to delete the 2nd object//

const newComments=[
    ...comments.slice(0,index),
    ...comments.slice(index+1)
]