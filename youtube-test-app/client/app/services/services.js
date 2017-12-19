import angular from 'angular';
import googleAuthService from './googleAuth/googleAuth.service';
import youtubeApiService from './youtubeApi/youtubeApi.service';


const ServicesModule = angular.module('app.services', [])
    .service('googleAuthService', googleAuthService)
    .service('youtubeApiService', youtubeApiService);

export default ServicesModule;