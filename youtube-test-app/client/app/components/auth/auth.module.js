import angular from 'angular';
import authComponent from './auth.component';

const authModule = angular.module('auth', [])
  .component('auth', authComponent);
export default authModule;