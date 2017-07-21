(function () {
  angular.module('Decrypter')
  .component('loadingSpinner',{
    templateURL: '/src/template/loading.spinner.html',
    controller: 'SpinnerController as $SpinCtrl'
  });
})();
