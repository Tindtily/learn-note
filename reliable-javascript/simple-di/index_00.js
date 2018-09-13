var DiContainer = function() {
    this.registrations = [];
};
/**
 * 注册函数
 * @param {String} name 可注入对象名称
 * @param {Array} dependencies 依赖的数组
 * @param {Function} func 返回值是可注入对象的函数
 */
DiContainer.prototype.register = function(name, dependencies, func) {
    var ix;
    if (
        typeof name !== "string" ||
        !Array.isArray(dependencies) ||
        typeof func !== "function"
    ) {
        throw new Error(this.messages.registerRequiresArgs);
    }
    var that = this;
    dependencies.map(function(value) {
        if (typeof value != "string") {
            throw new Error(that.messages.registerRequiresArgs);
        }
    });
    this.registrations[name] = { func: func };
};
