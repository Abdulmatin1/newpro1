var app = angular.module("myApp", []);
   app.controller("empCtrl", function($scope) {
alert("Hello world");
  $scope.Employees = [
              {"firstName": "jan"     ,"lastName":  "kazim"  ,"address":"hearat"},
              {"firstName": "ahmad"   ,"lastName":  "shams"  ,"address":"mazar"},
              {"firstName":  "samim"   ,"lastName":  "hasan"  ,"address":"kabul"},
              {"firstName":  "tabish"  ,"lastName":  "mahdi"  ,"address":"dallas"}

       ]
     });


angular.module('myApp',[]);.controller('userService',function
() {
  this.users=['ahmad' , 'jamal' 'kamal'];
});
