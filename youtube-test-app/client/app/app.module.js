import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import uiRouter from 'angular-ui-router';

let myApp = angular.module('app', [
    'ui.router',
    ComponentsModule.name
]);

myApp.config(function ($stateProvider) {
    let helloState = {
        name: 'hello',
        url: '/hello',
        template: './app.component.html'
    };

    let aboutState = {
        name: 'about',
        url: '/about',
        template: '<style>.active { color: red; font-weight: bold; }</style><h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});

myApp.component('app', appComponent);