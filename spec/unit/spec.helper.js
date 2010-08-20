var roll_a = function(pins, times) {
    for (var i = 0; i < times; i++) {
      game.roll(pins)
    };

    return {times: null};
};
