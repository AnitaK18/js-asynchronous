const path = require("path");
module.exports = {
  entry: "./task1.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
};
