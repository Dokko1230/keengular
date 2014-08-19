angular.module('demoModule', ['KeenTrackerModule'])
.controller('DemoCtrl', [
  '$scope',
  'keenTrackerService',
  function($scope, localStorageService) {
    console.log('test');

  }
]);