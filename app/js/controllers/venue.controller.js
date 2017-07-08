(function() {
    'use strict';

    angular
        .module('WhitbreadSample')
        .controller('VenueController', VenueController);

    function VenueController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onChanges = onChanges
        vm.getImageUrl = getImageUrl;

        //////////

        function getImageUrl(photoData){
            var size = '100x100',
                photoItem = photoData.groups[0].items[0],
                url = photoItem.prefix + size + photoItem.suffix;
            console.log(url)
            return url;
        }

        function onInit(){
            // console.log(vm);
        }

        function onChanges(changes){
            // console.log(changes);   
        }
    }

})();