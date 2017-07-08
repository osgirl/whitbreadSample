(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$q'];

    function DataService($http, $q) {
        var service = {
            getData: getData
        };

        return service;

        ////////////

        function getData(){
            var def = $q.defer()

            def.resolve({data: 'somedata'})

            return def.promise;
        }
    }

})();