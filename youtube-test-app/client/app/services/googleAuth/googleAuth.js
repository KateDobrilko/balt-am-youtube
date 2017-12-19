import * as ClientGApiConfig from './../../../client_id.json';
import * as ApiKeyHolder from './../../../gapi_key.json';


class googleAuthService {
    constructor() {
        'ngInject';
        this._GoogleAuth = null;
        this.updateSigninStatus = () => {
            this.signInStatus =  !this.signInStatus;
        };
        this._signInStatus = false;




    }
    get GoogleAuth(){
        return this._GoogleAuth;
    }

    set GoogleAuth(value){
        this._GoogleAuth = value;
    }

    get signInStatus(){
        return this._signInStatus;
    }

    set signInStatus(value){
        this._signInStatus = value;
    }

    signIn(){
        this.GoogleAuth.signIn();
    }

    initGApiClient() {
        var $script = require("scriptjs");
        $script(["//apis.google.com/js/api.js"], 'gapiClient');
        $script.ready('gapiClient', () => {

                gapi.load('client:auth2', initClient);
                let that = this;
                function initClient() {
                    gapi.client.init({
                        'apiKey': ApiKeyHolder['api-key'],
                        'clientId': ClientGApiConfig['web']['client_id'],
                        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
                    }).then(function () {
                        that.GoogleAuth = gapi.auth2.getAuthInstance();

                        // Listen for sign-in state changes.
                        that.GoogleAuth.isSignedIn.listen(that.updateSigninStatus);
                    });
                }
            }
        );

    }


}

export default googleAuthService;