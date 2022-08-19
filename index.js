// Code your solution here
const pickMeUp = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(collection, string){
let f = collection.filter(function (name){
      
        if( name.toLowerCase() === string.toLowerCase()){
        return ([name])}
      
    }
)
 return f;
}
// console.log(findMatching(pickMeUp, 'Sammy'))
function fuzzyMatch(collection, string){
let f = 
    collection.filter(function (name){
      const length = string.length
        if( name.slice(0, length) === string){
        return [name]}
      
    }
)
 return f;
}
// console.log(fuzzyMatch(pickMeUp, 'S'))
function matchName(collection, string){
let f = collection.filter(function (i){
        
        if( i['name'] === string){
        return [i]}   
            }
        )
         return f;
}

