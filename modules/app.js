(function() {

    "use strict";

    angular.module('keengular', [])

    .config(['$sceProvider', '$compileProvider', function($sceProvider, $compileProvider) {
        $sceProvider.enabled(false);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype):/) ;
    }]);

})();
