class authController {
    constructor(googleAuthService) {
        this.name = 'auth';
        this.localizedAuthButtonText = "Sign in with Google";
        this.googleAuthService = googleAuthService;
    }

    $onInit() {
        this.googleAuthService.initGApiClient();
    };

    handleGoogleSignInClick() {
        this.googleAuthService.signIn();
    };

}
authController.$inject = ['googleAuthService'];
export default authController;