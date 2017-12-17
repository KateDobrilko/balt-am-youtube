import template from './videoPlayer.component.html';
import controller from './videoPlayer.controller.js';
import './videoPlayer.component.scss';

let videoPlayerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'videoPlayerController'
};
export default videoPlayerComponent;