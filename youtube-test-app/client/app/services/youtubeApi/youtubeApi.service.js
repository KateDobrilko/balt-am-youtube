class youtubeApiService {
    constructor(googleAuthService) {
        'ngInject';
        this.googleAuthService = googleAuthService;
    }

    searchVideo(query) {
        var request = this.googleAuthService.gapi.client.youtube.search.list({
            'maxResults': '25',
            'part': 'snippet',
            'q': query,
            'type': ''
        });

        request.execute(function(response) {
            console.log(response);
        });

    }

    
}
youtubeApiService.$inject = ['googleAuthService'];
export default youtubeApiService;