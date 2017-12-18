import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import uiRouter from '@uirouter/angularjs';
import { visualizer } from '@uirouter/visualizer';

let myApp = angular.module('app', [
    uiRouter,
    ComponentsModule.name
]);

myApp.config([
    '$uiRouterProvider', $uiRouter => {
        // Show the UI-Router Visualizer
        visualizer($uiRouter);
    }
]);

myApp.component('app', appComponent);