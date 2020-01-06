import Person from "./person.js";


class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    var numbers = [];
    if (this.klasses) {
      for (var klass in this.klasses) {
        numbers.push(this.klasses[klass].number);
      } 
      return super.introduce() + " I am a Teacher. I teach Class " + numbers.join(', ') +  ".";
    }
    return super.introduce() + " I am a Teacher. I teach No Class.";
  }

  introduceWith(student) {
    if (student.klass.number === this.klass.number) {
      return super.introduce() + " I am a Teacher. I teach " + student.name + ".";
    } else {
      return super.introduce() + " I am a Teacher. I don't teach " +  student.name + ".";
    }
  }

  isTeaching(student) {
    for (var klass in this.klasses) {
      if (student.klass = klass) {
        return true;
      }
    }
    return false;
  }
}

export default Teacher;