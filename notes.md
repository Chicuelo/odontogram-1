#API

##Dependecies

```javascript 
var app = angular.module("odontogram-app", ['devtam.odontogram.service', 'dev.odontogram.ui']);
```

```javascript 
app.controller("Exampleontroller", function($scope, odontogram)
```

##How to detect which toothSide or tooth you are clicking on?

There is a nice and clean way to detect it. 
`<dev-odontogram />` directive offers  an attribute named `clickevent`

```html
<dev-odontogram clickevent='myClickFunction'/>
```

This method must accept two arguments: toothId (tooth number) and toothName. You don't have to worry about
how to get these arguments since this module calls it and gives them for you. Here's an example:

```javascript
$scope.myClickFunction = function(toothId, toothName){
	console.log('we are clicking on tooth number %s and its name is %s', toothId, toothName);
	var selectedId = toothId;
    var selectedName = toothName;
    var selectedSide = odontogram.getSideTooth(toothId, toothName);

    //getCurrent tooth
    var selectedCanvas = document.getElementById(toothId).fabric;
}

```


```javascript
odontogram.changeColor(sideTooth, canvas, options); (pending)
```

```javascript
odontogram.fillTooth(sideTooth, canvas, options); (pending)
```