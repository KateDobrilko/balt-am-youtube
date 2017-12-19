import angular from 'angular';
import youtubeVideoComponent from './youtubeVideo.component';

const youtubeVideoModule = angular.module('youtubeVideo', [])
    .component('youtubeVideo', youtubeVideoComponent);
export default youtubeVideoModule;