(function() {
    'use strict';

    angular.module('WhitbreadSample', [])
        .component('venueComponent', {
            templateUrl: 'venue.html',
            controller: 'VenueController',
            bindings: {
                venue: '='
            }
        })


})();