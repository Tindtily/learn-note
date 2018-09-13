describe('get(name)', function(){
    var container;
    beforeEach(function(){
        container = new DiContainer();
    });
    it('returns undefined if name was not defined', function(){
        expect(container.get('notDefined')).toBeUndefined()
    })
})