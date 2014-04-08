var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('CommonController', ['$scope','$route','$routeParams','alltypes',
  function($scope, $route,$routeParams,alltypes) {

   var paramid = $routeParams.id

   alltypes.get(function(dresses){

    switch($route.current.dressType)
     {

      case 'men':
            $scope.men = dresses.men;
            break;
      case 'women':
           $scope.women = dresses.women;
            break;
      case 'kids':
           $scope.kids = dresses.kids;
           break;
      case 'menDetails':
           $scope.mens = dresses.men[paramid];
           break;             
      case 'womenDetails':
           $scope.womens = dresses.women[paramid];
            break;
      case 'kidsDetails':
           $scope.kids = dresses.kids[paramid];
            break;          

     }    
   
  });
  }]);

storeControllers.controller('cartCtrl', function($scope) {
	$scope.saved = localStorage.getItem('products');
	$scope.products = (localStorage.getItem('products')!==null) ? JSON.parse($scope.saved) : [ ];
	localStorage.setItem('products', JSON.stringify($scope.products));
	$scope.addCart = function(img,desc,price,quantity) {
         $scope.products.push({
			image: img,
			name: desc,
			price: price,

		});
          localStorage.setItem('products', JSON.stringify($scope.products));
    }

});

storeControllers.controller('pdtCtrl', function($scope) {
	if(localStorage.getItem("products") ===null)
		  {
		  	$scope.products = [];
		  }
		  else
		  {
		  	$scope.products = JSON.parse(localStorage.getItem("products")); // get value from localstorage
		  }
	  
	  
	  $scope.clear = function(index){ 
		  //$scope.products = [];
		  $scope.products.splice(index, 1);
		 localStorage.setItem('products', JSON.stringify($scope.products));
                  // clear all value in particular storage variable in HTML5 localstorage
	};
});
storeControllers.controller('orderCtrl', function($scope, $location) {
	
	$scope.submit = function() {
		 alert("Thanks for your order");
      	$location.path('/home');
    }

});
