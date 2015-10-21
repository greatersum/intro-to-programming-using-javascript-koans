describe("About Booleans", function() {
  it("should be truthy when true", function() {
    var trueVariable = FILL_ME_IN;
    expect(trueVariable).toBeTrue();
  });

  it("should be falsy when false", function() {
    var falseVariable = FILL_ME_IN;
    expect(falseVariable).toBeFalse();
  });

  it("should be and", function() {
    var learning = true;
    var fun = true;
    expect(learning && fun).toEqual(FILL_ME_IN);
  });

  it("should not be and", function() {
    var learning = true;
    var boring = false;
    expect(learning && boring).toEqual(FILL_ME_IN);
  });

  it("should be or", function() {
    var learning = true;
    var fun = true;
    expect(learning || fun).toEqual(FILL_ME_IN);
  });

  it("should still be or", function() {
    var learning = true;
    var boring = false;
    expect(learning || boring).toEqual(FILL_ME_IN);
  });

  it("should not be or", function() {
    var learning = false;
    var fun = false;
    expect(learning || fun).toEqual(FILL_ME_IN);
  });

  it("should not not", function() {
    var doubleNegative = false;
    expect(!doubleNegative).toEqual(FILL_ME_IN);
  })

  it("should be educational or entertaining and fun", function() {
    var educational = true;
    var entertaining = true;
    var fun = true;
    expect((educational || entertaining) && fun).toEqual(FILL_ME_IN);
  });

  it("should be (educational or entertaining) and fun", function() {
    var educational = FILL_ME_IN;
    var entertaining = FILL_ME_IN;
    var fun = FILL_ME_IN;
    expect((educational || entertaining) && fun).toEqual(false);
  });

  it("should take a comparison and result in a boolean", function() {
    expect(2 > 1).toEqual(FILL_ME_IN);
  });

  it("should take a different comparison and result in a boolean", function() {
    expect(2 === 1).toEqual(FILL_ME_IN);
  });

  it("should be greater than or equal to", function() {
    expect(10 >= 9).toEqual(FILL_ME_IN);
    expect(10 >= 10).toEqual(FILL_ME_IN);
    expect(10 >= 11).toEqual(FILL_ME_IN);
  });

});
