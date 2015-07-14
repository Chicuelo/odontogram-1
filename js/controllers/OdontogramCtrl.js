var app = angular.module("odontogram-app", ['devtam.odontogram.service', 'dev.odontogram.ui']);

app.controller("OdontogramController", function($rootScope, $scope, $http, odontogram)
{
    $scope.symptoms = [
        {
           color: 'yellow',
           name: 'Caries',
           fillTooth: false,
           isLine: false
        },
        {
            color: 'blue',
            name: 'Restored', 
            fillTooth: false,
            isLine: false
        },
        {
            color: 'pink',
            name: 'Fractured', 
            fillTooth: false,
            isLine: false
        },
        {
            color: 'black',
            name: 'No tooth (fills all tooth of black)', 
            fillTooth: true,
            isLine: false
        },
        {
            color: 'white',
            name: 'Reset tooth',
            fillTooth: true,
            isLine: false
        },
        {
            color: 'red',
            name: 'Red bridge',
            fillTooth: false,
            isLine: true
        } ,
        {
            color: 'green',
            name: 'Green bridge',
            fillTooth: false,
            isLine: true
        }
    ];

    $scope.applyColor = function(symptom)
    {
        if(symptom.fillTooth === true)
        {
            odontogram.fillTooth($scope.selectedSide, symptom);
        }
        else if(symptom.isLine === true)
        {
            odontogram.markLine($scope.selectedId, symptom);
        }
        else
        {
            odontogram.changeColor($scope.selectedSide, symptom)
        }
    }


    $scope.saveSideTooth = function()
    {
        if($scope.selectedSide)
        {
            alert("Tooth number: " + $scope.selectedSide.number + ", side: " + $scope.selectedSide.name);
        }
        else
        {
            alert("Please, select a side tooth");
        }
    }
});

app.run(function($rootScope, odontogram){
    //Method used to detect what tooth side has been clicked on by the directive
    $rootScope.clickFace = function(toothId, toothName)
    {
        $rootScope.selectedId = toothId;
        $rootScope.selectedName = toothName;
        $rootScope.selectedSide = odontogram.getSideTooth(toothId, toothName);

        //getCurrent tooth
        $rootScope.selectedCanvas = document.getElementById(toothId).fabric;
        // $rootScope.selectedCanvas.add($rootScope.selectedSide);

        console.log($rootScope.selectedSide);

        $rootScope.$apply();
    }
})