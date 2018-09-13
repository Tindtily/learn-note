DiContainer.prototype.get = function(name) {
    return this.registrations[name].func();
};
