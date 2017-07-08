(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueSearchPageController', VenueSearchPageController);

    VenueSearchPageController.$inject = ['DataService']

    function VenueSearchPageController(DataService) {
        var vm = this;
        var STARTING_SEARCH = 'london'
        vm.venues = []
        vm.search = search;
        vm.searchTerm = STARTING_SEARCH;
        console.log('VenueSearchPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            search(STARTING_SEARCH);
        }

        function search(searchTerm){
            console.log(searchTerm);
            DataService.getData(searchTerm).then(function(data){
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