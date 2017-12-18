import appComponent from "./app.component";
import authComponent from "./components/auth/auth.component";
import searchVideoComponent from "./components/searchVideo/searchVideo.component";
import watchHistoryComponent from "./components/watchHistory/watchHistory.component";
import videoPlayerComponent from "./components/videoPlayer/videoPlayer.component";


export const appState = {
    name: 'app',
    redirectTo: 'auth',
    component: appComponent
};

export const authState = {
    parent: 'app',
    name: 'auth',
    url: '/auth',
    component: authComponent,
    resolve: { returnTo: returnTo }
};

export const videoPlayerState = {
    parent: 'app',
    name: 'videoPlayer',
    url: '/video_player',
    component: videoPlayerComponent
};

export const searchVideoState = {
    parent: 'app',
    name: 'searchVideo',
    url: '/search_video',
    component: searchVideoComponent
};

export const watchHistoryState = {
    parent: 'app',
    name: 'watchHistory',
    url: '/watch_history',
    component: watchHistoryComponent

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


