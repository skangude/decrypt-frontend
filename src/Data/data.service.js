(function () {
  'use strict';

  angular.module('Data')
  .service('DataService',DataService);

  DataService.$inject = ['$http','$rootScope'];
  function DataService($http,$rootScope) {
    var service=this;
    // Get all categories of menu items for the restaurant
    service.getDecryptionData = function(form_data) {
      return $http.post('http://localhost:3000/decrypter/decrypt',form_data,{
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .then(function (response) {
        $rootScope.$broadcast('dataFetching',{on:false})
        return response.data;
      });
    }
  }
})();
