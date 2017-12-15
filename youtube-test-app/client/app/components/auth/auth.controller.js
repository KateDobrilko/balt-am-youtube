function AuthController() {
    var ctrl = this;

    ctrl.delete = function() {
        ctrl.onDelete({hero: ctrl.hero});
    };

    ctrl.update = function(prop, value) {
        ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
    };
}

export default AuthController;

