describe 'BowlingGame'
  before_each
    game = new BowlingGame()
  end
  
  it 'should exist'
    game.should.not.be_undefined
  end

  describe 'player rolls'
    describe 'all gutterballs'
      it 'should score 0'
        roll_a(0, 20).times
        game.score().should.eql 0
      end
    end

    describe 'all 1s'
      it 'should score 20'
        roll_a(1, 20).times
        game.score().should.eql 20
      end
    end

    describe 'a spare'
      it 'should score 10 plus a bonus of the next roll'
        roll_a(5, 2).times
        game.roll(3)
        game.roll(2)
        roll_a(0, 16).times

        game.score().should.eql 18
      end
    end

    describe 'a strike'
      it 'should score a 10 plus a bonus of the next 2 rolls'
        game.roll(10)
        game.roll(4)
        game.roll(5)

        roll_a(0, 16).times
        game.score().should.eql 28
      end
    end

    describe 'a perfect game'
      it 'should score 300'
        roll_a(10, 12).times
        game.score().should.eql 300
      end
    end
  end
end
