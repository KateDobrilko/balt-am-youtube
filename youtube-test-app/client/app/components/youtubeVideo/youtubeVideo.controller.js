class youtubeVideoController {
    constructor($state) {
        this.name = 'youtubeVideo';
        this.videoId;
        if ((this.video.id.kind == "youtube#video") || this.video.contentDetails) {
            this.videoId = this.video.id.videoId ? this.video.id.videoId : this.video.contentDetails.videoId;
        }
        this.goToWatchVideo = (video) => {
            if (angular.isDefined(this.videoId)) {
                $state.go('videoPlayer', {id: this.videoId});
            }
        };

    }
}

youtubeVideoController
    .$inject = ['$state'];
export
default
youtubeVideoController;