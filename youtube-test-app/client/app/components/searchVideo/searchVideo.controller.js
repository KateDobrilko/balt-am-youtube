class searchVideoController {
    constructor($http, youtubeApiService, $scope) {
        this.name = 'searchVideo';
        this.youtubeApiService = youtubeApiService;
        this.videos = [];
        let $ctrl = this;
        this.sendSearchRequest = () => {
            function searchQuerySuccess(response){
                $ctrl.videos = response.items;
                $scope.$apply();
            }
            this.youtubeApiService.searchVideo(this.searchQuery, searchQuerySuccess);
        };
        this.searchQuery = '';
    }
}
searchVideoController.$inject = ['$http','youtubeApiService', '$scope'];
export default searchVideoController;