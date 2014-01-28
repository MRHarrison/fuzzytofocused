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
              .attr('height', 700)
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
            var color = d3.scale.category20();

            width = d3.select(iElement[0])[0][0].offsetWidth - 20;
            height = 700;
            τ = 2 * Math.PI; // http://tauday.com/tau-manifesto
            // set the height based on the calculations above
            data.forEach(function(d) {
                d.score = +d.score;
            });

            svg.attr('width', width)
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var arc = d3.svg.arc()
                      .innerRadius(250)
                      .outerRadius(320);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { 
                    console.log(d)
                    return d.score; });

            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");  

            g.append("path")
                  .attr("d", arc)
                  .style("fill", function(d) { return color(d.value); });

            g.append("text")
                  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                  .attr("dy", ".35em")
                  .style("text-anchor", "middle")
                  .text(function(d) { return d.data.name; });

            g.append("text")
                  .attr("dy", ".35em")
                  .attr("class", "h3")
                  .style("text-anchor", "middle")
                  .text(function(d) { return 'Matthew Harrison Full Stack Engineer' });


          };
        }
      };
    }]);

}());