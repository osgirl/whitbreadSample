(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueSearchPageController', VenueSearchPageController);

    VenueSearchPageController.$inject = ['DataService']

    function VenueSearchPageController(DataService) {
        var vm = this;
        vm.venues = []
        console.log('VenueSearchPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            DataService.getData().then(function(data){
                vm.venues = data.groups[0].items;
                console.log(vm.venues);
            })
        }

        vm.$onInit = function(){
            // console.log(vm);
        }

        vm.$onChanges = function(changes){
            // console.log(changes);   
        }
    }

})();