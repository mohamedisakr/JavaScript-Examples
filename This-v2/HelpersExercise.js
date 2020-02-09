var Helpers = {
  maxVisibleWorkDescriptionLength: 20,
  minWorkDescriptionLength: 5,
  maxWorkTime: 600,

  validateWorkEntry(description, minutes) {
    if (description.length < this.minWorkDescriptionLength) {
      return false;
    }
    if (
      /^\s*$/.test(minutes) ||
      Number.isNaN(Number(minutes)) ||
      minutes < 0 ||
      minutes > this.maxWorkTime
    ) {
      return false;
    }

    return true;
  },
  formatWorkDescription(description) {
    if (description.length > this.maxVisibleWorkDescriptionLength) {
      description = `${description.substr(
        0,
        this.maxVisibleWorkDescriptionLength
      )}...`;
    }
    return description;
  },
  formatTime(time) {
    var hours = Math.floor(time / 60);
    var minutes = time % 60;
    if (hours == 0 && minutes == 0) return "";
    if (minutes < 10) minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  }
};

console.log(
  Helpers.formatWorkDescription(
    "TDD is one of the most hotly discussed subjects in the software development world. Even the most carefully constructed applications grow to the point where debugging and ensuring quality becomes difficult. Test-driven development (TDD) helps with this tremendously by ensuring that all parts of your application are covered by tests. In this course, Shaun Wassell explores the foundational techniques and tools for unit and integration tests. Along the way, he zooms out to examine how they all fit together. Shaun also highlights TDD's strengths and weaknesses and provides real-world examples that showcase how TDD can fit into your development workflow."
  )
);

// (description);
