Angular Keen Tracker
=====================

An Angular module that give you access to Keen tracker

Installation:

```bash
bower install Angular-Keen-Tracker
```

Example use: 

```javascript

angular.module('sample-app', ['KeenTrackerModule']);

angular.module('sample-app')
  .controller('SampleCtrl', ['keenTrackerService', function(keenTrackerService) {
    var initialize = function() {
      keenTrackerService.initialize({
        projectId: 'your project id',
        readKey: 'your readKey',
        writeKey: 'your writeKey'
      });
    };

    var submit = function(something) {
      keenTrackerService.addEvent('a thing', something);
    };

    initialize();
}]);

```

To do:
- Add Demo
- Expand Readme
