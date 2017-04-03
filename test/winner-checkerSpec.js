describe('Winning conditions', function(){
    beforeEach(function(){
        size=3;
    });
    it('declares winner for 3 symbols in row',function(){
       board=[1,1,1,-1,-1,0,0,0,0];
        expect(winnerChecker2.checkRows(size)).toBe(true);
    }),
        it('declares winner for 3 symbols in column',function(){
       board=[1,0,0,1,-1,0,1,0,0];
        expect(winnerChecker2.checkColumns(size)).toBe(true);
    }),
            it('declares winner for 3 symbols diagonally',function(){
       board=[1,-1,-1,0,1,0,1,0,1];
        expect(winnerChecker2.checkDiagonals(size)).toBe(true);
    }),
        it('initializes empty board',function(){
       var board=winnerChecker2.createBoard(3);
        expect(board.length).toBe(9);
        expect(board[0]).toBe(0);
    });
});