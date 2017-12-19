class searchVideoController {
    constructor($http, youtubeApiService) {
        this.name = 'searchVideo';
        this.youtubeApiService = youtubeApiService;
        this.sendSearchRequest = () => {
            this.youtubeApiService.searchVideo(this.searchQuery);
        };
        this.searchQuery = '';
    }
}
searchVideoController.$inject = ['$http','youtubeApiService'];
export default searchVideoController;