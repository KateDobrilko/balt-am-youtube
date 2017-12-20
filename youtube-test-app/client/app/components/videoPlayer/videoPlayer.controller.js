class videoPlayerController {
    constructor($stateParams, $sce) {
        this.name = 'videoPlayer';
        this.videoUrl = $sce.trustAsResourceUrl('http://www.youtube.com/embed/'+$stateParams.id);
    }
}
videoPlayerController.$inject = ['$stateParams', '$sce'];
export default videoPlayerController;