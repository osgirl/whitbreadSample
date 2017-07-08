(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueController', VenueController);

    function VenueController() {
        var vm = this;

        console.log('VenueController', vm);

        vm.$onInit = function(){
            // console.log(vm);
        }

        vm.$onChanges = function(changes){
            // console.log(changes);   
        }
    }

})();