import template from './youtubeVideo.component.html';
import controller from './youtubeVideo.controller.js';
import './youtubeVideo.component.scss';

let youtubeVideoComponent = {
    restrict: 'E',
    bindings: {
        video: '<'
    },
    template,
    controller
};
export default youtubeVideoComponent;