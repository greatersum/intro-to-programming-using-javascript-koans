describe("About Arrays", function() {
  it("should have zero based arrays", function() {
    var array = ["first value"];
    expect(array[FILL_ME_IN]).toEqual("first value");
  });
  it("should have arrays with multiple values", function() {
    var array = ["1st", "2nd"];
    expect(array[FILL_ME_IN]).toEqual("2nd");
  });
  it("should have different types in one array", function() {
    var array = ["1st", 2];
    expect(array[0]).toEqual(FILL_ME_IN);
    expect(array[1]).toEqual(FILL_ME_IN);
  });
  it("should have different types in one array, even other arrays", function() {
    var array = ["1st", 2, ["3rd", 4]];
    expect(array[2][0]).toEqual(FILL_ME_IN);
  });
  it("should find the length of the array", function() {
    var array = ["Andy", "Bob", "Chad"];
    expect(array.length).toEqual(FILL_ME_IN);
  });
  it("should find the length of the array with nested arrays", function() {
    var array = ["Andy", "Bob", "Chad", ["Dave", "Doug"]];
    expect(array.length).toEqual(FILL_ME_IN);
  });
  it("should push values onto the end of the array", function() {
    var array = ["Andy", "Bob"];
    array.push("Chad");
    expect(array[2]).toEqual(FILL_ME_IN);
  });
  it("should unshift values onto the beginning of the array", function() {
    var array = ["Bob", "Chad"];
    array.unshift("Andy");
    expect(array[0]).toEqual(FILL_ME_IN);
  });
  it("should pop values from the end of the array", function() {
    var array = ["Andy", "Bob", "Chad"];
    var poppedValue = array.pop();
    expect(poppedValue).toEqual(FILL_ME_IN);
    expect(array.length).toEqual(FILL_ME_IN);
  });
  it("should shift values from the beginning of the array", function() {
    var array = ["Andy", "Bob", "Chad"];
    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array.length).toEqual(FILL_ME_IN);
  });
  it("should allow you to add and remove from the beginning or end of the array", function() {
    var array = ["Andy", "Bob", "Chad"];
    array.shift();
    array.pop();
    array.push("Dave");
    array.push("Doug");
    array.unshift("Alex");

    expect(array).toEqual(FILL_ME_IN);
    expect(array.length).toEqual(FILL_ME_IN);
  });
  it("should combine or concatenate two arrays into one array", function() {
    var team1Names = ["Andy", "Bob", "Chad"];;
    var team2Names = ["Dave", "Ed"];
    var combinedTeamNames = team1Names.concat(team2Names);
    expect(combinedTeamNames.length).toEqual(FILL_ME_IN);
    expect(combinedTeamNames[4]).toEqual(FILL_ME_IN);
  });
  it("should find the index of the value in the array", function() {
    var array = ["Andy", "Bob", "Chad", "Dave", "Ed"];
    var foundIndex = array.indexOf("Dave");
    expect(foundIndex).toEqual(FILL_ME_IN);
    expect(array[foundIndex]).toEqual(FILL_ME_IN);
  });
  it("should return -1 if it can't find the value", function() {
    var array = ["Andy", "Bob", "Chad", "Dave", "Ed"];
    var notFoundIndex = array.indexOf("Fred");
    expect(notFoundIndex).toEqual(FILL_ME_IN);
  });
  it("should combine an array into a string", function() {
    var array = ["Andy", "Bob", "Chad"];
    expect(array.join()).toEqual(FILL_ME_IN);
  });
  it("should combine an array into a string with a custom string", function() {
    var array = ["Andy", "Bob", "Chad"];
    expect(array.join(" and ")).toEqual(FILL_ME_IN);
  });
  it ("should loop over the array and sum the items", function() {
    var array = [1, 4, 7, 3, 1];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    expect(sum).toEqual(FILL_ME_IN);
  });
  it ("should create an array of squares", function() {
    var array = [];
    for (var i = 1; i <= 10; i++) {
      array.push(i * i);
    }
    expect(array[array.length]).toEqual(FILL_ME_IN);
    expect(array.length).toEqual(FILL_ME_IN);
  });
});
