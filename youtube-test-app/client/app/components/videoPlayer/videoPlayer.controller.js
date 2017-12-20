class videoPlayerController {
    constructor($stateParams, $sce, youtubeApiService) {
        this.name = 'videoPlayer';
        this.videoUrl = $sce.trustAsResourceUrl('http://www.youtube.com/embed/'+$stateParams.id);
        youtubeApiService.saveVideoAsWatched($stateParams.id);
    }
}
videoPlayerController.$inject = ['$stateParams', '$sce', 'youtubeApiService'];
export default videoPlayerController;