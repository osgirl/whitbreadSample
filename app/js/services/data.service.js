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

        function getData(searchTerm){
            var def = $q.defer(),
                urlStart = 'https://api.foursquare.com/v2/venues/explore?near=',
                urlEnd = '&venuePhotos=1&oauth_token=CT0R0Q0KHYN23UNMR5SBZC22C4QCBXNOXQ0KYGQG4A3PGVSC&v=20170704',
                url = urlStart + searchTerm + urlEnd;

            $http.get(url).then(function(response) {
                def.resolve(response.data.response);
            });

            return def.promise;
        }
    }

})();