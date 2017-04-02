describe('Winning conditions', function(){
    it('declares X winner for 3 X in row',function(){
       var board=[1,1,1,-1,-1,0,0,0,0], size=3;
        expect(winnerChecker2.checkRows()).toBe(true);
    }),
        it('declares O winner for 3 X in row',function(){
       var board=[1,1,0,-1,-1,-1,0,0,0], size=3;
        expect(winnerChecker2.checkRows()).toBe(true);
    });
        it('initializes empty board',function(){
       var board=winnerChecker2.createBoard(3);
        expect(board.length).toBe(9);
        expect(board[0]).toBe(0);
    });
});