angular
  .module('myCommerce')
  .service('homeSrvc', function() {
    this.getAllProducts = function() {
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(reponse) {
        return response.data;
      })
    }
  })
