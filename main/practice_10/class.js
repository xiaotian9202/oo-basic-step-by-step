class Class {
  constructor(number) {
    this.number = number;
  }

  getDisplayName() {
    return "Class " + this.number;
  }

  assignLeader(student) {
    if (this.number === student.klass.number) {
      this.leader = student;
    } else {
      console.log("It is not one of us.");
    }
  }

  appendMember(student) {
    student.klass = this;
  }

  isIn(klasses) {
    for (let klass in klasses) {
      if (klass === this) {
        return true;
      }
    }
    return false;
  }
}

export default Class;