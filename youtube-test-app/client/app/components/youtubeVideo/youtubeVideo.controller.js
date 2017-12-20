class youtubeVideoController {
    constructor($state) {
        this.name = 'youtubeVideo';
        this.goToWatchVideo = (video) => {
            if (angular.isDefined(video.id.videoId)) {
                $state.go('videoPlayer',{id: video.id.videoId});
            }
        };
    }
}
youtubeVideoController.$inject = ['$state'];
export default youtubeVideoController;