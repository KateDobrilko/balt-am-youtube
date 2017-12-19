import angular from 'angular';
import googleAuthService from './googleAuth/googleAuth.service';


const ServicesModule = angular.module('app.services', [])
    .service('googleAuthService', googleAuthService)

export default ServicesModule;