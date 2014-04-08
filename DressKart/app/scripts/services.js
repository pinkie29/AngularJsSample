'use strict';

var dresskartServices = angular.module('dresskartServices', ['ngResource']);

dresskartServices.factory('alltypes', ['$resource',
  function($resource){
    return $resource('json/dresses.json', {}, {
      query: {method:'GET', isArray:true}
    });   
  }]);

