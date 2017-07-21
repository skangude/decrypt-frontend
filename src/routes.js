(function () {
  'use strict';
  angular.module('Decrypter').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider',];
  function RoutesConfig($stateProvider,$urlRouterProvider) {
    //console.log("SOmething");
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'src/template/home.html',
      controller: 'FileController as FileCtrl'
    })
    .state('decrypted',{
      url: '/decrypted',
      templateUrl: 'src/template/decrypted.html',
      controller: 'DecryptionController as DecryptCtrl',
      params: {
        'form_data': "OLDY OLDY"
      },
      resolve: {
        decrypted: ['$stateParams','DataService',function ($stateParams,DataService) {
//           return {
// 'decryptedFile': "the tragedy of romeo and juliet by william  cap. as rich shall romeo's by his lady's lie- poor was a story of more woe than this of juliet and her romeo. exeunt omnes. the end ",
// 'decrKey': "zyxwfvubctsrdeqponmlkjihga"
// };
          console.log($stateParams.form_data);
           return DataService.getDecryptionData($stateParams.form_data);

        }]
      }
    });
  }
})();
