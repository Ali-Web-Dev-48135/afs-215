module.exports = class NumberClass {
  constructor(value) {
    this.value = value;
  }

  testuserinput() {
    if (this.value % 3 === 0 && this.value % 7 === 0) {
      return "Good Evening";
    } else if (this.value % 3 === 0 || this.value === 3) {
      return "Good Morning";
    } else if (this.value % 7 === 0 || this.value === 7) {
      return "Good Afternoon";
    } else if (this.value % 3 === 0 && this.value % 7 === 0) {
      return "Good Evening";
    } else if (this.value % 3 !== 0 || this.value % 7 !== 0) {
      return String(this.value);
    } else {
      return "This is a custom error message";
    }
  }
};
