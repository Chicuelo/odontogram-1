var app = angular.module("dev.odontogram.ui", ['devtam.odontogram.service']);

app.directive('devOdontogram', function(odontogram) {
  return {
    scope: {
    	clickevent: '=',
    	options: '=?'
    	//initialData: '='
    }, 
    restrict: 'E',
    controller: function($scope,$element,$rootScope)
    {
    	//TODO: create initialize(initialData) method

        $scope.drawAdultQuadrant = function(quadrant){
        	this.draw([
        		quadrant + '1',
        		quadrant + '2',
        		quadrant + '3',
        		quadrant + '4',
        		quadrant + '5',
        		quadrant + '6',
        		quadrant + '7',
        	]);
        }

        $scope.drawChildQuadrant = function(quadrant)
        {
        	this.draw([
        		quadrant + '1',
        		quadrant + '2',
        		quadrant + '3',
        		quadrant + '4',
        		quadrant + '5',
        	]);
        }

        $scope.draw = function(values){
        	for(var index in values){
        		odontogram.drawTooth(values[index]);
        	}
        }

        $scope.drawAdultQuadrant('1');
        // $scope.drawAdultQuadrant('2');

        /*
         * You can override this method in your custom controller
         */
        odontogram.setDefaultEvent($scope.clickevent);
        console.log('Are options enabled: ' + angular.toJson($scope.options));
    },

    templateUrl: 'js/directives/templates/odontogramTpl.html',

    link: function(scope, element, attrs){

    }
  };
});
