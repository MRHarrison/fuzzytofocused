(function () {
  'use strict';

  angular.module('fuzzytofocused.controllers')
    .controller('portfolio', ['$scope', function($scope){
      $scope.title = "Portfolio";
      $scope.d3Portfolio = [
        {name: "Greg", score:98},
        {name: "Ari", score:96},
        {name: "Loser", score: 48}
      ];
    }]);

}());