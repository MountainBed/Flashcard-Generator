var fs = require("fs");

var BasicCard = function (front, back) {
  this.front = front;
  this.back = back;
  this.cardText = "===Basic Flashcard===\n+\n+  Front: " + this.front + "\n+\n+  Back: " + this.back + "\n+\n===End of Flashcard===\n";
  this.displayCard = function () {
    console.log(this.cardText);
  };
  this.writeCard = function () {
    fs.appendFile("log.txt", "\n" + this.cardText, function (err) {
      if (err) console.log("There was an error: " + err);
    });
  };
};

module.exports = BasicCard;

var testBasic = new BasicCard("What is my name?", "Ross");

testBasic.displayCard();

testBasic.writeCard();
