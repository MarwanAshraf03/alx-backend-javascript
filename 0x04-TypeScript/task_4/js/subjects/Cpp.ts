// / <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) return "No available teacher";
      else return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
  export const cpp = new Cpp();
}
