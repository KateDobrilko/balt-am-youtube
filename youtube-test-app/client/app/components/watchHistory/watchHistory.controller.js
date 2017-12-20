class watchHistoryController {
    constructor(youtubeApiService, $scope) {
        this.name = 'watchHistory';
        this.youtubeApiService = youtubeApiService;
        this.videos = [];
        this.updateWatchHistory();
        this.$scope = $scope;
    }

    updateWatchHistory() {
        let that = this;
        this.youtubeApiService.getWatchHistory((result) => {
            that.videos = result.slice().reverse();
            that.$scope.$apply();
        });
    }
}
watchHistoryController.$inject = ['youtubeApiService', '$scope'];
export default watchHistoryController;