class authController {
    constructor(googleAuthService) {
      this.name = 'auth';
      this.localizedAuthButtonText = "Sign in with Google";
      this.$onInit = function(){
          googleAuthService.initGApiClient();
      }
    }
  }
authController.$inject = ['googleAuthService'];
export default authController;