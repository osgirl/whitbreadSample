(function() {
    'use strict';

    angular.module('WhitbreadSample', [])
        .component('venueComponent', {
            templateUrl: 'views/venue.html',
            controller: 'VenueController',
            bindings: {
                venue: '=',
                test: '@'
            }
        })


})();