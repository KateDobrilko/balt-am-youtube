authHookRunBlock.$inject = ['$transitions', 'googleAuthService'];
export default function authHookRunBlock($transitions, googleAuthService) {
    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };

    let redirectToLogin = (transition) => {
        let GoogleAuthService = transition.injector().get('googleAuthService');
        let $state = transition.router.stateService;
        if (!GoogleAuthService.isAuthenticated) {
            return $state.target('auth', undefined, { location: false });
        }
    };

    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}