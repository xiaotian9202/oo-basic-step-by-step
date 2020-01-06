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
      console.log("I am " + this.teacherName +". I know " + student.name + " become Leader of Class " + this.number +".");
    } else {
      console.log("It is not one of us.");
    }
  }

  appendMember(student) {
    student.klass = this;
    console.log("I am " + this.teacherName +". I know " + student.name + " has joined Class " + this.number +".");
  }

  isIn(klasses) {
    for (let klass in klasses) {
      if (klass === this) {
        return true;
      }
    }
    return false;
  }

  registerJoinListener(teacher) {
    this.teacherKlasses = teacher.klasses;
    this.teacherName = teacher.name;
  }

  registerAssignLeaderListener(teacher) {
    this.teacherKlasses = teacher.klasses;
    this.teacherName = teacher.name;
  }
}

export default Class;