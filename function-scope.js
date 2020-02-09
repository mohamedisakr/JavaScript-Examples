var workshop = {
  teacher: "mariam",
  ask(question) {
    console.log(this.teacher, question);
  }
};

setTimeout(workshop.ask, 10, "Lost this?");

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");

/*
var workshop = {
  teacher: "mariam",
  ask: question => {
    console.log(this.teacher, question);
  }
};

workshop.ask("What happened to 'this' ?");

workshop.ask.call(workshop, "Still no 'this' ?");
*/
/*
var workshop = {
  teacher: "mariam",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  }
};

workshop.ask("Is this lexical 'this'?");
*/

/*
var workshop = {
  teacher: "mariam",
  ask: function ask(question) {
    console.log(this.teacher, question);
  }
};

new (workshop.ask.bind(workshop))("What does this do?");
// */

/*
var teacher = "mariam";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What's the non strict mode default?");
*/

// askAgain("What's the strict mode default?");
// TypeError: Cannot read property 'teacher' of undefined

/*
function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here? ");
*/

/*
var workshop = {
  teacher: "coti",
  ask(question) {
    console.log(this.teacher, question);
  }
};

setTimeout(workshop.ask, 10, "Lost this?");

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
*/

/*
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = { teacher: "coti" };
var workshop2 = { teacher: "mariam" };

ask.call(workshop1, "Can i explicitly set context?");
ask.call(workshop2, "Can i explicitly set context?");
*/

/*
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = { teacher: "coti", ask: ask };
var workshop2 = { teacher: "mariam", ask: ask };

workshop1.ask("How do i share a method?");

workshop2.ask("How do i share a method?");
*/

/*
var workshop = {
  teacher: "mariam",
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask("What is implicit binding?");
*/

/*
// this-aware
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = { teacher: "mariam" };
  ask.call(myContext, "Why?");
}

otherClass();
*/

/*
// dynamic context aware (dynamic scope)
var teacher = "coti";

function otherClass() {
  var teacher = "mariam";
  ask("why?");
}

function ask(question) {
  console.log(teacher, question);
}

otherClass();
*/

/*
function workshop(teacher) {
  var publicAPI = { ask, getTeacher };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }

  function getTeacher() {
    return teacher;
  }
}

var myWorkshop = workshop("coti");
myWorkshop.ask("It's a module, right?");
console.log(myWorkshop.getTeacher());
*/

/*
var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
})("mariam");

workshop.ask("It's a module, right?");
*/

/*
var workshop = {
  teacher: "mariam",
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask("Is this a module?");
console.log(workshop.teacher);
*/

/*
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}
*/

/*
function foo() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
      console.log(`i :${i}`);
    }, i * 1000);
  }
}

foo();
*/

// console.log("cloure with loop");

/*
var teacher = "coti";

var myTeacher = function() {
  console.log(teacher);
};

teacher = "mariam";

myTeacher();
// */

/*
function ask(question) {
  return function holdQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is Closure?");

myQuestion();
*/

/*
function ask(question) {
  setTimeout(waitASecond, 1000);
  function waitASecond() {
    console.log(question);
  }
}

ask("What is Closure?");
*/

/*
var teacher = "coti";
{
  console.log(teacher); // ReferenceError: Cannot access 'teacher' before initialization
  let teacher = "mariam";
}
*/
/*
{
  teacher = "coti"; // ReferenceError: Cannot access 'teacher' before initialization
  let teacher;
}

*/

/*
teacher = "coti";
var teacher;

getTeacher();

function getTeacher() {
  return teacher;
}

console.log(getTeacher());
*/

/*
var teacher = "coti";
otherTeacher(); //  undefined

function otherTeacher() {
  console.log(teacher);
  var teacher = "mariam";
}
*/

/*
function teacher() {
  return "coti";
}

var otherTeacher;

teacher();
otherTeacher(); // TypeError: otherTeacher is not a function

otherTeacher = function() {
  return "mariam";
};
*/

/*
var student;
var teacher;

student;
teacher;

student = "you";
teacher = "me";

console.log(student, teacher);
*/

/*
var teacher = "coti";
teacher = "mariam"; // ok

const myTeacher = teacher;
myTeacher = "tamil"; // TypeError: Assignment to constant variable.

const teachers = ["coti", "mariam"];
teacher[1] = "tamil"; // Allowed!
*/

/*
function formatString(str) {
  {
    let prefix, rest; //  use explicit let block
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO:/.test(str)) {
    return str;
  }
  return str.slice(4);
}
*/

/*
function lookupRecord(searchString) {
  try {
    var id = getRecord(searchString);
  } catch (error) {
    var id = -1;
  }
  return id;
}

function getRecord(searchString) {
  return parseInt(Math.random() * 100);
}

console.log(lookupRecord("keyword"));
*/

/*
function repeat(fn, n) {
  var result;
  for (var i = 0; i < n; i++) {
    result = repeat(result, i);
  }
  return result;
}
*/

/*
function diff(x, y) {
  if (x > y) {
    let temp = x; // use let to signal semantically block scope
    x = y;
    y = temp;
  }
  return y - x;
}
*/

/*
var teacher = "coti";

{
  let teacher = "mariam";
  console.log(teacher);
}

console.log(teacher);
*/

/*
var teacher = (function getTeacher() {
  try {
    return fetchTeacher(1);
  } catch (error) {
    return "coti";
  }
})();

function fetchTeacher(id) {
  return { id, name: "mariam" };
}

*/

/*
var teacher;
try {
  teacher = fetchTeacher(1);
} catch (error) {
  teacher = "coti";
}

function fetchTeacher(id) {
  return { id, name: "mariam" };
}

console.log(fetchTeacher(1));
*/

/*


// May be anonymous ===>>> function(teacher)
(function anotherTeacher(teacher) {
  console.log(teacher);
})("mariam");

console.log(teacher);
*/

// var teacher = "coti";
// (function anotherTeacher() {
//   var teacher = "mariam";
//   console.log(teacher);
// })(); //("mariam");

// anotherTeacher();
