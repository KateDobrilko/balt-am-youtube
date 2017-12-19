export const appState = {
    name: 'app',
    redirectTo: 'auth',
    component: 'app'
};

export const authState = {
    parent: 'app',
    name: 'auth',
    url: '/auth',
    component: 'auth',
    resolve: { returnTo: returnTo }
};

export const videoPlayerState = {
    parent: 'app',
    name: 'videoPlayer',
    url: '/video_player',
    component: 'videoPlayer',
    data: { requiresAuth: true }
};

export const searchVideoState = {
    parent: 'app',
    name: 'searchVideo',
    url: '/search_video',
    component: 'searchVideo',
    data: { requiresAuth: true }
};

export const watchHistoryState = {
    parent: 'app',
    name: 'watchHistory',
    url: '/watch_history',
    component: 'watchHistory',
    data: { requiresAuth: true }
};


returnTo.$inject = ['$transition$'];
function returnTo($transition$) {
    if ($transition$.redirectedFrom() != null) {
        return $transition$.redirectedFrom().targetState();
    }

    let $state = $transition$.router.stateService;

    if ($transition$.from().name !== '') {
        return $state.target($transition$.from(), $transition$.params("from"));
    }

    return $state.target('searchVideo');
}


