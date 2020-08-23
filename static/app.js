'use strict'

var module = angular.module('myApp', []);

module.controller('AppController', function($http, $scope, $window){

	$scope.init = function(){

		$scope.entities = [
			'student'
		]; 
		
		$scope.selectEntity = function(entity){
			
			$scope.selectedEntityPath = '/templates/' + entity + '/' + entity + '.html';
		};
		
		$scope.selectEntity($scope.entities[0]);
	};
	
	$scope.userType = {
	    availableOptions: [
	      {id: '1', name: 'Student'},
	      {id: '2', name: 'Professor'}
		],
    selectedOption: {id: '1', name: 'Student'} //This sets the default value of the select in the ui
    };	
	
	$scope.userDto = {
            name: null,
            age: null,
			selectedOption: null,
			classRoom: null,
			speciality: null,
			course: null
        };
	
	$scope.saveUserAsProfessor = function(userDto){
		$http({
			method: 'POST',
			url: "http://localhost:8080/professor",
			data: {
				name: userDto.name,
				age: userDto.age,
				classRoom: userDto.classRoom,
				speciality: userDto.speciality,
				
			}
		}).success(function(response){			
			$scope.list();
		}).error(function(http, status){
			console.log()
			$window.alert("n deu boa" + status);
		});
	};
	
	$scope.deleteUser = function(user){		
		$http({
			method: 'DELETE',
			url: "http://localhost:8080/delete",
			params: { id: user.delId }
		}).then(function(response){
			$scope.list();
			$window.alert("Removing...");
		});
	};
	
	$scope.searchUser = function(user){	
		$http.get('/user',{					
			params: {
				id: user.id,
				name: user.name
			}
		}).then(function(response){
			console.log("encontrado: ", response.data)
			$scope.userFound = response.data
		});
	};
});
