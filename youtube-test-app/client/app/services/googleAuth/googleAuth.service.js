import * as ClientGApiConfig from './../../../client_id.json';
import * as ApiKeyHolder from './../../../gapi_key.json';


class googleAuthService {
    constructor() {
        'ngInject';
        this.GoogleAuth = null;
        this._isAuthenticated = false;
        this._gapi = null;
    }


    get isAuthenticated () {
        return this._isAuthenticated;
    }

    set isAuthenticated (value) {
        this._isAuthenticated = value;
    }

    get gapi () {
        return this._gapi;
    }

    set gapi (value) {
        this._gapi = value;
    }

    signIn() {
        return Promise.resolve(this.GoogleAuth.signIn());
    }

    signOut(){
        return Promise.resolve(this.GoogleAuth.signOut());
    }

    initGApiClient() {
        var $script = require("scriptjs");
        $script(["//apis.google.com/js/api.js"], 'gapiClient');
        $script.ready('gapiClient', () => {
                this.gapi = gapi;
                this.gapi.load('client:auth2', initClient);
                let that = this;
                function initClient() {
                    that.gapi.client.init({
                        'apiKey': ApiKeyHolder['api-key'],
                        'clientId': ClientGApiConfig['web']['client_id'],
                        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
                    }).then(function () {
                        that.GoogleAuth = that.gapi.auth2.getAuthInstance();
                    });
                }
            }
        );
    }
}

export default googleAuthService;