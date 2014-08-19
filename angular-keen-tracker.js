(function() {
  /*
    Start angularKeenTracker
   */

  var angularKeenTracker = angular.module('KeenTrackerModule', []);

  angularKeenTracker.provider('keenTrackerService', function() {
    this.$get = [function() {
      var client;

      return {
        initialize: function(configs) {
          client = new Keen(configs);
        },
        addEvent: function(name, obj, success, failure) {
          client.addEvent(name, obj, success, failure);
        },
        trackExternalLink: function(jsEvent, eventCollection, properties, timeout, callback) {
          client.trackExternalLink(jsEvent, eventCollection, properties, timeout, callback);
        }
      };
    }];
  });
}).call(this);