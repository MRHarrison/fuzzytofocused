(function () {
  'use strict';

  angular.module('fuzzytofocused.controllers')
    .controller('portfolio', ['$scope', function($scope){
      $scope.d3Portfolio = [
        {name: "Python", score:25},
        {name: "Memcache", score: 15},
        {name: "Postgresql", score: 20},
        {name: "Mongo", score: 10},
        {name: "Javascript", score:35},
      ];
    }]);

}());