describe('symbol checking', function () {
    it('checks if cell symbol is X', function () {
        var cell = document.createElement("td");
        cell.innerText = 'X';
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
        var result = checkSymbolModule.isX(cell);
        expect(result).toBe(true);
    });
    it('checks if cell symbol is not X', function () {
        var cell = document.createElement("td");
        cell.innerText = 'O';
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
        var result = checkSymbolModule.isX(cell);
        expect(result).toBe(false);
    });
    it('checks if cell symbol is O', function () {
        var cell = document.createElement("td");
        cell.innerText = 'O';
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
        var result = checkSymbolModule.isO(cell);
        expect(result).toBe(true);
    });
    it('checks if cell symbol is not O', function () {
        var cell = document.createElement("td");
        cell.innerText = 'X';
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(cell);
        var result = checkSymbolModule.isO(cell);
        expect(result).toBe(false);
    });
    it('checks if document symbol is X', function () {
        document.symbol=cross;
        var result = checkSymbolModule.isSymbolX();
        expect(result).toBe(true);
    });
        it('checks if document symbol is not X', function () {
        document.symbol=circle;
        var result = checkSymbolModule.isSymbolX();
        expect(result).toBe(false);
    });
});