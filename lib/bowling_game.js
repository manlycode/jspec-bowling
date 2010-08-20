var BowlingGame = function() {
    var rolls = [];
    var rollIndex = 0;

    var publicInterface = {
        roll: function(pins) {
            rolls[rollIndex] = pins;
            rollIndex++;
        },

        score: function() {
            var score = 0;
            var frameIndex = 0;

            for (var frame = 0; frame < 10; frame++) {
                if( (rolls[frameIndex]) == 10) { //strike
                    score += 10 + rolls[frameIndex+1] + rolls[frameIndex+2];
                    frameIndex++;
                }
                else if( (rolls[frameIndex] + rolls[frameIndex+1]) == 10) { //spare
                    score += 10 + rolls[frameIndex+2];
                    frameIndex += 2;
                }

                else {
                    score += rolls[frameIndex] + rolls[frameIndex+1];
                    frameIndex += 2;
                }
            }

            return score;    
        }
    };

    return publicInterface;
};
