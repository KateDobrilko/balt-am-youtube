import angular from 'angular';
import googleAuthService from './googleAuth/googleAuth';

const ServicesModule = angular.module('app.services', [])
  .service('googleAuthService', googleAuthService);

export default ServicesModule;