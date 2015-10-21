describe("About Branching", function() {
  it("should not execute the code inside the if", function() {
    var value = 5;
    if (false) {
      value += 5;
    }
    expect(value).toBe(FILL_ME_IN);
  });

  it("should not execute the code inside the if", function() {
    var value = 5;
    if (value > 10) {
      value += 5;
    }
    expect(value).toBe(FILL_ME_IN);
  });

  it("should help you see how if statements work", function() {
    var value = 1;
    if (value > FILL_ME_IN) {
      value += 3;
    }
    expect(value).toBe(4);
  });

  it("should help you see how if/else statements work", function() {
    var funValue;
    var funLevel = 8;
    if (funLevel > 9) {
      funValue = "Super Fun";
    }
    else {
      funValue = "Fun";
    }
    expect(funValue).toBe(FILL_ME_IN);
  });

  it("should help you see how if/elseif/else statements work", function() {
    var funValue;
    var funLevel = 8;
    if (funLevel > 9) {
      funValue = "Super Fun";
    }
    else if (funLevel > 5) {
      funValue = "Fun";
    }
    else {
      funValue = "Meh";
    }
    expect(funValue).toBe(FILL_ME_IN);
  });
});
