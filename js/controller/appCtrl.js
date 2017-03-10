"use strict";
angular.module("app", [])
    .controller("appCtrl", ['$scope',"person" ,function($scope){
         alert("Hello world");      
        alert(person.test);
                     $scope.random = "Hello World";     
                                        $scope.submit = function(){
                                            $scope.random="Good morning";
                                        }
                                        
                                        
                                        $scope.formModel=person.personModel{
                                            "firstName":"jone",
                                            "lastName":"Doe",
                                            "phone":"123-123-1234"
                                            
                                        }
                                        
                                        $scope.sampleSubmit=function(){
                                            console.log($scope.formModel);
                                        }
                                
}]);

 
 