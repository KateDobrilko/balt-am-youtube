import template from './watchHistory.component.html';
import controller from './watchHistory.controller.js';
import './watchHistory.component.scss';

let watchHistoryComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'watchHistoryController'
};
export default watchHistoryComponent;