describe('Winning conditions', function () {
    beforeEach(function () {
        size = 3;
    });
    it('declares winner for 3 symbols in row', function () {
        board = [1, 1, 1, -1, -1, 0, 0, 0, 0];
        expect(winnerChecker2.hasWonGame()).toBe(true);
    }),
        it('does not declare winner for no symbols in row', function () {
            board = [0, 1, 1, -1, -1, 0, 0, 0, 0];
            expect(winnerChecker2.hasWonGame()).toBe(false);
        }),
        it('does not declare winner for no symbols in column', function () {
            board = [0, 1, 1, -1, -1, 0, 0, 0, 0];
            expect(winnerChecker2.hasWonGame()).toBe(false);
        }),
        it('declares winner for 3 symbols in column', function () {
            board = [1, 0, 0, 1, -1, 0, 1, 0, 0];
            expect(winnerChecker2.hasWonGame()).toBe(true);
        }),
        it('declares winner for 3 symbols diagonally from left to right', function () {
            board = [1, -1, -1, 0, 1, 0, 1, 0, 1];
            expect(winnerChecker2.hasWonGame()).toBe(true);
        }),
        it('declares winner for 3 symbols diagonally from right to left', function () {
            board = [-1, -1, 1, 0, 1, 0, 1, 0, -1];
            expect(winnerChecker2.hasWonGame()).toBe(true);
        }),
        it('does not declares winner for no symbols diagonally', function () {
            board = [0, -1, -1, 0, 1, 0, 1, 0, 1];
            expect(winnerChecker2.hasWonGame()).toBe(false);
        }),
        it('declares draw', function () {
            board = [1, -1, 1, -1, 1, 1, -1, 1, -1];
            var moveCounter = 9;
            expect(winnerChecker2.hasWonGame()).toBe(false);
            expect(winnerChecker2.isDraw(moveCounter)).toBe(true);
        }),
        it('initializes empty board', function () {
            var expectedBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            var board = winnerChecker2.createBoard(3);
            expect(board.length).toBe(9);
            expect(board).toEqual(expectedBoard);
        });
});