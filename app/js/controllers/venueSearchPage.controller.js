(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueSearchPageController', VenueSearchPageController);

    VenueSearchPageController.$inject = ['DataService']

    function VenueSearchPageController(DataService) {
        var vm = this;
        vm.venue = 'test venue';
        vm.data = [];
        console.log('VenueSearchPageController', vm);

        activate();
        ///////////////////
        
        function activate(){
            DataService.getData().then(function(data){
                vm.data = data;
                console.log(vm.data);
            })
        }

        vm.$onInit = function(){
            console.log(vm);
        }

        vm.$onChanges = function(changes){
            console.log(changes);   
        }
    }

})();