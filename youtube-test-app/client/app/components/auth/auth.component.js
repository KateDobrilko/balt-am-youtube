import template from './auth.component.html';
import './auth.component.scss';
import AuthController from './auth.controller.js';

const AuthComponent = {
  template,
  controller: AuthController
};

angular.module('app.components').component('authComponent', AuthComponent);
