import angular from 'angular';
import watchHistoryComponent from './watchHistory.component';

const watchHistoryModule = angular.module('watchHistory', [])
  .component('watchHistory', watchHistoryComponent);
export default watchHistoryModule;