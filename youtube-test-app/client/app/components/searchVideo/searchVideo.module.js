import angular from 'angular';
import searchVideoComponent from './searchVideo.component';

const searchVideoModule = angular.module('searchVideo', [])
  .component('searchVideo', searchVideoComponent);
export default searchVideoModule;