export class Range {
  constructor(num1, num2) {
    if (num1 > num2) {
      this.upperPoint = num1;
      this.lowerPoint = num2;
    } else {
      this.upperPoint = num2;
      this.lowerPoint = num1;
    }
  }

  has(num) {
    if (this.lowerPoint <= num && num <= this.upperPoint) {
      return true;
    } else {
      return false;
    }
  }

  print() {
    return `[${this.lowerPoint},${this.upperPoint}]`;
  }
}