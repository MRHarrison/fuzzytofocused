(function () {
  'use strict';

  angular.module('fuzzytofocused.directives')
    .directive('d3Arc', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "=",
          label: "@",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {

          var svg = d3.select(iElement[0]).append("svg")
              .attr('height', 500)
              .append("g");

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );

          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

          // define render function
          scope.render = function(data){
            // remove all previous items before render
            svg.selectAll("*").remove();
            // setup variables
            var width, height, max, τ;
            width = d3.select(iElement[0])[0][0].offsetWidth - 20;
            height = 500;
            τ = 2 * Math.PI; // http://tauday.com/tau-manifesto
            // set the height based on the calculations above
            svg.attr('width', width)
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var arc = d3.svg.arc()
                      .innerRadius(180)
                      .outerRadius(240)
                      .startAngle(0);
            // Add the background arc, from 0 to 100% (τ).
            var background = svg.append("path")
                .datum({endAngle: τ})
                .style("fill", "#ddd")
                .attr("d", arc);

            // Add the foreground arc in orange, currently showing 12.7%.
            var foreground = svg.append("path")
                .datum({endAngle: 0.127 * τ})
                .style("fill", "orange")
                .attr("d", arc);

          };
        }
      };
    }]);

}());