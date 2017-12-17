import angular from 'angular';
import videoPlayerComponent from './videoPlayer.component';

const videoPlayerModule = angular.module('videoPlayer', [])
  .component('videoPlayer', videoPlayerComponent);
export default videoPlayerModule;