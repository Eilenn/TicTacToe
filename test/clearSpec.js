describe('board clearing',function(){
    it('clears board', function(){
        var field=document.createElement("td"),
        empty='',nonempty='something';
        field.innerText=nonempty;
       document.getElementById= jasmine.createSpy('HTML Element').and.returnValue(field);
        clear.clearBoard();
        expect(field.innerText).toBe(empty);
    });
});