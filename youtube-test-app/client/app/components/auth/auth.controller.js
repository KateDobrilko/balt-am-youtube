class authController {
    constructor(googleAuthService, $state) {
        this.name = 'auth';
        this.localizedAuthButtonText = "Sign in with Google";
        this.googleAuthService = googleAuthService;
        this.$state = $state;
        this.returnToOriginalState = () => {
            let state = this.returnTo.state();
            let params = this.returnTo.params();
            let options = Object.assign({}, this.returnTo.options(), { reload: true });
            this.$state.go(state, params, options);
        };
    }

   $onInit() {
        this.googleAuthService.initGApiClient();
    };

    handleGoogleSignInClick() {
        this.googleAuthService.signIn().then(this.returnToOriginalState)
            .finally(() => this.googleAuthService.isAuthenticated = false);
    };

}
authController.$inject = ['googleAuthService', '$state'];
export default authController;