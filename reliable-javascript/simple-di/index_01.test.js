describe('DiContainer', function(){
    var container;
    beforeEach(function(){
        container = new DiContainer();
    });
    it('当缺少参数或类型错误时，抛出异常', function(){
        var bagArgs = [
            // 没有参数
            [],
            // 只有名称
            ['name'],
            // 只有名称和依赖
            ['name', ['dep1', 'dep2']],
            // 没有依赖
            ['name', function(){}],
            // 其他例子
            [1,['a', 'b'], function(){}],
            ['name', [1,2], function(){}],
            ['name', ['a','b'], 'should be a function']
        ];
        bagArgs.forEach(function(args){
            expect(function(){
                container.register.apply(container, args)
            }).toThrowError(container.messages.registerRequiresArgs);
        })
    })
})