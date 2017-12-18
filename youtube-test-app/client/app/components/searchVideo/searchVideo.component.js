import  template from './searchVideo.component.html';
import controller from './searchVideo.controller.js';
import './searchVideo.component.scss';

let searchVideoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'searchVideoController'
};
export default searchVideoComponent;