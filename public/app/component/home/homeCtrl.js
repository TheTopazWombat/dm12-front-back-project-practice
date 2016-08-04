angular
  .module('myCommerce')
  .controller('homeCtrl', function($scope, homeSrvc) {
    $scope.getAllProducts = function() {
      homeSrvc.getAllProducts()
        .then(function(response) {
          console.log(response);
        });
    }
  });
