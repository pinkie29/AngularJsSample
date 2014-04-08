var dresskart = angular.module('dresskart', ['ngRoute', 'storeControllers','dresskartServices']);

dresskart.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }).
      when('/men', {
        templateUrl: 'templates/mens.html',
        controller: 'CommonController',
        dressType: 'men'
      }).
      when('/men/:id', {
        templateUrl: 'templates/mensDetails.html',
        controller: 'CommonController',
        dressType: 'menDetails'

      }).
      when('/women', {
        templateUrl: 'templates/womens.html',
        controller: 'CommonController',
        dressType: 'women'
      }).
      when('/women/:id', {
        templateUrl: 'templates/womensDetails.html',
        controller: 'CommonController',
        dressType: 'womenDetails'
      }). 
      when('/kids', {
        templateUrl: 'templates/kids.html',
        controller: 'CommonController',
        dressType: 'kids'
      }).
      when('/kids/:id', {
        templateUrl: 'templates/kidsDetails.html',
        controller: 'CommonController',
        dressType: 'kidsDetails'

      }).
      when('/cart', {
        templateUrl: 'templates/pdtcart.html',
        controller: 'pdtCtrl'
      }).
      when('/order', {
        templateUrl: 'templates/orders.html',
        controller: 'orderCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);



dresskart.controller('CommonController', ['$scope','$route','$routeParams','alltypes',
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

dresskart.controller('navCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.navClass = function(page) {

          console.log("location"+$location.path().substring(1) )
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';

            if($location.current.dressType)
            {

             console.log("dressType"+$location.current.dressType);

            }
        };

    }]);