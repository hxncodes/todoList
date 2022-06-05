const Logger = require("nodemon/lib/utils/log");

module.exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();
  const options = { weekday: "long" };
  return today.toLocaleDateString("en-US", options);
};

console.log(module.exports);
