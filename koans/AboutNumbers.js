describe("About Numbers", function() {

  it("should add numbers", function () {
    expect(10 + 1).toEqual(FILL_ME_IN);
  });

  it("should add multiple numbers", function () {
    expect(100 + 10 + 1).toEqual(FILL_ME_IN);
  });

  it("should subtract numbers", function () {
    expect(10 - 1).toEqual(FILL_ME_IN);
  });

  it("should subtract multiple numbers", function () {
    expect(100 - 10 - 1).toEqual(FILL_ME_IN);
  });

  it("should add and subtract multiple numbers", function () {
    expect(12 + 8 - 10).toEqual(FILL_ME_IN);
  });

  it("should multiply numbers", function () {
    expect(5 * 2).toEqual(FILL_ME_IN);
  });

  it("should multiply multiple numbers", function () {
    expect(5 * 3 * 2).toEqual(FILL_ME_IN);
  });

  it("should divide numbers", function () {
    expect(10 / 2).toEqual(FILL_ME_IN);
  });

  it("should follow order of operations", function () {
    expect(10 + 4 * 2 - 10 / 5).toEqual(FILL_ME_IN);
  });

  it("should follow order of operations with parenthesis", function () {
    expect((10 + 4) * 2).toEqual(FILL_ME_IN);
  });

  it("should store numbers in variables", function() {
    var secondsInAMinute = 60;
    var secondsElapsed = FILL_ME_IN;

    var expectedMinutesElapsed = 5;
    expect(secondsElapsed/secondsInAMinute).toEqual(expectedMinutesElapsed)
  });

  it("should mix plain numbers and variables", function() {
    var secondsInAMinute = 60;
    var expectedMinutesElapsed = 5;

    expect(FILL_ME_IN/secondsInAMinute).toEqual(expectedMinutesElapsed)
  });

  it("should increment (add one)", function () {
    var counter = 0;
    counter ++;
    expect(counter).toEqual(FILL_ME_IN);
  });

  it("should decrement (subtract one)", function () {
    var counter = 10;
    counter --;
    expect(counter).toEqual(FILL_ME_IN);
  });

  it("should add the value to the variable", function () {
    var counter = 0;
    counter += 4;
    expect(counter).toEqual(FILL_ME_IN);
  });

  it("should subtract the value from the variable", function () {
    var counter = 10;
    counter -= 2;
    expect(counter).toEqual(FILL_ME_IN);
  });

});
