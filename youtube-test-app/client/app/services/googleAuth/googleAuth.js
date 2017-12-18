import * as ClientGApiConfig from './../../../client_id.json';
import * as ApiKeyHolder from './../../../gapi_key.json';
class googleAuthService {
    constructor() {
        'ngInject';
        this.GoogleAuth = null;
    }

    /*initGApiClient() {
        let $script = require("scriptjs");
        $script("https://apis.google.com/js/api.js", function () {
            this.gapi.client.init({
                'apiKey': ApiKeyHolder['api-key'],
                'clientId': ClientGApiConfig['web']['client_id'],
                'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
            }).then(function () {
                this.GoogleAuth = this.gapi.auth2.getAuthInstance();

                // Listen for sign-in state changes.
                this.GoogleAuth.isSignedIn.listen(updateSigninStatus);
            });
        });
    }*/
}

export default googleAuthService;