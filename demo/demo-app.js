angular.module('demoModule', ['KeenTrackerModule'])
.controller('DemoCtrl', [
  '$scope',
  'keenTrackerService',
  function($scope, keenTrackerService) {
    var config = {
      projectId: "53f25e69bcb79c2474000007",
      writeKey: "4984860c5d877612fb27e7fb393f8d09ec083bc7b981b172ff190edca815df450dd8f1645b821f7816f6df7047b44f883fac7625ff4e281da8995b910a2cb9bb94e23c498f7a280b5e0db2f755fa2dec431d007ee386bbc7e415a4ade707586f1827545387b8d949e4353f8e921ce0a6",
      readKey: "f03f47a291e1e2b996e2cc799b86cc43b1383719983d641fe84c3bb99ba05f0fcdfb6abf0667f5872af62911972a41e382eb240dc1f4c07ac1c180a055861869add8daf813e96d0a1d66b87f92d683b369798687b60edc60429957a2f5cb20d9553759ab1dc6f10fceaa020f5b7048ef"
    }
    keenTrackerService.initialize(config)
    var sample = {
      woot: Math.random() * 25
    }
    keenTrackerService.addEvent('demo', sample);

  }
]);