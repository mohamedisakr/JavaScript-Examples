var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  }
};

var AnotherWorkshop = Object.assign(Object.create(Workshop), {
  speakUp(message) {
    this.ask(message.toUpperCase());
  }
});

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("mariam");
JSRecentParts.speakUp("But isn't this cleaner?");

/*
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);

AnotherWorkshop.prototype.speackUp = function(message) {
  this.ask(message.toUpperCase());
};

var JSRecentParts = new AnotherWorkshop("mariam");
JSRecentParts.speackUp("Is this actually inheritance");
*/

/*
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("coti");

deepJS.ask = function(question) {
  this.ask(question.toUpperCase());
};

deepJS.ask("Oops, is this infinite recursion?");
*/

/*
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("coti");

console.log(deepJS.constructor === Workshop);

console.log(deepJS.__proto__ === Workshop.prototype); // dunder prototypes

console.log(Object.getPrototypeOf(deepJS) === Workshop.prototype);
*/

/*
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("coti");
var reactJS = new Workshop("mariam");

deepJS.ask("Is prototype a class");

reactJS.ask("Isn't prototype ugly");
*/
