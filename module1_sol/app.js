(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.colors ={};
  $scope.colors.current = {color: "black"};


  $scope.calDishes = function() {
    var dishes_array = $scope.dishes.split(',');
    var dishes_array_len = dishes_array.length;
    if($scope.dishes == ""){
      $scope.message = "Please Enter Data First!";
       $scope.colors.current = {color: "red"};
    }else if (dishes_array_len <= 3) {
      $scope.message = "Enjoy!";
       $scope.colors.current = {color: "green"};
    }else {
      $scope.message = "Too Much!";
       $scope.colors.current = {color: "green"};
    }
  }
}

})();
