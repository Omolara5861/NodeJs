//Getting Superheroes Names 
const superheroes = require('superheroes');

//Generating all Superheroes Names
const allSuperheroes = superheroes.all;

//Generating random Superheroes Names
const randomSuperheroes = superheroes.random();

//Log all Superheroes Name to the console
console.log(allSuperheroes);

//Log random Superheroes Name to the console
console.log(randomSuperheroes);


// DIY Challenge
//Getting Supervillians Name 
const supervillains = require('supervillains');

//Generating all Superheroes Names
const allSupervillains = supervillains.all;

//Generating random Supervillains Names
const randomSupervillains = supervillains.random();

//Log all Supervillains Name to the console
console.log(allSupervillains);

//Log random Supervillains Name to the console
console.log(randomSupervillains);

//Using Underscore Library
const underscore = require('underscore');

//Using the contain method to check for a number in an array
const result = underscore.contains([3,4,5], 0);
console.log(result);


//npm list - list all the packages that a project depends on 

//Viewing Registry Info for a Package
//'npm view package-name' - shows the registry info of a package
//'npm view package-name dependencies' - shows the dependencies of a package
//'npm view package-name versions' - shows all the versions of a package