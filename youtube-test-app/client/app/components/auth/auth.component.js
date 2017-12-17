import template from './auth.component.html';
import controller from './auth.controller.js';
import './auth.component.scss';

let authComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'authController'
};
export default authComponent;