describe("About Branching", function() {
  it("should not execute the code inside the if", function() {
    var value = 5;
    if (false) {
      value += 5;
    }
    expect(value).toBe(FILL_ME_IN);
  });

  it("should help you see how if statements work", function() {
    var value = 1;
    if (FILL_ME_IN) {
      value += 3;
    }
    expect(value).toBe(4);
  });

  it("should help you see how if statements work", function() {
    var value = "Boring";
    var funLevel = 8;
    if (funLevel > 8) {
      value = "Exciting";
    }
    else if (funLevel > 5) {
      value = "Fun";
    }
    else if (funLevel > 2) {
      value = "meh";
    }
    expect(value).toBe(FILL_ME_IN);
  });

});
