describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.

  it("should expect true", function() {
    expect(false).toBeTruthy(); //This should be true
  });

  it("should expect equality", function () {
    expect(1 + 1 ===  FILL_ME_IN).toBeTruthy();
  });

  it("should assert equality a better way", function () {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    expect((1 + 1).toString()).toBe(FILL_ME_IN);
  });

  it("should expect equality using variables", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue).toEqual(expectedValue);
  });

});
