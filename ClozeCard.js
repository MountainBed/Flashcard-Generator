var fs = require("fs");

var ClozeCard = function (text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.pattern = new RegExp(this.cloze, "gi");
  this.partialText = this.fullText.replace(this.pattern, "...");
  this.cardText = "===Cloze-Deletion Flashcard===\n+\n+  Full: " + this.fullText + "\n+\n+  Cloze: " + this.cloze + "\n+\n+  Partial: " + this.partialText + "\n+\n===End of Flashcard===\n";
  this.displayCard = function () {
    console.log(this.cardText);
  };
  this.writeCard = function () {
    fs.appendFile("log.txt", "\n" + this.cardText, function (err) {
      if (err) console.log("There was an error: " + err);
    });
  };
  this.test = function () {
    if (!text.toLowerCase().includes(cloze.toLowerCase())) {
      console.log("ERROR: The text\"" + cloze + "\" is not present in the main string.");
      return false;
    }
  };
};

module.exports = ClozeCard;

var testCloze = new ClozeCard("My name is Ross Blair, and I am a beast.", "monster");

if (testCloze.test()) {
  testCloze.displayCard();
  testCloze.writeCard();
}
