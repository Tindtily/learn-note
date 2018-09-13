describe('get(name)', function(){
    var container;

    beforeEach(function(){
        container = new DiContainer();
    });
    it('return the result of executing the registered function', function(){
        var name = 'MyName';
        var returnFromRegisteredFunction = 'something';
        container.register(name, [], function(){
            return returnFromRegisteredFunction
        })
        expect(container.get(name)).toBe(returnFromRegisteredFunction)
    })
})