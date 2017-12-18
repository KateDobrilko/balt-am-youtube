import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import {appState, authState, watchHistoryState, searchVideoState, videoPlayerState} from "./app.states";
import uiRouter from '@uirouter/angularjs';

let myApp = angular.module('app', [
    uiRouter,
    ComponentsModule.name
]);

myApp.config([
    '$uiRouterProvider', $uiRouter => {
        $uiRouter.trace.enable(1);
        const $urlService = $uiRouter.urlService;
        $urlService.rules.otherwise({ state: 'auth' });

        const $stateRegistry = $uiRouter.stateRegistry;
        $stateRegistry.register(appState);
        $stateRegistry.register(authState);
        $stateRegistry.register(watchHistoryState);
        $stateRegistry.register(searchVideoState);
        $stateRegistry.register(videoPlayerState);
    }
]);

myApp.component('app', appComponent);