interface MajorCredits {
  credits: number;
  brand?: "MajorCredits";
}
interface MinorCredits {
  credits: number;
  brand?: "MinorCredits";
}

interface Subject {
  majorCredits: MajorCredits;
  minorCredits: MinorCredits;
}

function sumMajorCredits(subject1: Subject, subject2: Subject): MajorCredits {
  return {
    credits: subject1.majorCredits.credits + subject2.majorCredits.credits,
    brand: "MajorCredits",
  };
}
function sumMinorCredits(subject1: Subject, subject2: Subject): MinorCredits {
  return {
    credits: subject1.minorCredits.credits + subject2.minorCredits.credits,
    brand: "MinorCredits",
  };
}
