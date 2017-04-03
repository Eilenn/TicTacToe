describe('game tests', function () {
    beforeEach(function () {
        size = 3;
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    });
    it('changes starting symbol from cross to circle in the middle of game', function () {
        starting = cross;
        moveCounter = 1;
        gameModule2.changeStarting();
        expect(starting).toBe(circle);
    }),
        it('changes starting symbol from circle to cross in the middle of game', function () {
            starting = circle;
            moveCounter = 1;
            gameModule2.changeStarting();
            expect(starting).toBe(cross);
        }),
        it('resets game when change starting symbol from circle to cross in the beginning of the game', function () {
            starting = circle;
            moveCounter = 0;
            spyOn(gameModule2, 'resetGame');
            gameModule2.changeStarting();
            expect(starting).toBe(cross);
            expect(gameModule2.resetGame).toHaveBeenCalled();
        }),
        it('start game when reset', function () {
            spyOn(gameModule2, 'startGame');
            gameModule2.resetGame();
            expect(gameModule2.startGame).toHaveBeenCalledWith(cross);
        }),
        it('alert for game over for empty field clicked', function () {
            var cell = document.createElement("td"),
                moveCounter = 5;
            cell.id = 2;
            cell.innerText = '';
            winner = true;
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
            spyOn(window, 'alert');
            gameModule2.nextMove(cell);
            expect(window.alert).toHaveBeenCalledWith("Game over,  you cannot place symbol on board.");
        }),
                it('alert for game over for nonempty field clicked', function () {
            var cell = document.createElement("td"),
                moveCounter = 5;
            cell.id = 2;
            cell.innerText = 'X';
            winner = true;
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
            spyOn(window, 'alert');
            gameModule2.nextMove(cell);
            expect(window.alert).toHaveBeenCalledWith("Game over,  you cannot place symbol on board.");
        }),
        it('message for disallowed move - clicking on occupied field', function () {
            var cell = document.createElement("td");
                moveCounter = 5,
                winner = false;
            cell.id = 2;
            cell.innerText = 'X';
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
            spyOn(messagesModule, 'setMessage');
            gameModule2.nextMove(cell);
            expect(messagesModule.setMessage).toHaveBeenCalledWith("This field is occupied. Pick another.");
        });
});