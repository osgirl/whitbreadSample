(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueSearchPageController', VenueSearchPageController);

    VenueSearchPageController.$inject = ['DataService']

    function VenueSearchPageController(DataService) {
        var vm = this;

        console.log('VenueSearchPageController', vm);

        vm.$onInit = function(){
            console.log(vm);
        }

        vm.$onChanges = function(changes){
            console.log(changes);   
        }
    }

})();