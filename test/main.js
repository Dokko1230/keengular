
describe('Main', function () {

  beforeEach(module('KeenTrackerModule'));

  describe('keenTrackerService', function () {
    var keenTrackerService, config;

    beforeEach(inject(function($injector) {
      keenTrackerService = $injector.get('keenTrackerService');

      config = {
        projectId: "",
        writeKey: "",
        readKey: ""
      }
    }));

    it('should exist', function () {
      expect(typeof keenTrackerService).toBe('object');
    });

    it('should have an initialize function', function () {
      expect(typeof keenTrackerService.initialize).toBe('function');
    });

    it('should have an add function', function() {
      expect(typeof keenTrackerService.add).toBe('function');
    });

    
  });

});