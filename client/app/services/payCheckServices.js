/**
 * Created by Danny on 12/18/15.
 */
angular.module('ngFlavApp')
  .factory('pastPayChecks', function($http, $q) {
    var serverUrl = 'http://localhost:9000/api/pastPayChecks';

    var createNew = function(payCheckDetails) {
      var data = {
        dateSold : payCheckDetails.dateSold,
        repId : payCheckDetails.repId,
        pay : payCheckDetails.pay,
        panels : payCheckDetails.panels
      };

      return $http({
        method: 'POST',
        url: serverUrl + '/newPayCheck',
        data: data
      })
    }

    return {
      createNew : createNew
    }
  });
