(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueSearchPageController', VenueSearchPageController);

    VenueSearchPageController.$inject = ['DataService']

    function VenueSearchPageController(DataService) {
        var vm = this;
        var STARTING_SEARCH = 'london'
        vm.venues = [];
        vm.searchTerm = STARTING_SEARCH;
        vm.search = search;
        vm.alphabetical = alphabetical;
        vm.recomended = recomended;
        vm.$onInit = onInit;
        vm.$onChanges = onChanges;
        
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

        function alphabetical(){
            vm.venues.sort(alphabeticalCompare);

            function alphabeticalCompare(r1, r2){
                if(r1.venue.name < r2.venue.name) return -1;
                else return 1;
            }
        }

        function recomended(){
            vm.venues.sort(recomendedCompare);

            function recomendedCompare(r1, r2){
                return (r2.venue.rating - r1.venue.rating)*10;
            }
        }

        function onInit(){
            // console.log(vm);
        }

        function onChanges(changes){
            // console.log(changes);   
        }
    }

})();