describe("About Strings", function() {

  it("should join or concatenate strings", function () {
    expect("Hello" + "Greater Sum").toEqual(FILL_ME_IN);
  });

  it("should join or concatenate strings stored in variables", function () {
    var hello = "Hello";
    var name = "Greater Sum";
    expect(hello + name).toEqual(FILL_ME_IN);
  });

  it("should give us the length of the string", function () {
    var length = "Hello".length;
    expect(length).toEqual(FILL_ME_IN);
  });

  it("should give us the length of the string", function () {
    var length = "Hello".length;
    expect(length).toEqual(FILL_ME_IN);
  });

  it("should have non-alphabet characters in a string", function () {
    var nonAlphaString = "3*&@{>";
    var alphaString = "alpha";
    expect(alphaString + nonAlphaString).toEqual(FILL_ME_IN);
  });

  it("should pick out individual characters from a string", function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var tenthLetter = alphabet[9];
    expect(tenthLetter).toEqual(FILL_ME_IN);
  });

  it("should pick out zeroth? letter from a string", function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var firstLetter = alphabet[0];
    expect(firstLetter).toEqual(FILL_ME_IN);
  });

  it("should pick out z from a string", function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var zLetter = alphabet[FILL_ME_IN];
    expect(zLetter).toEqual("z");
  });

  it("should slice out part of a string", function () {
    var sentence = "Welcome to Greater Sum";
    var word = sentence.slice(0, 7);
    expect(word).toEqual(FILL_ME_IN);
  });

  it("should slice out part of a string", function () {
    var sentence = "Welcome to Greater Sum";
    var word = sentence.slice(FILL_ME_IN, FILL_ME_IN);
    expect(word).toEqual("Greater");
  });

  it("should convert a string to a number", function() {
    var nineAsANumber = 9;
    var nineAsAString = "9";
    expect(nineAsANumber + nineAsAString).toEqual(FILL_ME_IN);
  });

  it("should convert a number to a string", function() {
    var nineAsAString = "9";
    var nineAsANumber = 9;
    expect(nineAsAString + nineAsANumber).toEqual(FILL_ME_IN);
  });
});
