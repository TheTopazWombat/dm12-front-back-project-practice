angular
  .module('myCommerce')
  .controller('homeCtrl', function($scope, homeSrvc) {

    // $scope.products = homeSrvc.getAllProducts();

    $scope.getAllProducts = function() {
      homeSrvc.getAllProducts()
        .then(function(response) {
          console.log(response);
          $scope.products = response;
        });
    }
  });
