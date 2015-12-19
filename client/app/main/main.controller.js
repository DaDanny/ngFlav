'use strict';

angular.module('ngFlavApp')
  .controller('MainCtrl', function ($scope, $http, pastPayChecks) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.createNew = function(){
      var payCheckDetails = {
        dateSold : new Date(),
        repId : 'adb',
        pay : 420,
        panels : 15
      }

      pastPayChecks.createNew(payCheckDetails)
        .then(function(response) {
          console.log('response: ', response);
        })
    }
  });
