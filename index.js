const string1 = 'String 1';
const string2 = [ 'String 2', 'String 3' ];
const string3 = 'lets complete, this task tomorrow';

//const concatedStrings = string1.concat(...string2);

//const slicedStrings = string1.slice(3);

//const subStrings = string1.substring(1, 7);

//const replacedString = string3.replace('complete', 'finish');

//const trimmedString = string3.trim();

//const splittedString = string3.split('task');

const splittedString = string3.split('task').join('work');



console.log(splittedString);