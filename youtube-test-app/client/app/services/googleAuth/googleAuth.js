import * as ClientGApiConfig from './../../../client_id.json';
import * as ApiKeyHolder from './../../../gapi_key.json';
import gapi from 'gapi-client';

class googleAuthService {
    constructor() {
        'ngInject';
        this.GoogleAuth = null;
        gapi.load('client:auth2', this.initGApiClient);
    }

    initGApiClient() {
       gapi.client.init({
            'apiKey': ApiKeyHolder['api-key'],
            'clientId': ClientGApiConfig['web']['client_id'],
            'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
        }).then(function () {
            this.GoogleAuth = gapi.auth2.getAuthInstance();

            // Listen for sign-in state changes.
            this.GoogleAuth.isSignedIn.listen(updateSigninStatus);
        });
        

    }
}

export default googleAuthService;