describe('game tests', function() {
  it('changes starting symbol from cross to circle in the middle of game', function() {
       starting=cross;
       moveCounter=1;
      gameModule2.changeStarting();
      expect(starting).toBe(circle);
  }),
    it('changes starting symbol from circle to cross in the middle of game', function() {
       starting=circle;
       moveCounter=1;
      gameModule2.changeStarting();
      expect(starting).toBe(cross);
  }),
      it('resets game when change starting symbol from circle to cross in the beginning of the game', function() {
       starting=circle;
       moveCounter=0;
       spyOn(gameModule2,'resetGame');
      gameModule2.changeStarting();
      expect(starting).toBe(cross);
      expect(gameModule2.resetGame).toHaveBeenCalled();
  }),
  it('start game when reset',function(){
      spyOn(gameModule2,'startGame');
      gameModule2.resetGame();
      expect(gameModule2.startGame).toHaveBeenCalledWith(cross);
  });
});