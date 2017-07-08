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

            var data = [{firstName:"John", lastName:"Doe", age:46},
            {firstName:"John", lastName:"Doe", age:46},
            {firstName:"John", lastName:"Doe", age:46}];

            def.resolve(data);

            return def.promise;
        }
    }

})();