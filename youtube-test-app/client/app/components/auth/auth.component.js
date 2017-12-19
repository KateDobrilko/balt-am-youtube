import template from './auth.component.html';
import controller from './auth.controller.js';
import './auth.component.scss';

let authComponent = {
  restrict: 'E',
  bindings: { returnTo: '<' },
  template,
  controller
};
export default authComponent;