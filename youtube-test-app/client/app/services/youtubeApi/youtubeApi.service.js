class youtubeApiService {
    constructor(googleAuthService) {
        'ngInject';
        this.googleAuthService = googleAuthService;
    }

    searchVideo(query, afterCallback) {
        let request = this.googleAuthService.gapi.client.youtube.search.list({
            'maxResults': '25',
            'part': 'snippet',
            'q': query,
            'type': ''
        });

        request.execute(function (response) {
            afterCallback(response);
        });

    }

    createWatchHistoryPlaylist(afterCallback) {
        let request = this.googleAuthService.gapi.client.youtube.playlists.insert({
            part: 'snippet,status',
            resource: {
                snippet: {
                    title: 'Watch history',
                    description: 'Watch history playlist'
                },
                status: {
                    privacyStatus: 'private'
                }
            }
        });

        request.execute(function (response) {
            afterCallback(response.id);
        });
    }

    getWatchHistoryPlaylistId() {
        return $q(function (resolve, reject) {
            if (watchHistoryPlaylistId) {
                resolve(watchHistoryPlaylistId);
                return;
            }

            apiRequest('GET',
                '/youtube/v3/playlists',
                {
                    'mine': 'true',
                    'maxResults': '25',
                    'part': 'snippet,contentDetails',
                    'onBehalfOfContentOwner': '',
                    'onBehalfOfContentOwnerChannel': ''
                }
            ).then((response) => {
                for (let item of response.items) {
                    if (item.snippet.title === WATCH_HISTORY) {
                        watchHistoryPlaylistId = item.id;
                    }
                }
                if (watchHistoryPlaylistId) {
                    resolve(watchHistoryPlaylistId);

                    return;
                }

                return createWatchHistoryPlaylist();
            }, () => {
            });

        });
    }

    getWatchHistory() {
        return getWatchHistoryPlaylistId().then((WHId) => {
            return apiRequest(
                'GET',
                '/youtube/v3/playlistItems',
                {
                    'maxResults': '25',
                    'part': 'snippet,contentDetails',
                    'playlistId': WHId
                }
            )
        }, () => {
        });
    }

    insertToWatchHistory(id) {
        return getUser().then((userData) => {
            if (userData) {
                return getWatchHistoryPlaylistId();
            }
        }).then((WHId) => {
            return apiRequest('POST',
                '/youtube/v3/playlistItems',
                {
                    'part': 'snippet',
                    'onBehalfOfContentOwner': ''
                },
                {
                    'snippet.playlistId': WHId,
                    'snippet.resourceId.kind': 'youtube#video',
                    'snippet.resourceId.videoId': id,
                    'snippet.position': '0'
                });
        });
    }


}
youtubeApiService.$inject = ['googleAuthService'];
export default youtubeApiService;