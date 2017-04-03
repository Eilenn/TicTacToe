describe('messages check',function(){
    it('sets message', function(){
         var field=document.createElement("td"),
         message='whatever';
         document.getElementById= jasmine.createSpy('HTML Element').and.returnValue(field);
         messagesModule.setMessage(message);
         expect(field.innerText).toBe(message);
    }),
        it('sets message for draw', function(){
         var field=document.createElement("td"),
         message='draw';
         document.getElementById= jasmine.createSpy('HTML Element').and.returnValue(field);
         messagesModule.setDraw(message);
         expect(field.innerText).toBe(message);
    }),
            it('sets message for x win', function(){
         var field=document.createElement("td"),
         message='x win';
         document.getElementById= jasmine.createSpy('HTML Element').and.returnValue(field);
         messagesModule.setXWin(message);
         expect(field.innerText).toBe(message);
    }),
                it('sets message for o win', function(){
         var field=document.createElement("td"),
         message='o win';
         document.getElementById= jasmine.createSpy('HTML Element').and.returnValue(field);
         messagesModule.setOWin(message);
         expect(field.innerText).toBe(message);
    });
});