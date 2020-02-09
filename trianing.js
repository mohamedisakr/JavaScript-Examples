// /*
function ask(question) {
  console.log(this);
  console.log(this.teacher, question);
}

workshop1 = { teahcer: "coti" };

workshop2 = { teacher: "mariam" };
// ask
//   .bind(workshop1, "Can I set context explicitly?")
//   .call(workshop1, "Can I set context explicitly?");
ask.call(workshop2, "Can I set context explicitly?");

ask.call(workshop1, "Can I set context explicitly?");

// */

/*
function ask(question) {
  console.log(this.teacher, question);
}

workshop1 = {
  teacher: "coti",
  ask: ask
};

workshop2 = {
  teacher: "mariam",
  ask: ask
};

workshop1.ask("How do i share a method?");

workshop2.ask("How do i share a method?");
*/

/*
  function decNum() {
    let i = 10;
    while (i > 0) {
      console.log(--i);
    }
  }
  setTimeout(decNum, 2000);
  */
