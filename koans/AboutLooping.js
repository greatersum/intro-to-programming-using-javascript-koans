describe("About Looping", function() {
  it("should repeat until the room is full", function() {
    var numberOfPeopleInTheRoom = 0;
    while (numberOfPeopleInTheRoom <= 30) {
      numberOfPeopleInTheRoom++;
    }
    expect(numberOfPeopleInTheRoom).toEqual(FILL_ME_IN);
  });

  it("should repeat until the room is empty", function() {
    var numberOfPeopleInTheRoom = 30;
    while (numberOfPeopleInTheRoom > 0) {
      numberOfPeopleInTheRoom--;
    }
    expect(numberOfPeopleInTheRoom).toEqual(FILL_ME_IN);
  });

  it("should repeat until the room is empty", function() {
    var numberOfPeopleInTheRoom = 30;
    var roomEmpty = false;
    while (!roomEmpty) {
      numberOfPeopleInTheRoom--;
      roomEmpty = numberOfPeopleInTheRoom <= 0;
    }
    expect(numberOfPeopleInTheRoom).toEqual(FILL_ME_IN);
  });

  it("should be a deconstructed for loop", function() {
    var i = 0;
    for ( ; i <= 10; )
    {
      i++;
    }
    expect(i).toEqual(FILL_ME_IN);
  });

  it("should start with the initial value and repeat the incrementor until the condition is false", function() {
    for (var i = 0; i <= 10; i++)
    {
    }
    expect(i).toEqual(FILL_ME_IN);
  });

  it("should repeat until the room has a certain number of people", function() {
    var numberOfPeopleThatEntered = 0;
    for (var peopleCount = 5; peopleCount <= FILL_ME_IN; peopleCount++)
    {
      numberOfPeopleThatEntered++;
    }
    expect(peopleCount).toEqual(15);
    expect(numberOfPeopleThatEntered).toEqual(FILL_ME_IN);
  });
});
