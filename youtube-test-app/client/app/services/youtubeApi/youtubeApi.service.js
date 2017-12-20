import angular from 'angular';
class youtubeApiService {
    constructor(googleAuthService) {
        'ngInject';
        this.googleAuthService = googleAuthService;
        this.playlistId = null;
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

    initPlaylist(afterCallback) {
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
        let that = this;
        request.execute(function (response) {
            that.playlistId = response.id;
            afterCallback(that.playlistId);
        });
    }

    getPlaylistId(afterCallback) {
        if (this.playlistId) {
            afterCallback(this.playlistId);
            return;
        }

        let request = this.googleAuthService.gapi.client.youtube.playlists.list({
            'mine': 'true',
            'maxResults': '25',
            'part': 'snippet,contentDetails',
        });

        let that = this;
        request.execute(function (response) {
            angular.forEach(response.items, (playlist) => {
                if (playlist.snippet.title == 'Watch history') {
                    that.playlistId = playlist.id;
                }
            });
            if (that.playlistId) {
                afterCallback(that.playlistId);
                return;
            }
            else {
                that.initPlaylist(afterCallback);
            }
        });


    }

    getWatchHistory(afterCallback) {
        this.getPlaylistId((playlistId) => {
            let request = this.googleAuthService.gapi.client.youtube.playlistItems.list({
                'mine': 'true',
                'maxResults': '25',
                'playlistId': playlistId,
                'part': 'snippet,contentDetails'
            });
            request.execute((response) => {
                afterCallback(response.items)
            });
        });
    }

    saveVideoAsWatched(id) {
        this.getPlaylistId((playlistId) => {
            let request = this.googleAuthService.gapi.client.youtube.playlistItems.insert({
                part: 'snippet,status',
                resource: {
                    snippet: {
                        playlistId: playlistId,
                        resourceId: {videoId: id, kind: 'youtube#video'}
                    }
                }
            });
            request.execute();
        });

    }


}
youtubeApiService.$inject = ['googleAuthService'];
export default youtubeApiService;