(function() {
    
  "use strict";
  
  angular.module('common.modal', [])
  // https://github.com/keenlabs/keen-js/wiki/Track
      
  .factory('Keen', [function () {
    var KeenService = {};
    var client = {};

    KeenService.configure = function (configs) {
      client = new Keen(configs);
    };
    KeenService.addEvent = function (name, obj) {
      client.addEvent(name, obj);
    };

    return KeenService;

  }]);
  
})();