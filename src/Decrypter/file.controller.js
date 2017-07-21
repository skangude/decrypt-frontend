(function () {
  'use strict';

  angular.module('Decrypter')
  .controller('FileController',FileController);

  FileController.$inject = ['$state','$rootScope'];
  function FileController($state,$rootScope) {
    var FileCtrl = this;

    FileCtrl.submitForm = function() {
      $rootScope.$broadcast('dataFetching',{on:true});
      var fd = new FormData();
      fd.append('plainTextFile',angular.element('#plainTextFile')[0].files[0]);
      fd.append('encrFile',angular.element('#encrFile')[0].files[0]);
      $state.go('decrypted',{'form_data':fd});
    };


    // FileCtrl.submitFiles = function (){
    //   console.log("TESTING");
    //   //window.confirm("HERE");
    //
    // }

  };

})();
