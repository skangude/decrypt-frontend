(function () {
  'use strict';

  angular.module('Decrypter')
  .controller('DecryptionController',DecryptionController);

  DecryptionController.$inject = ['decrypted'];
  function DecryptionController(decrypted) {
    var DecryptCtrl = this;
    console.log(decrypted);

    DecryptCtrl.encrypted = decrypted.encryptedFile;
    DecryptCtrl.decrypted = decrypted.decryptedFile;
    DecryptCtrl.key = decrypted.decrKey;
    console.log(DecryptCtrl.key);
  }
})();
