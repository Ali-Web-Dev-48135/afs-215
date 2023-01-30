module.exports.returOne = function returnOne(value) {
  if (value === 1) return "1";
};

module.exports.returnTwo = function returnTwo(value) {
  if (value === 2) return "2";
};

module.exports.goodMorning = function goodMorning(value) {
  if (value === 3 || value % 3 === 0) return "Good Morning";
};

module.exports.returnAsString = function returnAsAString(value) {
  if (value !== 3 || value !== 7) return String(value);
};

module.exports.goodAfternoon = function goodAfternoon(value) {
  if (value === 7 || value % 7 === 0) return "Good Afternoon";
};

module.exports.goodEvening = function (value) {
  if (value % 3 === 0 || value % 7 === 0) return "Good Evening";
};

const errorMessage = (value) => {
  if (isNaN(value) === true) return "Error Messasge Returned";
};

