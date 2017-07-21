(function () {
  angular.module('Decrypter')
  .controller('SpinnerController',SpinnerController);

  SpinnerController.$inject = ['$rootScope'];
  function SpinnerController($rootScope) {
    $SpinCtrl = this;
    var listenerCancel = $rootScope.$on('dataFetching',function (event,data) {
      $SpinCtrl.show = data.on;
    });

    $SpinCtrl.$onDestroy = function () {
      listenerCancel();
    }

  }
})();
